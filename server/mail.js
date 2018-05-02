const nodemailer = require('nodemailer');

module.exports = {
    mail: (req, res) => {
        let response = '';
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.REACT_APP_GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD
            }
        });
        const mailOptions = {
            from: `${req.body.from}`,
            to: process.env.REACT_APP_GMAIL_USER,
            subject: `${req.body.subject}`,
            text: `${req.body.text}`,
            html: 
                `<h2>From: </h2>
                <p>${req.body.from}</p>
                <h2>Message: </h2>
                <p>${req.body.text}<p>
                <h2>Contact Info:</h2>
                <p>${req.body.name}</p>
                <p>${req.body.number}</p>
                `,
            replyTo: `${req.body.from}`
        }
        transporter.sendMail(mailOptions, function (err, res) {
            if (err) {
                response = err;
            } else {
                response = res
            }
        })
        res.status(200).send(response)
    }
}