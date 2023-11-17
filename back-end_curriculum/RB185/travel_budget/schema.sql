CREATE TABLE categories (
  id serial PRIMARY KEY,
  category varchar(255) NOT NULL UNIQUE
);

CREATE TABLE expenses (
  id serial PRIMARY KEY,
  description text NOT NULL,
  cost numeric(9,2) NOT NULL,
  city varchar(255) NOT NULL,
  country varchar(255) NOT NULL,
  category_id integer NOT NULL REFERENCES categories (id)
    ON DELETE CASCADE
);

