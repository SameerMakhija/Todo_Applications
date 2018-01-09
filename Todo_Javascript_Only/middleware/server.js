const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());

// parse application/json
app.use( bodyParser.json() );

app.get('/', (req, res) => res.send("Hello World!!"));

var courses = [
    "Angular",
    "ReactJS",
    "ECMA2015",
    "EmberJS",
    "Express"
]

app.get('/courses', (req, res) => {
    res.json(courses);
});

var todos = [
    { 
        text: "Sample Todo"
    }
]

//ALL - TODOS : GET       // Get all the todos list
app.get('/todos', (req, res) => {
    res.json(todos);
});

//CREATE - TODO : POST    // Add new todo to the list
app.post('/todo', (req, res) => {
    console.log(req.body);
    var todo = req.body;
    todos.push(todo);
    console.log(todos);
    res.json(todos);
});

//DELETE - TODO : DELETE  // Delete any todo
app.delete('/todo/:id', (req, res) => {
    console.log(req.params.id);
    var index = req.params.id;
    todos.splice(index,1);
    res.json(todos);
});

app.put('/todo/:id', (req, res) => {
    console.log(req.params.id);
    var index = req.params.id;
    var todo = req.body;
    if(todos[index]) {
        todos[index] = todo;
    }
    res.json(todos);
});

var counter = 1010;
var posts = [
    { 
        id: counter,
        title: "Sample Todo",
        category: "Work",
        content: "Some sample content"
    }
]

//ALL - Posts : GET       // Get all the posts list
app.get('/posts', (req, res) => {
    res.json(posts);
});

//CREATE - TODO : POST    // Add new post to the list
app.post('/post/new', (req, res) => {
    console.log(req.body);
    var newPost = req.body;
    var postIndex = posts.findIndex( post => post.id == newPost.id);
    if(postIndex > -1) {
        posts[postIndex] = newPost;
    } else {
        newPost.id = ++counter;
        posts.push(newPost);
    }
    console.log(posts);
    res.json(newPost);
});

//DELETE - TODO : DELETE  // Delete any post
app.delete('/post/:id', (req, res) => {
    console.log(req.params.id);
    var postId = req.params.id;
    var postIndex = posts.findIndex( post => post.id == postId);
    posts.splice(postIndex,1);
    res.json(postId);
});

app.put('/post/:id', (req, res) => {
    console.log(req.params.id);
    var index = req.params.id;
    var post = req.body;
    if(posts[index]) {
        posts[index] = post;
    }
    res.json(post);
});


// GET : POST
app.get('/post/:id', (req, res) => {
    console.log(req.params.id);
    var postId = req.params.id;
    var post = posts.find( post => post.id == postId );

    if(!!post) {
        res.json(post);
    } else {
        res.json({ error: 'Post does not exist' });
    }
})


app.listen(3000, () => console.log('Example app listening on Port 3000'));