const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

async function runCRUD() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // 1. Add a new product
    const newProduct = new Product({
      name: 'Script Product',
      price: 49.99,
      category: 'Script Category'
    });
    await newProduct.save();
    console.log('Added:', newProduct);

    // 2. Retrieve all products
    const products = await Product.find();
    console.log('All Products:', products);

    // 3. Update the first product by ID
    if (products.length > 0) {
      const updated = await Product.findByIdAndUpdate(
        products[0]._id,
        { name: 'Updated Script Product', price: 59.99, category: 'Updated Category' },
        { new: true, runValidators: true }
      );
      console.log('Updated:', updated);

      // 4. Delete the product by ID
      const deleted = await Product.findByIdAndDelete(products[0]._id);
      console.log('Deleted:', deleted);
    }

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

runCRUD();
