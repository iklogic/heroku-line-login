const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const line_login = require("line-login");
 
const login = new line_login({
    channel_id: process.env.LINE_LOGIN_CHANNEL_ID,
    channel_secret: process.env.LINE_LOGIN_CHANNEL_SECRET,
    callback_url: process.env.LINE_LOGIN_CALLBACK_URL,
    scope: "openid profile",
    prompt: "consent",
    bot_prompt: "normal"
});
// if you want to use another directory instead of views
// app.set('views', path.join(__dirname, '/pages'));
app.set('view engine', 'ejs') 
// app.get('/', (req, res) => res.render('index'))

app.listen(PORT, () => console.log('Example app listening on port 3000!'))

app.use("/", login.auth());
 
app.use("/callback", login.callback((req, res, next, token_response) => {
    res.json(token_response);
},(req, res, next, error) => {
    res.status(400).json(error);
}));