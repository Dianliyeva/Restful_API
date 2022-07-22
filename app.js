const express = require('express');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
  .get((req, res) => {
    const response = {hello: 'This is my API'};
    res.json(response);
  });

app.use('/api', bookRouter);
 
app.get('/', (req, res)=>{
    res.send('Welcome to my Nodemon API!');
});

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});

//
const { use } = require("bcrypt/promises");

app.use(express.json());

// routes go here
app.get('/', (req, res) => {
  res.send('<h1>App Running</h1>')
})

//create a new user
app.post('/users', async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, async function (err, hash){
    const newUser = await User.create ({"name": name, "password": hash});
    res.json ({newUser})
  })
})