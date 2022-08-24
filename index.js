const fs = require("fs");
const inquirer = require("inquirer");
// const generateHTML = require("./dist")

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the managers name?",
    },
    {
      type: "number",
      name: "idNum",
      message: "What is the managers employee ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the managers email?",
    },
    {
      type: "number",
      name: "officeNum",
      message: "What is the managers office number?",
    },
  ]);
};

// const promptEmp = (empData) => {
//   if (!empData.cards) {
//     empData.cards = [];
//   }
//   return inquirer
//     .prompt([
//       {
//         type: "checkbox",
//         name: "role",
//         message: "Select a role to add an employee",
//         choices: ["Engineer", "Intern", "Finish building team"],
//       },
//       {
//         type: "confirm",
//         name: "confirmAddEmp",
//         message: "Would you like to enter another employee?",
//         default: false,
//       },
//     ])
//     .then((empInfoData) => {
//       empData.cards.push(empInfoData);
//       if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//       } else {
//         return portfolioData;
//       }
//     });
// };

const generateHTML = (data) => {
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Employee Profiles</title>
      </head>
      <body>
        <header>
          <h1>Employees</h1>
        </header>
      </body>
    </html>
    `;
};

const writeFile = (pageHTML) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", pageHTML, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
      console.log("file made");
    });
  });
};

promptUser()
  .then((data) => {
    return generateHTML(data);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
