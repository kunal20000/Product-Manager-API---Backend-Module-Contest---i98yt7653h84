const mongoose = require('mongoose');

// Define the schema for the 'Product' model
const productSchema = new mongoose.Schema({
  // 'name' field is of type String
  // It is required (cannot be empty)
  name:{
    type: String,
    required: true,
  },
  // 'price' field is of type Number
  // It is required (cannot be empty)
  price:{
    type: Number,
    required: true,
  },

  
  // 'category' field is of type String
  // It is required (cannot be empty)
  category:{
    type: String,
    required: true,
  },
  
  // 'availability' field is of type Boolean
  // It has a default value of 'true'
  availability:{
    type: Boolean,
    default: true,
  },
});

// Create a 'Product' model using the defined schema
const Product = mongoose.model('Product', productSchema);

// Export the 'Product' model to use in other parts of the application
module.exports = Product;
