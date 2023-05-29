const mysql = require("mysql2");
const inquirer = require("inquirer");

const { default: inquirer } = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employeetracker",
  password: "",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId + "\n");
  addEmployee();
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
function viewDepartments() {
  queryFunction.findAllDepartments();
}

function viewAllRoles() {
  queryFunction.findAllRoles();
}

function viewAllEmployees() {
  queryFunction.FindAllEmployees();
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

// function updateEmployee() {
//   queryFunction.FindAllEmployees()

//   inquirer
//     .prompt([
//       {
//         name: "employeeFirstName",
//         message: "What is the new employees first name?",
//         type: "input",
//       },
//       {
//         name: "employeeLastName",
//         message: "What is the new employees last name?",
//         type: "input",
//       },
//     ])
//     .then((answers) => {
//       connection.query(
//         "INSERT INTO role SET ?",
//         [
//           {
//             first_name: answers.employeeFirstName,
//           },
//           {
//             last_name: answers.employeeLastName,
//           },
//         ],
//         function (err, res) {
//           console.log("employee role updated");
//         }
//       );
//     });
// }
