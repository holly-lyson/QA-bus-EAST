import Express, { json } from 'express';
import Clients from "./clients.js";
// import Cors from 
// import * as cors from 'cors';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = Express();
const port = 4000;
// const cors = Cors();


app.use(Express.json())
app.use(Express.urlencoded({ extended: true}))
// app.use(Cors)
// app.use(cors);

app.get('/api/clients', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*')
    var custs = []

    res.json(Clients)
    console.log("Client information sent!")

})


app.post('/api/send', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    var statusCode = res.statusCode;
    // res.send("Status code: " + statusCode)
    // res.sendStatus();
    var name = req.body.name,
        email = req.body.email,
        message = req.body.message;

    res.json(req.body);

    console.log("\nForm handled!")
    console.log("Name: ", name, "\nEmail: ", email, "\nMessage: ", message, "\n")

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
        // html: '<p>'+ message + '</p>'
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
    // res.setHeader('Access-Control-Allow-Origin', '*');
    var statusCode = res.statusCode;
    // res.send("Status code: " + statusCode)
    // res.sendStatus();
    var name = req.body.name,
        email = req.body.email,
        message = req.body.message;

    console.log("Form handled!")
    console.log("Name: ", name, "\nEmail: ", email, "\nMessage: ", message, "\n------------------------------\n")

})


app.listen(port, () => console.log("Listening on port: " + port));