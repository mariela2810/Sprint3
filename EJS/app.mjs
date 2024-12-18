import express from "express"

const app = express()

app.set('view engine', 'ejs')

app.get('/saludos', (req,res) => {
    const name = 'Mariela'
    res.render('saludos', {name})
})

app.listen(3000, () => {
    console.log('Server is runing on port 3000')
})