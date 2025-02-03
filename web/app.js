const express = require('express')
const path = require('path')

// creating an Express application
const app = express()
const port = 3000

// tell Express to use the EJS
app.set('view engine', 'ejs')
// setting the directory where Express should look for my view templates
app.set('views', path.join(__dirname, 'views'));

// the middleware for the time to show the web content 


app.use(express.static(path.join(__dirname, 'public'))); 


// defines a route handler for the root URL
app.get('/', (req, res)=> {
    res.render('home')
})

app.get('/service', (req, res) => {
    res.render('service')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.send('something wrong')
})

// start the Express server in the ${port}
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
