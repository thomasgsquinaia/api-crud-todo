const express = require('express')
const app = express()
const port = 3001

app.get('/', (req:any, res:any) => {
  res.json({message: 'Api Crud Todo'})
})

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
})
