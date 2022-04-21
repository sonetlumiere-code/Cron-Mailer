const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const mailerConfig = require('./config');
const colors = require('colors');

const transporter = nodemailer.createTransport({
	service: mailerConfig.service,
	auth: mailerConfig.auth
});

const readHTMLFile = (path, callback) => {
    fs.readFile(path, {encoding: 'utf-8'}, (err, html) => {
        if (err) {
            throw err;
            callback(err);
        } else {
            callback(null, html);
        }
    });
};

function sendEmail(){
    readHTMLFile(__dirname + '/templates/template.html', (err, html) => {
        let template = handlebars.compile(html);
        let replacements = {
            email: mailerConfig.to
        };
        let htmlToSend = template(replacements);
        let mailOptions = {
            from: mailerConfig.from,
            to: mailerConfig.to,
            subject: `mail from cron!`,
            html: htmlToSend
        };
         
        transporter.sendMail(mailOptions, (err, data) => {
            if(err){
                console.log('Error Occurs ', err);
            } else {
                console.log(`Email sent to ${mailerConfig.to}!`.green);
            }
        });  
    });
};

module.exports.sendEmail = sendEmail;