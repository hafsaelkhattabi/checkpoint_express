const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));



app.use(express.static(path.join(__dirname, 'public'))); 



// 
app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.get('/service', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'service.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'))
})

// middleware 
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.send('something wrong')
})

// the port for work the project
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})
