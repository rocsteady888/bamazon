var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "root",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {


    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all available products",
          "View low inventory",
          "Increase Stock Quantity",
          "Add new product"
        ]
      })
      .then(function(answer) {
          switch (answer.action) {
            case "View all available products":
              viewAllProducts();
              break;

            case "View low inventory":
              viewLowInventory();
              break;

            case "Increase Stock Quantity":
              increaseStockQuantity();
              break;

            case "Add new product":
              addNewProduct();
              break;
          }
        });
}

function viewAllProducts() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // instantiate
    var table = new Table({
    head: ['ID', 'Product', 'Department', 'Price', 'Quantity']
    , colWidths: [5, 10, 10, 5, 5]
    });
    var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
              // table is an Array, so you can `push`, `unshift`, `splice` and friends
              table.push(
                  [results[i].id, results[i].item_name, results[i].department_name, results[i].price, results[i].stock_quantity]
              );
            }
    // table cli turns info
    console.log(table.toString());
    start();
  });
}

function viewLowInventory() {
  connection.query("SELECT * FROM products WHERE stock_quantity < 6", function(err, results) {
    if (err) throw err;
    // instantiate
    var table = new Table({
    head: ['ID', 'Product', 'Department', 'Price', 'Quantity']
    , colWidths: [5, 10, 10, 5, 5]
    });
    var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
              // table is an Array, so you can `push`, `unshift`, `splice` and friends
              table.push(
                  [results[i].id, results[i].item_name, results[i].department_name, results[i].price, results[i].stock_quantity]
              );
            }
    // table cli turns info
    console.log(table.toString());
    start();
  });
}

function addNewProduct() {
  // prompt for info about the item
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "What is the item you would like to submit?"
      },
      {
        name: "department",
        type: "input",
        message: "Which department?"
      },
      {
        name: "price",
        type: "input",
        message: "What is the price?"
      },
      {
        name: "quantity",
        type: "input",
        message: "Quantity?"
       }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO products SET ?",
        {
          item_name: answer.item,
          department_name: answer.department,
          price: answer.price,
          stock_quantity: answer.quantity
        },
        function(err) {
          if (err) throw err;
          console.log("Your product was added successfully!");
          // re-prompt the user
          start();
        });
    });
}








//fin
