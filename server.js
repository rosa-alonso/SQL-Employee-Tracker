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
  addEmployee();
});

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
