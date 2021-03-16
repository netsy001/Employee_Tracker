const mysql = require('mysql');
const inquirer = require('inquirer');
require('dotenv').config();
const consoleTable = require("console.table");

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: 'root',
  // Your password
  password: process.env.db_password,
  database: 'employee_db'
});

// function which prompts the user for what action they should take
const start = () => {
  inquirer
    .prompt({
      name: 'select',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View all Employees?', 'View all department?', 'View all roles?',
        'Add Employees?', 'Add departments?', 'Add roles?', 'EXIT'],
    })
    .then((answer) => {
      switch (answer.select) {
        case 'View all Employees?': viewEmployees();
          break;
        case 'View all department?': viewDepartment();
          break;
        case 'View all roles?': viewRolls();
          break;
        case 'Add Employees?': addEmployees();
          break;
        case 'Add departments?': addDepartments();
          break;
        case 'Add roles?': addRoles();
          break;
        case 'EXIT': exit();
          break;
      };
    });
};

//view employes
const viewEmployees = () => {
  connection.query('SELECT * FROM employee', (err, res) => {
    console.log(res)
    console.table(res);
    start();
  });
};
//view departments
const viewDepartment = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    console.log(res)
    console.table(res);
    start();
  });
};
//view roles
const viewRolls = () => {
  connection.query('SELECT * FROM role', (err, res) => {
    console.log(res)
    console.table(res);
    start();
  });
};

//add employees
const addEmployees = () => {
  connection.query('SELECT * FROM role', function (err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: 'firstname',
          type: 'input',
          message: 'What is the employee firstname?',
        },
        {
          name: 'lastname',
          type: 'input',
          message: 'What is the employee lastname?',
        },
        {
          name: 'manager_id',
          type: 'input',
          message: 'What is the employee manager_id?',
        },
        {
          name: 'role',
          type: 'list',
          choices: function () {
            var roleArray = [];
            for (let i = 0; i < res.length; i++) {
              roleArray.push(res[i].title);
            }
            return roleArray;
          },
          message: "What is this employee's role? "
        }
      ]).then(function (answer) {
        let role_id;
        for (let a = 0; a < res.length; a++) {
          if (res[a].title == answer.role) {
            role_id = res[a].id;
            console.log(role_id)
          }
        }
        connection.query('INSERT INTO employee SET ?',
          {
            first_name: answer.first_name,
            last_name: answer.last_name,
            role_id: role_id,
            manager_id: answer.manager_id,
          },
          (err) => {
            if (err) throw err;
            console.log('Created successfully!');
            start();
          });
      });
  });
};

// add department
const addDepartments = () => {
  inquirer.prompt([{
    name: 'newDepartment',
    type: 'input',
    message: 'Which department would you like to add?'
  }]).then((answer) => {
    connection.query(
      'INSERT INTO department SET ?',
      {
        name: answer.newDepartment
      });
    var query = 'SELECT * FROM department';
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.log('Your department has been added!');
      console.table(res);
      start();
    });
  });
};

const addRoles = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;

    inquirer
      .prompt([
        {
          name: 'new_role',
          type: 'input',
          message: "What new role would you like to add?"
        },
        {
          name: 'salary',
          type: 'input',
          message: 'What is the salary of this role? (Enter a number)'
        },
        {
          name: 'Department',
          type: 'list',
          choices: () => {
            var deptArry = [];
            for (let i = 0; i < res.length; i++) {
              deptArry.push(res[i].name);
            }
            return deptArry;
          },
        }
      ]).then((answer) => {
        let department_id;
        for (let a = 0; a < res.length; a++) {
          if (res[a].name == answer.Department) {
            department_id = res[a].id;
          }
        }
        connection.query(
          'INSERT INTO role SET ?',
          {
            title: answer.new_role,
            salary: answer.salary,
            department_id: department_id
          },
          (err, res) => {
            if (err) throw err;
            console.log('Successfully added!');
            console.table(res);
            start();
          })
      })
  })
};

const exit = () => {
  connection.end();
};
//connect to the mysql server and sql database
connection.connect((err) => {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
