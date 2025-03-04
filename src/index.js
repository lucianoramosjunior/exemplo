

const express = require('express')
const app = express()


app.get('/', (req, res) => {
    
    res.send('O valor da soma é: ' + (Number(req.query.num1) + Number(req.query.num2)))
})

app.get('/teste/:id', (req, res) => {
    res.send('Hello World teste ' + req.params.id)
})

app.listen(3000, () =>{
    console.log('Online http://localhost:3000')
})