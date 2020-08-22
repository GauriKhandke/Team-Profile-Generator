const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const managerQuestions = [{
    type: "input",
    name: "manager_name",
    message: "What is your manager's name?",
  },
  {
    type: "input",
    name: "manager_id",
    message: "What is your manager's id?",
  },
  {
    type: "input",
    name: "manager_email",
    message: "What is your manager's email?",
  },
  {
    type: "input",
    name: "manager_officeNo",
    message: "What is your manager's office number?",
  },
];

const engineerQuestions = [{
    type: "input",
    name: "engineer_name",
    message: "What is your engineer's name?",
  },
  {
    type: "input",
    name: "engineer_id",
    message: "What is your engineer's id?",
  },
  {
    type: "input",
    name: "engineer_email",
    message: "What is your engineer's email?",
  },
  {
    type: "input",
    name: "engineer_github",
    message: "What is your engineer's github username?",
  },
];

const internQuestions = [{
    type: "input",
    name: "intern_name",
    message: "What is your intern's name?",
  },
  {
    type: "input",
    name: "intern_id",
    message: "What is your intern's id?",
  },
  {
    type: "input",
    name: "intern_email",
    message: "What is your intern's email?",
  },
  {
    type: "input",
    name: "intern_school",
    message: "What is your intern's school?",
  },
];

let team = [];

function buildManager() {

  try {
    inquirer.prompt(managerQuestions)
      .then(function (answers) {

        const manager = new Manager(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_officeNo);
        team.push(manager);
        buildTeam();
      });
  } catch (error) {
    console.log(error);
  }
}



async function buildTeam() {
  
  while (true) {
  
    await inquirer.prompt([{
        type: "list",
        name: "team_member",
        message: "What type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members.",
        ],
      }])
      .then(async function (response) {

        if (response.team_member === "Engineer") {
          try {
            await inquirer
              .prompt(engineerQuestions)
              .then(function (engineerData) {
                console.log(engineerData);
                const engineer = new Engineer(engineerData.engineer_name, engineerData.engineer_id, engineerData.engineer_email, engineerData.engineer_github);
                team.push(engineer);
              });
          } catch (error) {
            console.log(error);
          }

        } else if (response.team_member === "Intern") {
          try {
            await inquirer
              .prompt(internQuestions)
              .then(function (internData) {
                console.log(internData);
                const intern = new Intern(internData.intern_name, internData.intern_id, internData.intern_email, internData.intern_school);
                team.push(intern);
              });
          } catch (error) {
            console.log(error);
          }

        } else if (response.team_member === "I don't want to add any more team members.") {
          const htmlData = render(team);
          // console.log(htmlData);
          process.exit(0);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}

buildManager();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```