const Product = require("../models/product.model")


// ! CREATE
module.exports.createProduct = (req, res) => {
    console.log("CONTROLLER CREATE")
    Product.create(req.body) // ? this req.body is the form object, the data the end-user enters 
    .then(newProduct => {
        console.log(newProduct)
        res.json(newProduct)
    })
    .catch(errors => res.status(400).json(errors))
}

// ! READ ALL
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(errors => res.json(errors))
}

// ! READ ONE
module.exports.oneProduct = (req, res) => {
    Product.findOne({_id: req.params.product_id})
    .then(oneProduct => res.json(oneProduct))
    .catch(errors => res.json(errors))
}

// ! UPDATE
module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id:req.params.product_id}, req.body,  {new:true, runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(errors => res.status(400).json(errors))
}
// ! DELETE
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id:req.params.product_id})
        .then(confirmation => res.json(confirmation))
        .catch(errors => res.json(errors))
}