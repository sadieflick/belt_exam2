

const mongoose = require('mongoose');
    //   Quote = mongoose.model('Quote')

var mainController = require('../controllers/mainController.js');

module.exports = function(app){
    
    // Retrive all products
    app.get('/api/products', mainController.getProducts);
    
    // Create Task
    app.post('/api/products', mainController.createProduct);
    
    // Delete Task by ID
    app.delete('/api/products/:_id', mainController.deleteProductByID);
    
    // Retrieve Task by id
    app.get('/api/products/:_id', mainController.getProductByID);
    
    // Update Task by id
    app.patch('/api/products/:_id', mainController.editProductByID);
}