USE employee_db;

-- //department seeds

INSERT INTO department (id, name) VALUES (1, "Saves");
INSERT INTO department (id, name) VALUES (2, "Sales");
INSERT INTO department (id, name) VALUES (3, "moves");
INSERT INTO department (id, name) VALUES (4, "IT");

-- //Role//

INSERT INTO role (id,title, salary,department_id) VALUES (1, "SavesAgent1",75000,1);
INSERT INTO role (id,title, salary,department_id) VALUES (2, "SavesAgent2",75000,1);
INSERT INTO role (id,title, salary,department_id) VALUES (3, "SavesAgent3",75000,1);

INSERT INTO role (id,title, salary,department_id) VALUES (4, "SalesAgent1",75000,2);
INSERT INTO role (id,title, salary,department_id) VALUES (5, "SalesAgent2",75000,2);

INSERT INTO role (id,title, salary,department_id) VALUES (6, "MovesAgent1",75000,3);
INSERT INTO role (id,title, salary,department_id) VALUES (7, "MovesAgent2",75000,3);

INSERT INTO role (id,title, salary,department_id) VALUES (8, "IT Manager",98000,4);
INSERT INTO role (id,title, salary,department_id) VALUES (9, "TEAM Manager",85000,4);
INSERT INTO role (id,title, salary,department_id) VALUES (10, "Departments MANAGER",95000,4);
INSERT INTO role (id,title, salary,department_id) VALUES (11, "CENTRE MANAGER",105000,4);

-- //employee//

INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("John","Jig",1,1);
INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Mike","Mig",2,2);
INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Charle","Chi",3,3);
INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Sue","Sha",4,4);

INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Johnny","Joe",5,NULL);
INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Peter","pet",5,NULL);

INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Sam","Jam",6,NULL);
INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Samantha","Sain",6,NULL);

INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Joseph","Jazz",7,NULL);
INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Honey","Horn",7,NULL);
INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Nick","Nike",7,NULL);
