const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    getProducts: function(req, res){
        console.log("In get all");
        Product.find({}, function(err, products){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: products})
            }
        });
    },

    createProduct: function(req, res){

        console.log("Request.body in create: ", req.body)
        var product = new Product(req.body);
    
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        product.save(function(err) {
        // if there is an error console.log that something went wrong!
            if(err) {
                res.json({status: false, message: "Error", error: err})
            } else { // else console.log that we did well and then redirect to the root route
                res.json({ status: true, message: "Success"})
            }
        });

    },


    deleteProductByID: function(req, res) {
        var product_id = req.params._id;
        console.log("In delete, ID: ", product_id);
    
        Product.remove({_id: product_id}, function(err) {
    
            if(err) {
                res.json({message: "Error", error: err})
    
            } else { // else console.log that we did well and then redirect to the root route
                res.json({message: "Success"})
            }
        });
    },

    getProductByID: function(req, res){
        console.log("get by id, id: ", req.params._id)
        Product.find({ _id : req.params._id}, function(err, tasks){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: tasks})
            }
         })
    },

    editProductByID: function(req, res) {
        var product_id = req.params._id;
        console.log("In edit, ID: ", product_id);
    
        Product.update({_id: product_id}, {$set: req.body}, { runValidators: true }, function(err) {
    
            if(err) {
                res.json({status: false, message: "Error", error: err})
    
            } else { // else console.log that we did well and then redirect to the root route
                res.json({message: "Success"})
            }
        });
    }


}