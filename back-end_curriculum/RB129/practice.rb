class Student
  attr_accessor :name
  attr_writer :grade
  
  def initialize(name, grade)
    @name = name
    @grade = grade
  end
  
  def better_grade_than?(other)
    grade > other.grade
  end
  
  protected
  
  attr_reader :grade
  
end

joe = Student.new("Joe", 96)
bob = Student.new("Bob", 65)
puts "Well done!" if joe.better_grade_than?(bob)
