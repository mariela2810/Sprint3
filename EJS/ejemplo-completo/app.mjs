import express from "express"
import userRoutes from "./routes/userRoutes.mjs"

const app = express()

app.set('view engine', 'ejs')
app.use('/users', userRoutes)

app.listen(3000, () => {
    console.log('Server is runing on port 3000')
})
