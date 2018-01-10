const express = require('express')
const app = express()
const path = require('path')

// if you want to use another directory instead of views
// app.set('views', path.join(__dirname, '/pages'));
app.set('view engine', 'ejs') 
app.get('/', (req, res) => res.render('index'))

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))