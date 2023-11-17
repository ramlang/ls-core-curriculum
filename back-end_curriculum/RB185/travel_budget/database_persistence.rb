require "pg"

class DatabasePersistence
  def initialize(logger)
    @logger = logger
    @db = PG.connect(dbname: 'travel_expenses')
  end
  
  def query(statement, *params)
    @logger.info "#{statement}: #{params}"
    @db.exec_params(statement, params)
  end
  
  def disconnect
    @db.close
  end
  
# ----------------------------CATEGORY METHODS---------------------------------
  def category_exists?(category)
    sql = "SELECT 1 FROM categories WHERE category = $1"
    result = query(sql, category)
    result.ntuples >= 1
  end
  
  def add_category(name)
    sql = "INSERT INTO categories (category) VALUES ($1)"
    query(sql, name)
  end

  def all_categories
    sql = "SELECT * FROM categories"
    query(sql)
  end
  
  def category_names
    all_categories.map do |tuple|
      tuple["category"]
    end
  end
  
  def delete_all_categories
    sql = "DELETE FROM categories"
    query(sql)
  end
  
# ----------------------------CATEGORY METHODS---------------------------------

# ------------------------SORTING EXPENSES METHODS-----------------------------
  def expenses_exists?
    sql = "SELECT 1 FROM expenses"
    result = query(sql)
    result.ntuples >= 1
  end
  
  def expenses_by(column)
    sql = <<~SQL
      SELECT #{column}, SUM(cost)
      FROM expenses AS e
      LEFT OUTER JOIN categories AS c
      ON c.id = e.category_id
      GROUP BY #{column}
      ORDER BY SUM(cost) DESC
    SQL
    
    query(sql)
  end

# ------------------------SORTING EXPENSES METHODS-----------------------------

# ---------------------------EXPENSES METHODS----------------------------------

  def expense_list_for(column, common_value)
    sql = <<~SQL
      SELECT e.id, description, city, country, category, cost
      FROM expenses AS e
      LEFT OUTER JOIN categories AS c
      ON c.id = e.category_id
      WHERE #{column} = $1
    SQL
    
    result = query(sql, common_value)
    
    result.map do |tuple|
      tuple_to_list(tuple)
    end
  end
  
  def add_expense(expense)
    sql = <<~SQL
      INSERT INTO expenses (description, cost, city, country, category_id)
      VALUES ($1, $2, $3, $4, $5)
    SQL
    
    query(sql, expense[:description], expense[:cost],
          expense[:city], expense[:country], expense[:category_id])
  end
  
  def single_expense(id)
    sql = <<~SQL
      SELECT * FROM expenses WHERE id = $1
    SQL
    
    query(sql, id)
  end
  
  def delete_expense(id)
    sql = <<~SQL
      DELETE FROM expenses WHERE id = $1
    SQL
    
    query(sql, id)
  end
  
  def delete_all_expenses
    sql = "DELETE FROM expenses"
    query(sql)
  end

# ---------------------------EXPENSES METHODS----------------------------------

# ----------------------------TOTAL AND SUM -----------------------------------
  
  def all_expenses_total
    sql = "SELECT SUM(cost) as total FROM expenses"
    
    result = query(sql)
    result[0]["total"]
  end
  
  def sub_expenses_total(column, value)
    sql = <<~SQL
      SELECT SUM(cost) as total
      FROM expenses AS e
      LEFT OUTER JOIN categories AS c
      ON c.id = e.category_id
      WHERE #{column} = $1
    SQL
    
    result = query(sql, value)
    result[0]["total"]
  end
  
# ----------------------------TOTAL AND SUM -----------------------------------

  private

  def tuple_to_list(tuple)
    { id: tuple["id"],
      description: tuple["description"],
      city: tuple["city"],
      country: tuple["country"],
      category: tuple["category"],
      cost: tuple["cost"] }
  end

end