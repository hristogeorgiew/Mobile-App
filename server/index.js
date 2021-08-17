const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


require('./models/User');
const authRoutes = require('./routes/authRoutes');
const requireToken = require('./middleware/requireToken');
const {mongoUrl} = require('./keys');

mongoose.connect(mongoUrl, { 
    userCreateIndex: true, 
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true,

}, err => {
    if(err) throw err;
    console.log('connected to MongoDB'); 
});

mongoose.set('useCreateIndex', true);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authRoutes);
app.get('/', requireToken, (req,res) => {
    res.send("Your email is " + req.user.email)
})


app.listen(5000, '192.168.2.110',() => {
    console.log("server is running");
});