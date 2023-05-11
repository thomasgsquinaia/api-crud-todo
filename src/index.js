const express = require("express");
const app = express();
const cors = require('cors')
const port = 3001;
const bodyparser = require("body-parser");
app.use(bodyparser.json({ limit: "50mb" }));
//ROUTERS
const notes = require("./routes/noteRoute");

//NOT-AUTHORIZATION
app.use("/notes",cors(), notes);

app.listen(port, () => {
    console.log(`Rodando na porta http://localhost:${port}`);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization');
//     next();
// });


module.exports = app;
