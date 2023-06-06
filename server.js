const mysql = require("mysql2");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employeetracker",
  password: "",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId + "\n");
  main();
});

const questions = [
  {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
];

function main() {
  inquirer.prompt(questions).then((answers) => {
    let choice = answers.choice;
    switch (choice) {
      case "View all departments":
        viewDepartments();
        break;
      case "View all roles":
        viewAllRoles();
        break;
      case "View all employees":
        viewAllEmployees();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee role":
        updateEmployee();
        break;
    }
  });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
  }).then;
}

function viewAllRoles() {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
  });
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "departmentName",
        message: "What is the new department name?",
        type: "input",
      },
    ])
    .then((answers) => {
      connection.query(
        "INSERT INTO department SET ?",
        [
          {
            first_name: answers.departmentName,
          },
        ],
        function (err, res) {
          console.log("department inserted");
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "newRole",
        message: "What is the new role you would like to add?",
        type: "input",
      },
    ])
    .then((answers) => {
      connection.query(
        "INSERT INTO role SET ",
        [
          {
            roleName: answers.roleName,
          },
        ],
        function (err, res) {
          console.log("role inserted");
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "employeeFirstName",
        message: "What is the new employees first name?",
        type: "input",
      },
      {
        name: "employeeLastName",
        message: "What is the new employees last name?",
        type: "input",
      },
    ])
    .then((answers) => {
      connection.query(
        "INSERT INTO employee SET ?",
        [
          {
            first_name: answers.employeeFirstName,
          },
          {
            last_name: answers.employeeLastName,
          },
        ],
        function (err, res) {
          console.log("employee inserted");
        }
      );
    });
}

function updateEmployee() {
  queryFunction.FindAllEmployees();

  inquirer
    .prompt([
      {
        name: "employeeFirstName",
        message: "What is the new employees first name?",
        type: "input",
      },
      {
        name: "employeeLastName",
        message: "What is the new employees last name?",
        type: "input",
      },
    ])
    .then((answers) => {
      connection.query(
        "INSERT INTO role SET ?",
        [
          {
            first_name: answers.employeeFirstName,
          },
          {
            last_name: answers.employeeLastName,
          },
        ],
        function (err, res) {
          console.log("employee role updated");
        }
      );
    });
}
