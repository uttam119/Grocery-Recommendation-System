const mongoose = require('mongoose');
const Brand = require('../models/brand');
const Product = require('../models/product');
const Category = require('../models/category');
const setupDB = require('../utils/db');
setupDB();

const seedBrands = async () => {
  const brands = [
    {
      name: 'DDC Dairy',
      slug: 'ddc_dairy',
      description: 'Dairy milk',
      isActive: true
    },
    {
      name: 'Amul Dairy',
      slug: 'amul_dairy',
      description: 'Dairy milk',
      isActive: true
    },
    {
      name: 'Gharelu Roti',
      slug: 'gharelu_bread',
      description: 'Breads products',
      isActive: true
    },
    {
      name: 'Indian Roti',
      slug: 'indian_bread',
      description: 'Indian roti',
      isActive: true
    },
    {
      name: 'Ktm Cornflakes',
      slug: 'ktm_cornflakes',
      description: 'KTM Cornflakes',
      isActive: true
    },
    {
      name: 'Pokhara Cornflakes',
      slug: 'pokhara_cornflakes',
      description: 'Pokhara Cornflakes',
      isActive: true
    }
  ];
  try {
    await Brand.remove({});
    await Brand.insertMany(brands);
    console.log('Brands successfully inserted');
  } catch (err) {
    console.log('Brand insertion error');
  }
};

const getBrandIdByName = (brands, name) => {
  return brands.find(brand => brand.slug === name)._id;
};
const seedProducts = async () => {
  const brands = await Brand.find({});
  const products = [
    {
      sku: 'ddc_milk',
      name: 'DDC 500 ml Milk',
      slug: 'ddc_milk',
      description: 'DDC milk',
      isActive: true,
      price: 10,
      brand: getBrandIdByName(brands, 'ddc_dairy')
    },
    {
      sku: 'amul_milk',
      name: 'Amul 500 ml Milk',
      slug: 'amul_milk',
      description: 'Amul milk ',
      price: 50,
      isActive: true,
      brand: getBrandIdByName(brands, 'amul_dairy')
    },
    {
      sku: 'gharelu_bread',
      name: '5 piece Bread',
      slug: 'gharelu_bread',
      description: 'Nepali bread ',
      price: 300,
      isActive: true,
      brand: getBrandIdByName(brands, 'gharelu_bread')
    },
    {
      sku: 'indian_bread',
      name: 'India 5 piece Bread',
      slug: 'indian_bread',
      description: 'Indian bread ',
      price: 400,
      isActive: true,
      brand: getBrandIdByName(brands, 'indian_bread')
    },
    {
      sku: 'ktm_cornflakes',
      name: 'Kathmandu Corn flakes',
      slug: 'ktm_cornflakes',
      description: 'Kathmandu Cornflakes ',
      price: 60,
      isActive: true,
      brand: getBrandIdByName(brands, 'ktm_cornflakes')
    },
    {
      sku: 'pokhara_cornflakes',
      name: 'Pokhara Corn flakes',
      slug: 'pokhara_cornflakes',
      description: 'Pokhara Cornflakes ',
      price: 1000,
      isActive: true,
      brand: getBrandIdByName(brands, 'pokhara_cornflakes')
    }
  ];
  try {
    await Product.remove({});
    await Product.insertMany(products);
    console.log('Products added');
  } catch (err) {
    console.log('Products addition error');
  }
};

const getProductIdByName = (products, name) => {
  return products.find(product => product.slug === name)._id;
};
const seedCategories = async () => {
  const products = await Product.find({});
  const categories = [
    {
      name: 'Dairy products',
      slug: 'dairy',
      isActive: true,
      description: 'Dairy related products',
      products: [
        getProductIdByName(products, 'ddc_milk'),
        getProductIdByName(products, 'amul_milk')
      ]
    },
    {
      name: 'Breads',
      slug: 'breads',
      isActive: true,
      description: 'Bread products',
      products: [
        getProductIdByName(products, 'gharelu_bread'),
        getProductIdByName(products, 'indian_bread')
      ]
    },
    {
      name: 'Cereals',
      slug: 'cereals',
      isActive: true,
      description: 'Cereal products',
      products: [
        getProductIdByName(products, 'ktm_cornflakes'),
        getProductIdByName(products, 'pokhara_cornflakes')
      ]
    }
  ];
  try {
    await Category.remove({});
    await Category.insertMany(categories);
    console.log('Categories added');
  } catch (err) {
    console.log('Category addition error');
  }
};
const seedDatabase = async () => {
  await seedBrands();
  await seedProducts();
  await seedCategories();
};

seedDatabase();
