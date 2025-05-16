const express = require('express')
const cors = require("cors")
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

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

app.post("/users", (rec, res) => {
  console.log(rec.body)
  const newUsers = rec.body;
  newUsers.id = users.length + 1;
  users.push(newUsers);
  res.send(newUsers)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
