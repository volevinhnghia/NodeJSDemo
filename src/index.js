const express = require('express');
const app = express();

const port = 3001;
const bookRouter = require('./routes/book');
const productRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users')
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/v1/', bookRouter);
app.use('/v2/', productRouter);
app.use('/v2/', categoriesRouter);
app.use('/v2/', usersRouter);


app.get('/message/:mgs', (req, res) => {
    let msg = req.params.msg;
    console.log("Message: ",msg);
    res.send(`Message is sent...`);
})
app.get('/', (request, responed) => {responed.send('Hello')});
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
})