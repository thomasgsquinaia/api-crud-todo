const express = require("express");
const app = express();
const cors = require('cors')
const helmet = require('helmet');
const port = 3001;
const bodyparser = require("body-parser");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'", "cdn.jsdelivr.net"],
        scriptSrc: ["'self'", "'unsafe-inline'"]
    }
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization');
    next();
});


//ROUTERS
const notes = require("./routes/noteRoute");
//NOT-AUTHORIZATION
app.use("/notes",cors(), notes);

app.listen(port, () => {
    console.log(`Rodando na porta http://localhost:${port}`);
});



module.exports = app;
