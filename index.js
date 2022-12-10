var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// this code is for single mail and can be used in backend.

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'arush4bansal@gmail.com', // process.env.REACT_APP_EMAIL
        pass: 'pnurhjuysdbzotun' // process.env.REACT_APP_EMAIL_PASS
    }
}));

var mailOptions = {
    from: 'arush4bansal@gmail.com',
    to: 'arushbansalofficial@gmail.com',
    subject: 'Sending Email using Node.js[nodemailer]', // add subject
    // text: 'That was easy!',
    html: { path: './index.html' },
    // attachments: ['write ']
};
// const hello = require('')

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
