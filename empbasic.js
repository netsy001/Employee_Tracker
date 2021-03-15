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
  database: 'employee_db'
});

// function which prompts the user for what action they should take
const start = () => {
  inquirer
    .prompt({
      name: 'select',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View all Employees?', 'View all department?','View all roles?',
    'Add Employees?','Add departments?','Add roles?', 'Update Employees role?', 'EXIT'],
    })
    .then((answer) => {
    switch(answer.select){
      case 'View all Employees?':viewEmployees();
      break;
      case 'View all department?':viewDepartment();
      break;
      case 'View all roles?':viewRolls();
      break;
      case 'Add Employees?':addEmployees();
      break;
      case 'Add departments?':addDepartments();
      break;
      case 'Add roles?':addRoles();
      break;
      case 'Update Employees role?':updateEmployees();
      break;
    };
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

const viewDepartment = () =>{
  connection.query('SELECT * FROM department', (err,res) => {
    console.log(res)
    console.table(res);
    start();
  });
};

const viewRolls = () =>{
  connection.query('SELECT * FROM role', (err,res) => {
    console.log(res)
    console.table(res);
    start();
  });
};
const addEmployees = () =>{
  connection.query('SELECT * FROM role', (err,res) => {
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
