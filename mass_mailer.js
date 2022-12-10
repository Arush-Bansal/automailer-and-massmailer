var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


function sendMail(reciver_name, reciver_email_list, company_name) {
    let transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: '', // process.env.REACT_APP_EMAIL
            pass: '', // process.env.REACT_APP_EMAIL_PASS // use the app_password here
        }
    }));
    let main_mail = reciver_email_list[0]
    reciver_email_list.shift();

    let mailOptions = {
        from: 'arush4bansal@gmail.com',
        to: main_mail,
        cc: reciver_email_list,
        subject: 'Sending Email using Node.js[nodemailer]', // add subject
        // text: 'That was easy!',
        // html: { path: './index.html' }, 
        // attachments: ['write ']
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

sending_list = [
    {
        "Company": "CriticalCare",
        "Name": "Piro Coder",
        "Email": "PiroDeveloper@piro.com"
    },
    {
        "Company": "CriticalCare",
        "Name": "Piro2 Coder",
        "Email": "Piro2Developer@piro.com PiroInCC_Developer@piro.com"
    },
]


var counter = 0;
var i = setInterval(function () {

    // Your code
    let email_list = sending_list[counter]["Email"].split(" ");
    //console.log(email_list)
    sendMail(sending_list[counter]["Name"], email_list, sending_list[counter]["Company"])

    if (counter === sending_list.length - 1) {
        clearInterval(i);
    }
    counter++;

}, 15000);
