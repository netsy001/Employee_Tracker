const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require("console.table");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: 'root',
  // Your password
  password: 'Netsy001.',
  database: 'employee_db',
});

// function which prompts the user for what action they should take
const start = () => {
  inquirer
    .prompt({
      name: 'select',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View all Employees?', 'View all Employees by department', 'View Employees by manager?',
    'Add Employees?', 'Remove Employees?', 'Update Employees role', 'Add role', 'Remove role', 'View all roles?'],
    })
    .then((answer) => {
      // based on their answer, either call the bid or the post functions
      if (answer.select === 'View all Employees?') {
        viewEmployees();
      // } else if (answer.postOrBid === 'BID') {
      //   bidAuction();
      } else {
        connection.end();
      }
    });
};

//view employess

const viewEmployees = () =>{
  connection.query('SELECT * FROM employee', (err,res) => {
    console.log(res)
    console.table(res);
    start();
  });
};

//connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
