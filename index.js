const express = require('express')
const cors = require("cors")
const app = express()
const port = 5000

app.use(cors())

const users = [
  {id: 1, name: "akash", email: " @gmail.com"},
  {id: 2, name: "samiul", email: "smaiul@gmail.com"},
  {id: 3, name: "alif", email: "alif@gmail.com"},
]


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/users", (rec, res) => {
  res.send(users)
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
