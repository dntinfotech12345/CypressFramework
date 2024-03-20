///<reference types='Cypress'/>
const nodemailer = require("nodemailer");




var transporter = nodemailer.createTransport({

 service: 'gmail',

 auth:

 {

 user: 'dnttest1@gmail.com',

 pass: 'hmlvltdoabsmriis'

 }

});

transporter.sendMail({

 to: "roshanmorkhade96@gmail.com",
 from: 'dnttest1@gmail.com',

 subject: 'The html file',

 attachments:{

 filename: 'index.html',

 path: './cypress/cucumberReports/cucumber-htmlreport.html/index.html'

 }

});