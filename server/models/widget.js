
var mongoose = require('mongoose');

var connection = mongoose.createConnection('mongodb://localhost/main_db');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(connection);


const ProductSchema = new mongoose.Schema({
    name: 
        {type: String, 
        required: [true, "Name is required."], 
        minlength: [3, "Name must be at least 3 characters."]},

    qty: {
        type: Number, 
        required: [true,"Quantity is required."], 
        min: [0, "Quantity must be at least 0."]
    },

    price: {
        type: Number, 
        required: [true, "Price is required."], 
        min: [0, "Price must be at least 0."]
    },

    _id: {
        type: Number
    }

}, {timestamps: true });

//Auto-increment
ProductSchema.plugin(autoIncrement.plugin, { model: 'Product' });

mongoose.model('Product', ProductSchema);