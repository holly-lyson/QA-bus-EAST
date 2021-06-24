import Express, { json } from 'express';
import Clients from "./clients.js";
// import Cors from 
// import * as cors from 'cors';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = Express();
const port = 4000;


app.use(Express.json())
app.use(Express.urlencoded({ extended: true}))


app.get('/api/clients', (req, res) => {
    var custs = []

    res.json(Clients)
    console.log("Client information sent!")

})


app.post('/api/send', (req, res) => {
    var statusCode = res.statusCode;

    var name = req.body.name,
        email = req.body.email,
        message = req.body.message;

    res.json(req.body);

    console.log("\Contact form handled!")
    console.log("Name: ", name, "\nEmail: ", email, "\nMessage: ", message, "\n------------------------------\n")

    var transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'holly.lyson',
            pass : 'Or@nge13'
        }
    })
    const mailOptions = {
        from: email,
        to: 'zurend55@students.rowan.edu',
        subject: "NODEJS Hot Lead: ",
        text: "FROM : " + email + "Message: " + message
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err){
            console.log(err);
        } else {
            console.log("Email sent!\n");
        }
    })
})

app.post('/api/apply', (req, res) => {
    var statusCode = res.statusCode;

    var name = req.body.name,
        email = req.body.email,
        message = req.body.message;

    res.json(req.body);

    console.log("Testimonial form handled!")
    console.log("Name: ", name, "\nEmail: ", email, "\nMessage: ", message, "\n------------------------------\n")

})


app.post('/api/refer', (req, res) => {
    var statusCode = res.statusCode;

    var name = req.body.name,
        referer = req.body.referer,
        phone = req.body.phone;
    
    res.json(req.body);

    console.log("Referral form handled!")
    console.log("Name: ", name, "\nReferer: ", referer, "\nPhone: ", phone, "\n------------------------------\n")

})

app.listen(port, () => console.log("Listening on port: " + port));