ENV["RACK_ENV"] = "test"

require 'minitest/autorun'
require 'rack/test'
require 'fileutils'

require_relative "../contact_list"

class ContactListTest < Minitest::Test
  include Rack::Test::Methods
  
  def app
    Sinatra::Application
  end
  
  def session
    last_request.env["rack.session"]
  end
  
  def user_session
    { "rack.session" => { username: "widward" } }
  end
  
  def setup
    create_user_yaml
  end
  
  def teardown
    session[:username] = nil
    FileUtils.rm(File.join(data_path, "widward.yml"))
  end

  def create_user_yaml
    post "/welcome", username: "widward"
    get last_response["Location"]
  end
  
  def contact_hash
    {
      id: next_element_id,
      name: "Emil",
      phone: 12345678,
      email: "emil@neir.com",
      group: "Friend"
    }
  end
  
  # ******* ALTER SETUP AND TEARDOWN METHODS FOR TESTS BELOW ********
  # def test_redirect_to_welcome_page
  #   get "/"
    
  #   assert_equal 302, last_response.status
  #   assert_equal "text/html;charset=utf-8", last_response["Content-Type"]
    
  #   get last_response["Location"]
  #   assert_includes last_response.body, "RB175"
  # end
  
  # def test_welcome_page
  #   get "/welcome"
  #   assert_equal 200, last_response.status
  #   assert_includes last_response.body, "RB175"
  # end
  
  # def test_entering_name_to_welcome_page
  #   post "/welcome", username: "widward"
    
  #   assert_equal 302, last_response.status
  #   assert_equal "widward", session[:username]
    
  #   get last_response["Location"]
  #   assert_includes last_response.body, "Widward's Contact List"
  # end
  
  # def test_entering_invalid_name_to_welcome_page
  #   post "/welcome", username: ""
    
  #   assert_equal 422, last_response.status
  #   assert_nil session[:username]
  #   assert_includes last_response.body, "Please enter a name to proceed."
  # end
  # ******* ALTER SETUP AND TEARDOWN METHODS FOR TESTS ABOVE ********
  
  def test_new_contact_page
    get "/new"
    assert_equal 200, last_response.status
  end
  
  def test_submitting_new_contact_to_yaml
    post "/new", contact_hash, user_session
    
    assert_equal 302, last_response.status
    assert_equal "widward", session[:username]
    
    get last_response["Location"]
    assert_includes last_response.body, "Emil"
  end
  
  def test_display_contact_page
    post "/new", contact_hash, user_session
    
    get "/1"
    
    assert_equal 200, last_response.status
    assert_includes last_response.body, "Emil"
    assert_includes last_response.body, "12345678"
    assert_includes last_response.body, "emil@neir.com"
  end
  
  def test_display_edit_page
    post "/new", contact_hash, user_session
    
    get "/1/edit"
    assert_equal 200, last_response.status
  end
  
  def test_display_edit_page
    post "/new", contact_hash, user_session
    
    get "/1/edit"
    assert_equal 200, last_response.status
  end
end