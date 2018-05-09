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
            subject: `New Estimate Request from ${req.body.name}`,
            text: `${req.body.message}`,
            html:
                `
                <h2>New Estimate Details</h2>

                <h4>Name: </h4>
                <p>${req.body.name}</p>

                <h4>Type of Job</h4>
                <p>${req.body.type[0] ? 'Interior' : ''}</p>
                <p>${req.body.type[1] ? 'Exterior' : ''}</p>
                <p>${req.body.type[2] ? 'Other' : ''}</p>

                <h4>Date Requested</h4>
                <p>${req.body.date}</p>

                <h4>Square Footage</h4>
                <p>${req.body.footage}</p>

                <h4>Number of Rooms</h4>
                <p>${req.body.rooms}</p>

                <h4>Message: </h4>
                <p>${req.body.message}<p>

                <hr/>
                <h2>Contact Info:</h2>

                <h5>Email Address</h5>
                <p>${req.body.email}</p>

                <h5>Phone Number<h5>
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