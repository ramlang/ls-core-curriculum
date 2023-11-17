require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erubis'
require 'yaml'

configure do
  enable :sessions
  set :session_secret, 'secret'
end

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../tests/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

def user_yaml_path
  File.join(data_path, "#{session[:username]}.yml")
end

def create_new_contact_list
  File.open(user_yaml_path, "w") do |file|
    file.write({}.to_yaml)
  end
end

def add_new_contact_to_list(new_contact)
  id = new_contact[:id]
  contact_list = YAML.load(File.read(user_yaml_path))
  contact_list[id] = new_contact
  
  File.open(user_yaml_path, "w") do |file|
    file.write(contact_list.to_yaml)
  end
end

def next_element_id
  contact_list = YAML.load(File.read(user_yaml_path))
  max = contact_list.map { |element| element[:id] }.max || 0
  max + 1
end

def load_contact_info(id)
  contact_list = YAML.load(File.read(user_yaml_path)) # hash
  contact_list[id.to_i]
  # Add an error message incase URL is entered and id of list cannot be found
  # see todo.rb load_list method for example
end

before do
end

after do
end

helpers do
end

# HOME PAGE: Display the Contact List
get "/" do
  @username = session[:username]
  redirect "/welcome" unless @username
  
  @contact_list = YAML.load(File.read(user_yaml_path))
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
    session[:success] = "A new contact list has been created."
    create_new_contact_list
    redirect "/"
  end
end

# CONTACT PAGE: Create a new contact
get "/new" do
  erb :new
end

# CONTACT PAGE: Write new contact information to user.yml
post "/new" do
  new_contact = {
    id: next_element_id,
    name: params[:name],
    phone: params[:phone],
    email: params[:email],
    group: params[:group]  
  }
  
  add_new_contact_to_list(new_contact)
  redirect "/"
end

# CONTACT PAGE: Display contact information
get "/:id" do
  @contact_info = load_contact_info(params[:id])
  erb :info
end

# EDIT PAGE: Display edit contact information form with current values
get "/:id/edit" do
  @contact_info = load_contact_info(params[:id])
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
