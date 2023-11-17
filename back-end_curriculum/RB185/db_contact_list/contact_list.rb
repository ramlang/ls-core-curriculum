require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erubis'
require 'yaml'

require "pg"
require "pry"

configure do
  enable :sessions
  set :session_secret, 'secret'
end

class DatabasePersisetence
  def initialize(logger)
    @database = PG.connect(dbname: 'contacts')
    @logger = logger
  end
  
  def query(statement, *params)
    @logger.info "#{statement}: #{params}"
    @database.exec_params(statement, params)
  end
  
  def disconnect
    @database.close
  end
  
  def user_already_exists?(username)
    sql = "SELECT id FROM users WHERE username = $1"
    result = query(sql, username)
    result.values.include?(username)
  end
  
  def user_login(username)
    @username = username
    
    return if user_already_exists?(username)
    create_new_user
    create_users_contact_list
  end
  
  def create_new_user
    sql = "INSERT INTO users (username) VALUES ($1)"
    query(sql, @username)
  end
  
  def create_users_contact_list
    sql = <<~SQL
      CREATE TABLE #{@username} (
      id serial PRIMARY KEY,
      name text NOT NULL,
      email text NOT NULL CHECK (email LIKE '%@%.%'),
      phone int NOT NULL CHECK ((phone::text).length = 10),
      "group" int NOT NULL REFERENCES groups (id)
      )
    SQL
    
    query(sql)
  end
  
  def load_contacts(username)
    sql = "SELECT id, name FROM #{username}"
    contacts = query(sql)
    
    contacts.map do |tuple|
      { id: tuple["id"].to_i, name: tuple["name"] }
    end
  end
  # def create_new_contact_list
    # File.open(user_yaml_path, "w") do |file|
    #   file.write({}.to_yaml)
    # end
  # end
  
  def add_contact(username, info)
    sql = <<~SQL
      INSERT INTO #{username}
        (name, phone, email, "group")
      VALUES
        ($1, $2, $3, $4)
    SQL

    query(sql, info[0], info[1], info[2], info[3])
  end
  
  def load_info(username, id)
    sql = "SELECT * FROM #{username} WHERE id = $1"
    result = query(sql, id)
    result = result[0]
    { id: result["id"],
      name: result["name"],
      email: result["email"],
      phone: result["phone"],
      group: result["group"] }
  end
  
  # Add an error message incase URL is entered and id of list cannot be found
  # see todo.rb load_list method for example
  
  # if i have a delete method, i need to be sure to delete user from users table. or have a on delete cascade clause
  
end

# -----------------------------------

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../tests/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

before do
  @storage = DatabasePersisetence.new(logger)
end

after do
  @storage.disconnect
end

helpers do
end

# HOME PAGE: Display the Contact List
get "/" do
  @username = session[:username]
  redirect "/welcome" unless @username
  
  @contact_list = @storage.load_contacts(@username)
  erb :list
end

# WELCOME PAGE: Display welcome and get user's name
get "/welcome" do
  
  erb :welcome
end

# POST WELCOME PAGE: Submit user's name and redirect to home
# NEED TO FIX: Make sure to use characters that are valid for file names
post "/welcome" do
  username = params[:username].strip
  
  if username.size == 0
    status 422
    session[:error] = "Please enter a name to proceed."
    erb :welcome
  else
    session[:username] = username
    session[:success] = "Welcome!"
    @storage.user_login(username)
    redirect "/"
  end
end


# CONTACT PAGE: Create a new contact
get "/new" do
  erb :new
end

# CONTACT PAGE: Write new contact information to user.yml
post "/new" do
  @username = session[:username]
  contact_info = [
    params[:name],
    params[:phone],
    params[:email],
    params[:group]  
  ]
  
  @storage.add_contact(@username, contact_info)
  redirect "/"
end

# CONTACT PAGE: Display contact information
get "/:id" do
  id = params[:id].to_i
  @contact_info = @storage.load_info(session[:username], id)
  erb :info
end

# EDIT PAGE: Display edit contact information form with current values
get "/:id/edit" do
  @contact_info = @storage.load_info(session[:username], params[:id])
  erb :edit
end

# POST EDIT PAGE: Rewrite updated contact information to user.yml
post "/:id/edit" do
  id = params[:id].to_i
  @contact_list = YAML.load(File.read(user_yaml_path))
  
  @contact_list[id][:name] = params[:name]
  @contact_list[id][:phone] = params[:phone]
  @contact_list[id][:email] = params[:email]
  @contact_list[id][:group] = params[:group]
  
  File.open(user_yaml_path, "w") do |file|
    file.write(@contact_list.to_yaml)
  end
  
  redirect "/#{params[:id]}"
end
=begin
# POST DELETE: Rewrite contact list without deleted item
post "/:id/delete" do
  id = params[:id].to_i
  @contact_list = YAML.load(File.read(user_yaml_path))
  
  @contact_list.reject! { |contact_id, info| contact_id == id }
  
  File.open(user_yaml_path, "w") do |file|
    file.write(@contact_list.to_yaml)
  end
  
  redirect "/"
end
=end

# FEATURES TO ADD
# - Validate that each entry for form submission contains characters
# - Number should only include 1-9, -, (), +
# - Email should be valid with @ and .com, .net .something?
# - Add flash message pop ups for updating content
# - message pop up asking to continue before deleting a contact from the list
# - make sure the user name can also be a valid filename
# - sorting the contacts if desired
# - write some CSS to make it look prettier
# - input boxes appear on different lines
# - add a place to upload user picture and display (hard)
# - Make a sign in and out function since naming the list is basically signing in
# - Prompt to ask if changes should be save before signing out?
# - that way file can be deleted if wanted or kept to sign in again?


# Think about how to display the order of the lists too
# Maybe create a sort method for the home page path
# alphabetical or by group or by when they were created
