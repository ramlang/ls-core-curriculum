require 'sinatra'
require 'sinatra/reloader'
require "sinatra/content_for"
require 'tilt/erubis'
require 'pg'

require_relative "database_persistence"

# --------------------------------NOTES----------------------------------------
=begin

- Add a column for date of expense added and allow for the expenses to be sorted that way when sub grouped
- Use AJAX to refresh the TOTAL after deleting a single expense
- Permanently add categories to database? To remove functionality that doesn't seem necessary?
  > Choosing categories, but only categories with expenses will show up anyway so what is the point?
  > Can just have all categories available and allow users to pick expenses to add to each
  > Why have users pick and choose unless they can add their own categories???
- total box displaying before categories are setup
- need to add a cancel button to the add category page?
=end
# --------------------------------NOTES----------------------------------------

# -----------------------------SAMPLE DATA-------------------------------------
=begin

  # UNLESS CATEGORIES BECOME HARDCODED INTO DATABASE
  # CANNOT USE THIS SAMPLE DATA SINCE CATEGORY ID WILL BE DIFFERENT
  # DOES NOT START OVER WHEN CLEARED, SEQUENCE CONTINUES TO INCREMENT
  
  INSERT INTO expenses (description, cost, city, country, category_id)
  VALUES 
    ('Hostel', 200.00, 'Hamburg', 'Germany', 1),
    ('Hotel', 150.00, 'Crete', 'Greece', 1),
    ('Food', 30.00, 'Hamburg', 'Germany', 2),
    ('Rental Car', 100.00, 'Crete', 'Greece', 3),
    ('Train', 9.00, 'Munich', 'Germany', 3);
    
=end
# -----------------------------SAMPLE DATA-------------------------------------

# ------------------------------CONFIGURE--------------------------------------
CATEGORIES = ["Accommodations", "Attractions", "Events",
              "Food and Beverage", "Transportation", "Miscellaneous"]

configure do
  enable :sessions
  set :session_secret, '5782f6c8404927657b6e64ef60c78842cddb4ea0a610350843bcd9473ddd9b3d'
  set :erb, escape_html: true
  also_reload "database_persistence.rb"
end

before do
  @storage = DatabasePersistence.new(logger)
end

after do
  @storage.disconnect
end
# ------------------------------CONFIGURE--------------------------------------

# -------------------------------HELPERS---------------------------------------
helpers do

# Might not need these as helper methods?
# which methods should become helper methods?
# do not really need wrapper methods to be helper methods should usually have some other logic extracted.
end

def total_of_all_expenses
  @storage.all_expenses_total
end

def total_of_sub_expenses(sort_by_column, value)
  @storage.sub_expenses_total(sort_by_column, value)
end

def remaining_categories
  existing_categories = @storage.category_names

  CATEGORIES - existing_categories
end
# -------------------------------HELPERS---------------------------------------

# -------------------------------METHODS---------------------------------------

def redirect_if_no_categories
  if @storage.category_names.empty?
    redirect "/setup"
    session[:error] = "You must add at least one category to continue."
  end
end

def error_for_string(string)
  if !(1..255).cover?(string.size)
    session[:error] = "Must enter a value for all fields."
  elsif string.match(/[^a-zA-Z\s]/)
    session[:error] = "Only alphabetic characters for description, city, and country can be entered."
  end
end

def error_for_float(string)
  if string.match(/[^0-9.]/)
    session[:error] = "Only numbers 0 - 9 or '.' for cost can be entered."
  elsif string.to_f < 0.0 || string.to_f > 9999999.99
    session[:error] = "Cost must be greater than 0.00 and less than 9999999.99."
  end
end

def string_params(expense)
  [expense[:description], expense[:city], expense[:country]]
end

def new_expense_to_hash(params)
  { description: params[:description].strip,
    city: params[:city].strip,
    country: params[:country].strip,
    cost: params[:cost].strip,
    category_id: params[:category_id].to_i }
end

def invalid_expense?(new_expense)
  string_params(new_expense).each do |value|
    error = error_for_string(value)
    return error if error
  end
  
  error = error_for_float(new_expense[:cost])
  return error if error
end

def add_categories(categories)
  categories.each do |category|
    @storage.add_category(category) unless @storage.category_exists?(category)
  end
end

def load_expense(id)
  puts "This is the id #{id}"
  @storage.single_expense(id)[0]
end

def update_expense(id, new_expense)
  @storage.delete_expense(id)
  @storage.add_expense(new_expense)
end

def error_no_expenses_exist
  "There are no expenses to display." if !@storage.expenses_exists?
end

def error_no_categories_exist
  if @storage.category_names.empty?
    "You must add at least one category to continue."
  end
end

def reset
  @storage.delete_all_expenses
  @storage.delete_all_categories
end

# -------------------------------METHODS---------------------------------------

# --------------------------------ROUTES---------------------------------------

# GET HOME: Display list of expenses organized by category
get "/" do
  redirect_if_no_categories
  redirect "/setup" if session[:sort] == nil
  @sort_value = session[:sort]
  session[:error] = error_no_expenses_exist if error_no_expenses_exist
  
  @all_expenses = @storage.expenses_by(@sort_value)

  erb :home, layout: :layout
end

# POST HOME: Update how expenses are sorted and displayed on home page
post "/" do
  session[:sort] = params[:sort]
  
  redirect "/"
end

# SETUP: Display selection of categories to sort expenses by
get "/setup" do
  if remaining_categories.size > 0
    erb :setup, layout: :layout_edit
  else
    session[:error] = "There are no more categories to add."
    redirect "/" 
  end
end

# SETUP: Add categories to the database
post "/setup" do
  categories = params[:categories]
  error = error_no_categories_exist

  if error && categories.nil?
    session[:error] = error
    erb :setup, layout: :layout_edit
  else
    if categories
      list = categories.join(", ")
      add_categories(categories)
      session[:success] = "The following categories have been added: #{list}"
    end
    session[:sort] = "category"
    redirect "/"
  end
end

# GET ADD EXPENSE: Display form to enter a new expense
get "/add_expense" do
  redirect_if_no_categories
  @category_list = @storage.all_categories
  
  erb :add, layout: :layout_edit
end

# POST ADD EXPENSE: Add new expense to the database
post "/add_expense" do
  new_expense = new_expense_to_hash(params)
  
  if invalid_expense?(new_expense)
    @category_list = @storage.all_categories
    erb :add, layout: :layout_edit
  else
    new_expense[:cost] = new_expense[:cost].to_f
    @storage.add_expense(new_expense)
    redirect "/"
  end
end

# GET VALUE: Display list of expenses per specific category, city, or country
get "/:value" do
  redirect_if_no_categories
  
  @value = params[:value]
  @sort_by_column = session[:sort]
  @sub_expenses = @storage.expense_list_for(@sort_by_column, @value)

  erb :group, layout: :layout
end

# GET EDIT/ID: Display form to edit an existing expense
get "/edit/:id" do
  redirect_if_no_categories
  
  id = params[:id]
  @expense = load_expense(id)
  puts "expenses #{@expense}"
  @category_list = @storage.all_categories
  
  erb :edit, layout: :layout_edit
end

# POST EDIT/ID: Update expense in database after validation
post "/edit/:id" do
  new_expense = new_expense_to_hash(params)
  
  if invalid_expense?(new_expense)
    erb :edit, layout: :layout_edit
  else
    update_expense(params[:id].to_i, new_expense)
    redirect "/"
  end
end

# POST EDIT/ID/DESTROY: Delete single expense, confirmation using AJAX
post "/edit/:id/destroy" do
  @storage.delete_expense(params[:id])
  if env["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest"
    status 204
  else
    session[:success] = "The expense has been deleted."
    redirect "/" 
  end
end

# POST /DESTROY_ALL: Clear all data from database, confirmation using AJAX
post "/destroy_all" do
  reset
  if env["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest"
    session[:success] = "All data has been cleared."
    "/setup"
  else
    redirect "/"
  end
end
# --------------------------------ROUTES---------------------------------------