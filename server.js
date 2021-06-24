import Express, { json } from 'express';
import Clients from "./clients.js";
// import Cors from 
// import * as cors from 'cors';
import cors from 'cors';

const app = Express();
const port = 4000;
// const cors = Cors();

app.use(Express.json())
app.use(Express.urlencoded({ extended: true}))
// app.use(Cors)
app.use(cors)

app.get('/api/clients', (req, res) => {
    
    var custs = []

    res.json(Clients)
    console.log("Endpoint clicked!")

})


app.get('/api/send', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var statusCode = res.statusCode;
    // res.send("Status code: " + statusCode)

})

app.listen(port, () => console.log("Listening on port: " + port));