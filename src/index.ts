import express from 'express';
const app = express()
const port = 3001

app.get('/', (req:any, res:any) => {
  res.send('Api Crud Todo')
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
})

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

