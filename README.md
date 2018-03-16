# Bamazon 

 :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  :collision:  


#### Node.js & MySQL

## Overview

This is an Amazon-like storefront with the MySQL and Node.JS. There is a customer view that the prompts a use for which product they would like to purchase and then updates the stock quantity accordingly.  There is also a manager view with more features.  


### Customer View

1. Uses a MySQL Database called `bamazon`.

2. With a table called `products`.

3. The products table has each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. The database is populated with dummy products.  

5. I created a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app then prompts users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, the application checks if the store has enough of the product to meet the customer's request.

   * If not, the app logs a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, then the app fulfills the customer's order.
   * This means the SQL database is updated to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

### Manager View

* I created a new Node application called `bamazonManager.js`. Running this application will:

  * List a set of menu options:

    * View Products for Sale

    * View Low Inventory

    * Add to Inventory

    * Add New Product

  * If a manager selects `View Products for Sale`, the app lists every available item: the item IDs, names, prices, and quantities.

  * If a manager selects `View Low Inventory`, then it lists all items with an inventory count lower than five.

  * If a manager selects `Add to Inventory`, the app displays a prompt that will let the manager "add more" of any item currently in the store.

  * If a manager selects `Add New Product`, it allows the manager to add a completely new product to the store.


## Future development

### Supervisor View

1. Create a new MySQL table called `departments`. Your table should include the following columns:

   * department_id

   * department_name

   * over_head_costs (A dummy number you set for each department)

2. Modify the products table so that there's a product_sales column and modify the `bamazonCustomer.js` app so that this value is updated with each individual products total revenue from each sale.

3. Modify your `bamazonCustomer.js` app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product's product_sales column.

   * Make sure your app still updates the inventory listed in the `products` column.

4. Create another Node app called `bamazonSupervisor.js`. Running this application will list a set of menu options:

   * View Product Sales by Department

   * Create New Department

5. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

6. The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

7. If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.

   aliases in MySQL.

   GROUP BYs.

   JOINS.
