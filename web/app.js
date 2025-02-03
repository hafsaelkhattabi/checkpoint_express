const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


const hours = (req, res, next) => {
    const time = new Date()
    const day = time.getDay()
    const hour = time.getHours()

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17){
        return next()
    }
    res.send('<h1>Access denied: Available only Monday-Friday, 9 AM to 5 PM.</h1>')
}

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(hours);


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

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})