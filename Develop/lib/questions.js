module.exports = {
  managerQuestions: [
    {
      type: "input",
      name: "manager_name",
      message: "What is your manager's name?",
    },
    {
      type: "input",
      name: "manager_id",
      message: "What is your manager's id?",
      validate: function (value) {
        if (isNaN(value)) return " Please enter valid ID";
        else return true;
      },
    },
    {
      type: "input",
      name: "manager_email",
      message: "What is your manager's email?",
      validate: function (value) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

        if (valid) return true;
        else return "  Please enter valid email ID ";
      },
    },
    {
      type: "input",
      name: "manager_officeNo",
      message: "What is your manager's office number?",
      validate: function (value) {
        if (isNaN(value)) return " Please enter valid office number";
        else return true;
      },
    },
  ],

  engineerQuestions: [
    {
      type: "input",
      name: "engineer_name",
      message: "What is your engineer's name?",
    },
    {
      type: "input",
      name: "engineer_id",
      message: "What is your engineer's id?",
      validate: function (value) {
        if (isNaN(value)) return " Please enter valid ID";
        else return true;
      },
    },
    {
      type: "input",
      name: "engineer_email",
      message: "What is your engineer's email?",
      validate: function (value) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

        if (valid) return true;
        else return "  Please enter valid email ID ";
      },
    },
    {
      type: "input",
      name: "engineer_github",
      message: "What is your engineer's github username?",
    },
  ],
  
  internQuestions: [
    {
      type: "input",
      name: "intern_name",
      message: "What is your intern's name?",
    },
    {
      type: "input",
      name: "intern_id",
      message: "What is your intern's id?",
      validate: function (value) {
        if (isNaN(value)) return " Please enter valid ID";
        else return true;
      },
    },
    {
      type: "input",
      name: "intern_email",
      message: "What is your intern's email?",
      validate: function (value) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

        if (valid) return true;
        else return "  Please enter valid email ID ";
      },
    },
    {
      type: "input",
      name: "intern_school",
      message: "What is your intern's school?",
    },
  ],
};
