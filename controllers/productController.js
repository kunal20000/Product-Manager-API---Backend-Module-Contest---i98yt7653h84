const Product = require('../models/productModel');

// Function to paginate products
const paginate = async (req, res) => {
  // TODO: Implement pagination logic
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    // TODO: Query the products based on the pagination parameters
    // TODO: Respond with the paginated products
     const products = await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(products);
  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to sort products
const sort = async (req, res) => {
  // TODO: Implement sorting logic
  const { sort } = req.query;
  const sortOptions = {};

  if (sort) {
    // TODO: Define sorting options based on the 'sort' query parameter
    sortOptions[sort] = 1;
  }

  try {
    // TODO: Query and sort the products based on the sorting options
    // TODO: Respond with the sorted products
     const products = await Product.find().sort(sortOptions);

     res.json(products);
  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Function to filter products
const filter = async (req, res) => {
  // TODO: Implement filtering logic
  const { category } = req.query;
  const filterOptions = {};

  if (category) {
    // TODO: Define filtering options based on the 'category' query parameter
     filterOptions.category = category;
  }

  try {
    // TODO: Query the products based on the filtering options
    // TODO: Respond with the filtered products
     const products = await Product.find(filterOptions);

     res.json(products);
  } catch (error) {
    // Handle errors by responding with a 500 Internal Server Error
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  paginate,
  sort,
  filter,
};
