# Employee_Tracker

![license](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Table of Content
* [Project Links](#Project-Links)
* [Screenshots-Demo](#Screenshots)
* [Project Objective ](#Project-Objective)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Author Contact ](#Author-Contact)
* [License](#License)

## Project Links
https://github.com/netsy001/Employee_Tracker

https://drive.google.com/file/d/17Tr2QAFGyFscvdVT-fU3_OXBIdjqrPzU/view


## Screenshots - Demo
<kbd>![screenshot-demo1](./img/img1.gif)</kbd>

## Project Objective
AS A developer, I WANT to Design the following database schema containing three tables:

![Database Schema](Assets/schema.png)

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

## Installation
In order to develop a Employee_Tracker we need to instal visual studio code the code editor which is recommended. Github , MySQL Workbench are also necessary to deploy the project. We also need to install the node dependencies.

## Usage
In order to develop  Employee_Tracker we need to instal visual studio code the code editor which is recommended. Also require following technologies node.js, npm inquirer,MySQL Workbench, Javascript, Markdowns. Github are  also necessary. We also need to install the node dependencies.For this project we highly recommend to get checkout npm docs and google npm inquirer so its very easy to understand the inquirer prompts.

## Tests
npm test

## Author Contact
Contact the author with any questions! 

Github link: [netsy001](https://github.com/netsy001)
    
Email: nettem.surendra@gmail.com

## License
This project is [MIT](https://choosealicense.com/licenses/MIT/) licensed.<br />
Copyright © [Surendra Nettam](https://github.com/netsy001)

                
<p><i>This Employee_Tracker was generated with ❤️ by Surendra Nettam</i ></p >; 