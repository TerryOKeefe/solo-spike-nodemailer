const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'minbrew@outlook.com',
        pass: 'Virhurr22$'
    }
});

let mailOptions = {
    from: 'minbrew@outlook.com',
    to: 'terry.okeefe87@gmail.com',
    subject: 'Sending Email using Nodemailer',
    text: 'Testing nodemailer.'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent:', info.response);
    }
});


app.listen(PORT, () => {
    console.log('Running on PORT:', PORT);
})