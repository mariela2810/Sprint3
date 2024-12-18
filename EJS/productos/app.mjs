import express from "express"

const app = express()

app.set('view engine', 'ejs')

app.get('/productos', (req,res) => {
   const productos = [
        {name: 'Laptop', price: 1500},
        {name: 'Smartphone', price: 700},
        {name: 'Tablet', price: 300},
        ] 
    res.render('productos', {productos})
})

app.listen(3000, () => {
    console.log('Server is runing on port 3000')
})