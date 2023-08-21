const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

const tasks = [];

app.get('/',(req,res) => {
    res.render('index' , {tasks:tasks});
})

app.post('/',(req,res) => {
    const task = req.body.task;
    if(task){
        tasks.push(task);
    }
    res.redirect('/');
});

app.listen(5500,(req,res)=>{
    console.log('Server is running on port 5500');
})
