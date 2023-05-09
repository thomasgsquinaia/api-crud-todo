const express = require("express");
const app = express();
const port = 3333;
const bodyparser = require("body-parser");
app.use(bodyparser.json({ limit: "50mb" }));
//ROUTERS
const notes = require("./routes/noteRoute");

//NOT-AUTHORIZATION
app.use("/notes", notes);

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});

module.exports = app;

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
