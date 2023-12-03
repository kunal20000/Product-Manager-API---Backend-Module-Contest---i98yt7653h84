const mongoose = require('mongoose');

// Define the schema for the 'Product' model
const productSchema = new mongoose.Schema({
  // 'name' field is of type String
  // It is required (cannot be empty)
  // 'price' field is of type Number
  // It is required (cannot be empty)
  // 'category' field is of type String
  // It is required (cannot be empty)
  // 'availability' field is of type Boolean
  // It has a default value of 'true'
});

// Create a 'Product' model using the defined schema
const Product = mongoose.model('Product', productSchema);

// Export the 'Product' model to use in other parts of the application
module.exports = Product;
