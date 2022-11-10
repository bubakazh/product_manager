
// ! IMPORT DEPENDENCIES
const express = require("express")
const cors = require("cors")

// ! INSTANTIATE EXPRESS SERVER
const app = express()
const PORT = 8000

// ! SETUP MIDDLEWARE
require("./config/mongoose.config")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// ! CONNECT ROUTES
const productRoutes = require("./routes/product.route")
productRoutes(app)

// ! START EXPRESS SERVER
app.listen(PORT, () => console.log(`PORT${PORT}でサーバー開始！`))