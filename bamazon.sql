create database bamazon_db;

use bamazon_db;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (item_name, department_name, price, stock_quantity) values ('lamp', 'office supplies', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('table', ' furniture', 100.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('desk', 'furniture', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('chair', 'furniture', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('car battery', 'automotive', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('windshield wipers', 'automotive', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('t-shirt', 'clothing', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('hat', 'clothing', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('pants', 'clothing', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('drill', 'power tools', 10.00, 25);
INSERT INTO products (item_name, department_name, price, stock_quantity) values ('saw', 'power tools', 10.00, 25);

select * from products;
