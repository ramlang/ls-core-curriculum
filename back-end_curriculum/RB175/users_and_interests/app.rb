require 'sinatra'
require 'sinatra/reloader'
require 'tilt/erubis'
require 'yaml'

before do
  @file = YAML.load_file("users.yaml")
end

get "/" do
  redirect "/users"
end

get "/users" do
  erb :user_list
end

helpers do
 def count_interests
   list = []
   
   @file.values.each do |hash|
     list << hash[:interests]
    end
    
    list.flatten.count
 end
end

get "/users/:name" do
  @name = params[:name]
  @profile = @file[@name.to_sym]
  
  erb :user_page
end