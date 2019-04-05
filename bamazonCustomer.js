
const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require('cli-table');
// create the connection information for the sql database
const connection = mysql.createConnection({
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

  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    // instantiate
    let table = new Table({
    head: ['ID', 'Product', 'Department', 'Price', 'Quantity']
    , colWidths: [10, 20, 20, 10, 10]
    });
    let choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
              // table is an Array, so you can `push`, `unshift`, `splice` and friends
              table.push(
                  [results[i].id, results[i].item_name, results[i].department_name, results[i].price, results[i].stock_quantity]
              );
            }
    // table cli turns info
    console.log(table.toString());


    inquirer
      .prompt([
        {
          name: "choice",
          type: "list",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
            }
            return choiceArray;
          },
          message: "What product would you like to purchase?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        // determine if inventory is high enough
        if (parseInt(answer.quantity) <= parseInt(chosenItem.stock_quantity)) {
          // enough inventory, so update db, let the user know, and start over
          updateQuantity = parseInt(chosenItem.stock_quantity) - parseInt(answer.quantity);
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: updateQuantity
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Purchased successfully!");
              start();
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Sorry, we don't have that many. Try again...");
          start();
        }
      });
  });
}







//fin
