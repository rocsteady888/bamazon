CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT DEFAULT 0,
  stock_quantity INT DEFAULT 0,
  PRIMARY KEY (id)
);

INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('lamp', 'office supplies', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('table', 'furniture', 100.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('desk', 'furniture', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('chair', 'furniture', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('car battery', 'automotive', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('windshield wipers', 'automotive', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('t-shirt', 'clothing', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('hat', 'clothing', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('pants', 'clothing', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('drill', 'power tools', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) VALUES ('saw', 'power tools', 10.00, 25);

SELECT * FROM products;
