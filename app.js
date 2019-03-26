var express = require("express");
var cors = require("cors")
var app = express();
//const express = require("express");
// Set up the express app
var db =[
    {
      id: 1,
      title: "this is my first post",
      description: "Hackend is awesome, im such a cool programer"
    }
];

// get all posts
app.get('/posts', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});

app.post('/posts',(req,res)=>{
    db.push({
        id : db.length() + 1,
        title: "my random post",
        description: "my random description"
    })
    res.status(200).send({
        success: 'true',
        message: "generater random post",
        todos: db
    })
})


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
