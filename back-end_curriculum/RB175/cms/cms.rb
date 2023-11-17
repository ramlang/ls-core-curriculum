require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"
require "redcarpet"
require "yaml"
require "bcrypt"


configure do
  enable :sessions
  set :session_secret, 'super secret'
end

def data_path
  if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/data", __FILE__)
  else
    File.expand_path("../data", __FILE__)
  end
end

def render_markdown(text)
  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
  markdown.render(text)
end

def load_file_content(path)
  content = File.read(path)
  case File.extname(path)
  when ".txt"
    headers["Content-Type"] = "text/plain"
    content
  when ".md"
    erb render_markdown(content)
  end
end

def redirect_if_user_signed_out
  return if session[:username]
  session[:message] = "You must be signed in to do that."
  redirect "/"
end

def valid_extension(ext)
  ext == ".txt" || ext == ".md"
end

def valid_credentials?(username, password)
  credentials = load_user_credentials
  
  if credentials.key?(username)
    bcrypt_password = BCrypt::Password.new(credentials[username])
    bcrypt_password == password
  else
    false
  end
end

def load_user_credentials
  credentials_path = if ENV["RACK_ENV"] == "test"
    File.expand_path("../test/users.yml", __FILE__)
  else
    File.expand_path("../users.yml", __FILE__)
  end
  YAML.load_file(credentials_path)
end

# View list of files in data directory
get "/" do
  pattern = File.join(data_path, "*")
  @files = Dir.glob(pattern).map do |path|
    File.basename(path)
  end
  erb :index
end

# Sign in page
get "/users/signin" do
  erb :sign_in
end

# Check username and password
post "/users/signin" do
  username = params[:username]
  
  if valid_credentials?(username, params[:password])
    session[:username] = username
    session[:message] = "Welcome!"
    redirect "/"
  else
    session[:message] = "Invalid credentials."
    status 422
    erb :sign_in
  end
end

# Sign out
post "/users/signout" do
  session.delete(:username)
  session[:message] = "You have been signed out."
  redirect "/"
end

# Create a new document file
get "/new" do
  redirect_if_user_signed_out
  
  erb :new_document
end

# Update document list
post "/create" do
  redirect_if_user_signed_out
  filename = params[:filename].to_s
  ext = File.extname(filename)
  
  if filename.size == 0
    session[:message] = "A name is required."
    status 422
    erb :new_document
  elsif !valid_extension(ext)
    session[:message] = "Valid extensions include '.txt' and '.md'."
    status 422
    erb :new_document
  else
    file_path = File.join(data_path, filename)
    
    File.write(file_path, "")
    session[:message] = "#{params[:filename]} was created."
    
    redirect "/"
  end
end

# Delete a file
post "/:filename/delete" do
  redirect_if_user_signed_out
  file_path = File.join(data_path, params[:filename])

  File.delete(file_path)
  
  session[:message] = "#{params[:filename]} was deleted."
  redirect "/"
end

# View contents of single file
get "/:filename" do
  file_path = File.join(data_path, params[:filename])
  
  if File.file?(file_path)
    load_file_content(file_path)
  else
    session[:message] = "#{params[:filename]} does not exist."
    redirect "/"
  end
end

# Edit the contents of a single file
get "/:filename/edit" do
  redirect_if_user_signed_out
  file_path = File.join(data_path, params[:filename])
  
  @filename = File.basename(file_path)
  @content = File.read(file_path)
  
  erb :edit
end

# Update contents of a single file
post "/:filename" do
  redirect_if_user_signed_out
  file_path = File.join(data_path, params[:filename])

  File.write(file_path, params[:content])
  
  session[:message] = "#{params[:filename]} has been updated."
  redirect "/"
end
