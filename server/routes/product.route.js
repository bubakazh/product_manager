const ProductController = require("../controllers/product.controller")

module.exports = app => {
    // create
    app.post("/api/products", ProductController.createProduct)

    // read all
    app.get("/api/products", ProductController.allProducts)

    // read one
    app.get("/api/products/:product_id", ProductController.oneProduct)

    // update
    app.put("/api/products/update/:product_id", ProductController.updateProduct)

    // delete
    app.delete("/api/products/delete/:product_id", ProductController.deleteProduct)
}