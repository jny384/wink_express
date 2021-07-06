const express = require('express');
const app = express();

app.get('/',  (req, res)=> (res.send('<h1>Hello WINK >_0</h1>')))
app.get('/board',  (req, res)=>(res.send('Board입니다.')))
app.get('/login',  (req, res)=>(res.send('Login입니다.')))
app.get('/signUp',  (req, res)=>(res.send('Sign Up입니다.')))


app.listen(8080, (err) => {
    if(err) return console.log(err)
    console.log('The server is listening on port 8080')
});
