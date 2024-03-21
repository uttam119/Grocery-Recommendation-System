const mongoose = require('mongoose');
const Brand = require('../models/brand');
const Product = require('../models/product');
const User = require('../models/user');
const Category = require('../models/category');
const Cart = require('../models/cart');
const Order = require('../models/order');
const setupDB = require('../utils/db');
const { CART_ITEM_STATUS } = require('../constants');
setupDB();

const seedBrands = async () => {
  const brands = [
    {
      name: 'Local',
      slug: 'local',
      description: 'Local product',
      isActive: true
    },
    {
      name: 'DDC Dairy',
      slug: 'ddc_dairy',
      description: 'Dairy product',
      isActive: true
    },
    {
      name: 'Safal Dairy',
      slug: 'safal_dairy',
      description: 'Dairy product',
      isActive: true
    },
    {
      name: 'Amul Dairy',
      slug: 'amul_dairy',
      description: 'Dairy product',
      isActive: true
    },
    {
      name: 'Manaram Dairy',
      slug: 'manaram_dairy',
      description: 'Dairy product',
      isActive: true
    },
    {
      name: "ND's Dairy",
      slug: 'nds_dairy',
      description: 'Dairy product',
      isActive: true
    },
    {
      name: 'Rihaan Agricultural Farm ',
      slug: 'rihaan_ghee',
      description: 'Dairy product',
      isActive: true
    },
    {
      name: "Sitaram's Dairy",
      slug: 'sitaram_dairy',
      description: 'Dairy product',
      isActive: true
    },
    {
      name: 'Nepal Gramodhyog',
      slug: 'nepalgramodhyog',
      description: 'Various rice and bakery products',
      isActive: true
    },
    {
      name: 'Newari Long Grain Rice',
      slug: 'newari_rice',
      description: 'Rice products',
      isActive: true
    },
    {
      name: 'Thakali Long Grain Rice',
      slug: 'thakali_rice',
      description: 'Rice products',
      isActive: true
    },
    {
      name: 'Aarati Premium Rice',
      slug: 'aarati_rice',
      description: 'Rice products',
      isActive: true
    },
    {
      name: 'Hulas Food',
      slug: 'hulas_food',
      description: 'Rice products',
      isActive: true
    },
    {
      name: 'Big Choice',
      slug: 'big_choice',
      description: 'Grocery products',
      isActive: true
    },
    {
      name: 'Hira Foods',
      slug: 'hira_foods',
      description: 'Rice products',
      isActive: true
    },
    {
      name: 'Somani Bhuja',
      slug: 'somani_bhuja',
      description: 'Rice products',
      isActive: true
    },
    {
      name: 'KL Dugar Group',
      slug: 'kldugar',
      description: 'Rice and flour products',
      isActive: true
    },
    {
      name: 'Chaudary Group Foods',
      slug: 'cgfoods',
      description: 'Noodles and packaged products',
      isActive: true
    },
    {
      name: 'Gandaki Noodles ',
      slug: 'gandakinoodles',
      description: 'Noodles and packaged products',
      isActive: true
    },
    {
      name: 'Asian Thai Foods ',
      slug: 'asianthaifoods',
      description: 'Noodles and packaged products',
      isActive: true
    },
    {
      name: 'Yashoda Foods ',
      slug: 'yashodafoods',
      description: 'Noodles and packaged products',
      isActive: true
    },
    {
      name: 'Samyang Foods Co.',
      slug: 'samyangfoods',
      description: 'Noodles and packaged products',
      isActive: true
    },
    {
      name: 'Spartan Trade Business ',
      slug: 'spartantrade',
      description: 'Chowmein and packaged products',
      isActive: true
    },
    {
      name: 'Sigma Foods',
      slug: 'sigmafoods',
      description: 'Chowmein and packaged products',
      isActive: true
    },
    {
      name: 'Nepal Pasta Food Company',
      slug: 'nepalpasta',
      description: 'Chowmein and packaged products',
      isActive: true
    },
    {
      name: 'Swastik Oil Industries ',
      slug: 'swastik_oil',
      description: 'Oil products',
      isActive: true
    },
    {
      name: 'Annapurna Vegetable Products ',
      slug: 'annapurnaproducts',
      description: 'Oil products',
      isActive: true
    },
    {
      name: 'Rungta Group',
      slug: 'rungtasgroup',
      description: 'Oil products',
      isActive: true
    },
    {
      name: 'Mahashian Di Hatti ',
      slug: 'mdh_spices',
      description: 'Spice products',
      isActive: true
    },
    {
      name: 'Everest Food Products ',
      slug: 'everest_spices',
      description: 'Spice products',
      isActive: true
    },
    {
      name: 'Haldiram Foods',
      slug: 'haldiram_spices',
      description: 'Spice and packaged products',
      isActive: true
    },
    {
      name: 'Century Group',
      slug: 'century_group',
      description: 'Spice and snack products',
      isActive: true
    },
    {
      name: 'Bawa Masala Company',
      slug: 'bmc_spices',
      description: 'Spice products',
      isActive: true
    },
    {
      name: 'Sagarmatha Foods',
      slug: 'sagarmatha_soyasauce',
      description: 'Canned and packaged products',
      isActive: true
    },
    {
      name: 'Rijal Tashi Industries',
      slug: 'druk',
      description: 'Canned and packaged products',
      isActive: true
    },
    {
      name: 'Daunne Happy Eggs',
      slug: 'happy_eggs',
      description: 'Egg products',
      isActive: true
    },
    {
      name: 'Avinash Eggs',
      slug: 'avinash_eggs',
      description: 'Egg products',
      isActive: true
    },
    {
      name: 'Adhunik Meat Product',
      slug: 'adhunik',
      description: 'Meat products',
      isActive: true
    },
    {
      name: 'Meatco Foods',
      slug: 'meatcofoods',
      description: 'Meat products',
      isActive: true
    },
    {
      name: 'Urban Food Industries ',
      slug: 'urbanfoods',
      description: 'Meat products',
      isActive: true
    },
    {
      name: 'Valley Cold Store',
      slug: 'vcs_meat',
      description: 'Meat products',
      isActive: true
    },
    {
      name: 'Shrestha Buff Meat Shop',
      slug: 'shrestha_drymeat',
      description: 'Meat products',
      isActive: true
    },
    {
      name: 'Sunaulo Dry Meat Shop',
      slug: 'sunaulo_drymeat',
      description: 'Meat products',
      isActive: true
    },
    {
      name: 'Meat Mania',
      slug: 'meatmania',
      description: 'Meat products',
      isActive: true
    },
    {
      name: 'Pasal 101',
      slug: 'pasal101',
      description: 'Vegetable products',
      isActive: true
    },
    {
      name: 'Tarkari Mart',
      slug: 'tarkarimart',
      description: 'Vegetable products',
      isActive: true
    },
    {
      name: 'Mero Kishan',
      slug: 'merokishan',
      description: 'Vegetable products',
      isActive: true
    },
    {
      name: 'Mustang Potato',
      slug: 'mustang_potato',
      description: 'Potato products',
      isActive: true
    },
    {
      name: 'Hilife Foods',
      slug: 'hilife',
      description: 'Flour products',
      isActive: true
    },
    {
      name: 'Ananta Bhogs',
      slug: 'anantabhog',
      description: 'Flour products',
      isActive: true
    },
    {
      name: 'Aashirvaad Products',
      slug: 'aashirvaad',
      description: 'Flour and dairy products',
      isActive: true
    },
    {
      name: 'Anu Anmol',
      slug: 'anuanmol',
      description: 'Flour products',
      isActive: true
    },
    {
      name: 'The Coca-Cola Company',
      slug: 'cocacola',
      description: 'Beverage products',
      isActive: true
    },
    {
      name: 'PepsiCo',
      slug: 'pepsico',
      description: 'Beverage products',
      isActive: true
    },
    {
      name: 'Sai Kripa Tea Packaging Industry',
      slug: 'saikripa',
      description: 'Tea products',
      isActive: true
    },
    {
      name: 'Nepal Tea Development Corporation',
      slug: 'ntdc_tokla',
      description: 'Tea products',
      isActive: true
    },
    {
      name: 'Mechi Tea',
      slug: 'mechi_tea',
      description: 'Tea products',
      isActive: true
    },
    {
      name: 'European Bakery',
      slug: 'europeanbakery',
      description: 'Bakery products',
      isActive: true
    },
    {
      name: 'Nanglo Bakery',
      slug: 'nanglobakery',
      description: 'Bakery products',
      isActive: true
    },
    {
      name: 'Dhakal Bakery Udhyog',
      slug: 'dhakalbakery',
      description: 'Bakery products',
      isActive: true
    },
    {
      name: 'Aly Foods',
      slug: 'alyfoods',
      description: 'Roti products',
      isActive: true
    },
    {
      name: 'Tasty Fresh',
      slug: 'tastyfresh_roti',
      description: 'Roti products',
      isActive: true
    }
    // {
    //   name: 'Ktm Cornflakes',
    //   slug: 'ktm_cornflakes',
    //   description: 'KTM Cornflakes',
    //   isActive: true
    // },
    // {
    //   name: 'Pokhara Cornflakes',
    //   slug: 'pokhara_cornflakes',
    //   description: 'Pokhara Cornflakes',
    //   isActive: true
    // }
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
      price: 50,
      brand: getBrandIdByName(brands, 'ddc_dairy')
    },
    {
      sku: 'safal_milk',
      name: 'Safal 500 ml Milk',
      slug: 'safal_milk',
      description: 'Safal milk',
      isActive: true,
      price: 50,
      brand: getBrandIdByName(brands, 'safal_dairy')
    },
    {
      sku: 'amul_milk',
      name: 'Amul 500 ml Milk',
      slug: 'amul_milk',
      description: 'Amul milk ',
      price: 60,
      isActive: true,
      brand: getBrandIdByName(brands, 'amul_dairy')
    },
    {
      sku: 'amul_butter',
      name: 'Amul 100g Butter',
      slug: 'amul_butter',
      description: 'Amul butter ',
      price: 150,
      isActive: true,
      brand: getBrandIdByName(brands, 'amul_dairy')
    },
    {
      sku: 'nds_butter',
      name: "ND's 250g Butter",
      slug: 'nds_butter',
      description: "ND's butter ",
      price: 230,
      isActive: true,
      brand: getBrandIdByName(brands, 'nds_dairy')
    },
    {
      sku: 'manaram_butter',
      name: 'Manaram 250g Butter',
      slug: 'manaram_butter',
      description: 'Manaram butter ',
      price: 340,
      isActive: true,
      brand: getBrandIdByName(brands, 'manaram_dairy')
    },
    {
      sku: 'nds_ghee',
      name: "ND's 1ltr Ghee",
      slug: 'nds_ghee',
      description: "Nd's ghee ",
      price: 1220,
      isActive: true,
      brand: getBrandIdByName(brands, 'nds_dairy')
    },
    {
      sku: 'safal_ghee',
      name: 'Safal 1ltr Ghee',
      slug: 'safal_ghee',
      description: 'Safal ghee ',
      price: 1320,
      isActive: true,
      brand: getBrandIdByName(brands, 'safal_dairy')
    },
    {
      sku: 'cow_ghee',
      name: 'Cow Ghee 100% Natural and Pure 1ltr',
      slug: 'cow_ghee',
      description: 'Cow Ghee 100% Natural and Pure',
      price: 1300,
      isActive: true,
      brand: getBrandIdByName(brands, 'rihaan_ghee')
    },
    {
      sku: 'ddc_dahi',
      name: 'DDC Dahi 1ltr Yogurt',
      slug: 'ddc_dahi',
      description: 'DDC Dahi (Yogurt)',
      price: 165,
      isActive: true,
      brand: getBrandIdByName(brands, 'ddc_dairy')
    },
    {
      sku: 'sitaram_dahi',
      name: "Sitaram's Dahi 1ltr Yogurt",
      slug: 'sitaram_dahi',
      description: 'Sitaram Dahi (Yogurt)',
      price: 190,
      isActive: true,
      brand: getBrandIdByName(brands, 'sitaram_dairy')
    },
    {
      sku: 'nds_dahi',
      name: "ND's Dahi 1ltr Yogurt",
      slug: 'nds_dahi',
      description: "ND's Dahi (Yogurt)",
      price: 190,
      isActive: true,
      brand: getBrandIdByName(brands, 'nds_dairy')
    },
    {
      sku: 'nepalgramodhyog_rice',
      name: 'Nepal Gramodhyog 20kg Rice',
      slug: 'nepalgramodhyog_rice',
      description: 'Nepal Gramodhyog Rice',
      price: 3645,
      isActive: true,
      brand: getBrandIdByName(brands, 'nepalgramodhyog')
    },
    {
      sku: 'newarilonggrain_rice',
      name: 'Newari Long Grain 20kg Rice',
      slug: 'newarilonggrain_rice',
      description: 'Newari Long Grain Rice',
      price: 3750,
      isActive: true,
      brand: getBrandIdByName(brands, 'newari_rice')
    },
    {
      sku: 'thakalilonggrain_rice',
      name: 'Thakali Long Grain 20kg Rice',
      slug: 'thakalilonggrain_rice',
      description: 'Thakali Long Grain Rice',
      price: 3680,
      isActive: true,
      brand: getBrandIdByName(brands, 'thakali_rice')
    },
    {
      sku: 'aaratipremium_rice',
      name: 'Aarati Premium 20kg Rice',
      slug: 'aaratipremium_rice',
      description: 'Aarati Premium Rice',
      price: 3445,
      isActive: true,
      brand: getBrandIdByName(brands, 'aarati_rice')
    },
    {
      sku: 'hulas_chiura',
      name: 'Hulas Chiura 1kg',
      slug: 'hulas_chiura',
      description: 'Hulas Chiura',
      price: 95,
      isActive: true,
      brand: getBrandIdByName(brands, 'hulas_food')
    },
    {
      sku: 'nepalgramodhyog_chiura',
      name: 'Nepal Gramodhyog Chiura 1kg',
      slug: 'nepalgramodhyog_chiura',
      description: 'Nepal Gramodhyog Chiura',
      price: 105,
      isActive: true,
      brand: getBrandIdByName(brands, 'nepalgramodhyog')
    },
    {
      sku: 'bigchoicelocaltaichin_chiura',
      name: 'Big Choice Local Taichin Chiura 1kg',
      slug: 'bigchoicelocaltaichin_chiura',
      description: 'Big Choice Local Taichin Chiura',
      price: 153,
      isActive: true,
      brand: getBrandIdByName(brands, 'big_choice')
    },
    {
      sku: 'hirafoods_bhuja',
      name: 'Hira Foods Bhuja 300g',
      slug: 'hirafoods_bhuja',
      description: 'Hira Foods Bhuja',
      price: 50,
      isActive: true,
      brand: getBrandIdByName(brands, 'hira_foods')
    },
    {
      sku: 'somani_bhuja',
      name: 'Somani Bhuja',
      slug: 'somani_bhuja',
      description: 'Somani Bhuja',
      price: 70,
      isActive: true,
      brand: getBrandIdByName(brands, 'somani_bhuja')
    },
    {
      sku: 'gyan_bhuja',
      name: 'Gyan Bhuja',
      slug: 'gyan_bhuja',
      description: 'Gyan Bhuja',
      price: 80,
      isActive: true,
      brand: getBrandIdByName(brands, 'kldugar')
    },
    {
      sku: 'waiwai_noodles',
      name: 'Waiwai Noodles',
      slug: 'waiwai_noodles',
      description: 'Waiwai Noodles',
      price: 25,
      isActive: true,
      brand: getBrandIdByName(brands, 'cgfoods')
    },
    {
      sku: 'rara_noodles',
      name: 'Rara Noodles',
      slug: 'rara_noodles',
      description: 'Rara Noodles',
      price: 20,
      isActive: true,
      brand: getBrandIdByName(brands, 'gandakinoodles')
    },
    {
      sku: 'rumpum_noodles',
      name: 'Rumpum Noodles',
      slug: 'rumpum_noodles',
      description: 'Rumpum Noodles',
      price: 20,
      isActive: true,
      brand: getBrandIdByName(brands, 'asianthaifoods')
    },
    {
      sku: 'waiwaiquick_noodles',
      name: 'Waiwai Quick Pizza Noodles',
      slug: 'waiwaiquick_noodles',
      description: 'Waiwai  Quick Pizza Noodles',
      price: 20,
      isActive: true,
      brand: getBrandIdByName(brands, 'cgfoods')
    },
    {
      sku: '2pm_spicynoodles',
      name: '2pm Spicy Noodles',
      slug: '2pm_spicynoodles',
      description: '2pm Spicy Noodles',
      price: 50,
      isActive: true,
      brand: getBrandIdByName(brands, 'asianthaifoods')
    },
    {
      sku: 'current_spicynoodles',
      name: 'Current Spicy Noodles',
      slug: 'current_spicynoodles',
      description: 'Current Spicy Noodles',
      price: 50,
      isActive: true,
      brand: getBrandIdByName(brands, 'yashodafoods')
    },
    {
      sku: 'samyangbuldok_spicynoodles',
      name: 'Samyang Buldok Spicy Noodles',
      slug: 'samyangbuldok_spicynoodles',
      description: 'Samyang Buldok Spicy Noodles',
      price: 195,
      isActive: true,
      brand: getBrandIdByName(brands, 'samyangfoods')
    },
    {
      sku: 'spartan_chowmein',
      name: 'Spartan Egg Chowmein',
      slug: 'spartan_chowmein',
      description: 'Spartan Egg Chowmein',
      price: 60,
      isActive: true,
      brand: getBrandIdByName(brands, 'spartantrade')
    },
    {
      sku: 'sigma_chowmein',
      name: 'Sigma Chowmein',
      slug: 'sigma_chowmein',
      description: 'Sigma Chowmein',
      price: 70,
      isActive: true,
      brand: getBrandIdByName(brands, 'sigmafoods')
    },
    {
      sku: 'barari_chowmein',
      name: 'Barari Chowmein',
      slug: 'barari_chowmein',
      description: 'Barari Chowmein',
      price: 90,
      isActive: true,
      brand: getBrandIdByName(brands, 'nepalpasta')
    },
    {
      sku: 'swastik_oil',
      name: 'Swastik Soyabean Oil 1ltr',
      slug: 'swastik_oil',
      description: 'Swastik Soyabean Oil',
      price: 199,
      isActive: true,
      brand: getBrandIdByName(brands, 'swastik_oil')
    },
    {
      sku: 'amrit_oil',
      name: 'Amrit Soyabean Oil 1ltr',
      slug: 'amrit_oil',
      description: 'Amrit Soyabean Oil',
      price: 280,
      isActive: true,
      brand: getBrandIdByName(brands, 'annapurnaproducts')
    },
    {
      sku: 'dibya_oil',
      name: 'Dibya Soyabean Oil 1ltr',
      slug: 'dibya_oil',
      description: 'Dibya Soyabean Oil',
      price: 265,
      isActive: true,
      brand: getBrandIdByName(brands, 'rungtasgroup')
    },
    {
      sku: 'mdhkashmiri_redchili',
      name: 'MDH Kashmiri Red Chili Powder 100g',
      slug: 'mdhkashmiri_redchili',
      description: 'MDH Kashmiri Red Chili Powder',
      price: 250,
      isActive: true,
      brand: getBrandIdByName(brands, 'mdh_spices')
    },
    {
      sku: 'everestkashmiri_redchili',
      name: 'Everest Kashmiri Red Chili Powder 100g',
      slug: 'everestkashmiri_redchili',
      description: 'Everest Kashmiri Red Chili Powder',
      price: 250,
      isActive: true,
      brand: getBrandIdByName(brands, 'everest_spices')
    },
    {
      sku: 'haldiramkashmiri_redchili',
      name: 'Haldiram Kashmiri Red Chili Powder 100g',
      slug: 'haldiramkashmiri_redchili',
      description: 'Haldiram Kashmiri Red Chili Powder',
      price: 251.06,
      isActive: true,
      brand: getBrandIdByName(brands, 'haldiram_spices')
    },
    {
      sku: 'century_garammasala',
      name: 'Century Garam Masala 100g',
      slug: 'century_garammasala',
      description: 'Century Garam Masala',
      price: 110,
      isActive: true,
      brand: getBrandIdByName(brands, 'century_group')
    },
    {
      sku: 'haldiram_garammasala',
      name: 'Haldiram Garam Masala 100g',
      slug: 'haldiram_garammasala',
      description: 'Haldiram Garam Masala',
      price: 190,
      isActive: true,
      brand: getBrandIdByName(brands, 'haldiram_spices')
    },
    {
      sku: 'bmc_garammasala',
      name: 'BMC Garam Masala 100g',
      slug: 'bmc_garammasala',
      description: 'BMC Garam Masala',
      price: 230,
      isActive: true,
      brand: getBrandIdByName(brands, 'bmc_spices')
    },
    {
      sku: 'sagarmatha_soyasauce',
      name: 'Sagarmatha Soya Sauce 200g',
      slug: 'sagarmatha_soyasauce',
      description: 'Sagarmatha Soya Sauce',
      price: 68,
      isActive: true,
      brand: getBrandIdByName(brands, 'sagarmatha_soyasauce')
    },
    {
      sku: 'druk_soyasauce',
      name: 'Druk Soya Sauce 200g',
      slug: 'druk_soyasauce',
      description: 'Druk Soya Sauce',
      price: 75,
      isActive: true,
      brand: getBrandIdByName(brands, 'druk')
    },
    {
      sku: 'century_soyasauce',
      name: 'Century Soya Sauce 350g',
      slug: 'century_soyasauce',
      description: 'Century Soya Sauce',
      price: 65,
      isActive: true,
      brand: getBrandIdByName(brands, 'century_group')
    },
    {
      sku: 'happy_eggs',
      name: 'Daunne Happy Eggs 30pcs',
      slug: 'happy_eggs',
      description: 'Daunne Happy Eggs',
      price: 480,
      isActive: true,
      brand: getBrandIdByName(brands, 'happy_eggs')
    },
    {
      sku: 'anivash_eggs',
      name: 'Avinash Eggs 30pcs',
      slug: 'anivash_eggs',
      description: 'Avinash Eggs',
      price: 390,
      isActive: true,
      brand: getBrandIdByName(brands, 'avinash_eggs')
    },
    {
      sku: 'local_eggs',
      name: 'Local Eggs 30pcs',
      slug: 'local_eggs',
      description: 'Local Eggs',
      price: 390,
      isActive: true,
      brand: getBrandIdByName(brands, 'local')
    },
    {
      sku: 'lah_sausage',
      name: 'Lah Buff Sausage',
      slug: 'lah_sausage',
      description: 'Lah Buff Sausage',
      price: 350,
      isActive: true,
      brand: getBrandIdByName(brands, 'adhunik')
    },
    {
      sku: 'meatco_sausage',
      name: 'Meatco Buff Sausage',
      slug: 'meatco_sausage',
      description: 'Meatco Buff Sausage',
      price: 400,
      isActive: true,
      brand: getBrandIdByName(brands, 'meatcofoods')
    },
    {
      sku: 'urban_sausage',
      name: 'Urban Buff Sausage',
      slug: 'urban_sausage',
      description: 'Urban Buff Sausage',
      price: 330,
      isActive: true,
      brand: getBrandIdByName(brands, 'urbanfoods')
    },
    {
      sku: 'valley_mince',
      name: 'Valley Chicken Mince',
      slug: 'valley_mince',
      description: 'Valley Chicken Mince',
      price: 464,
      isActive: true,
      brand: getBrandIdByName(brands, 'vcs_meat')
    },
    {
      sku: 'meatco_mince',
      name: 'Meatco Chicken Mince',
      slug: 'meatco_mince',
      description: 'Meatco Chicken Mince',
      price: 660,
      isActive: true,
      brand: getBrandIdByName(brands, 'meatcofoods')
    },
    {
      sku: 'lah_mince',
      name: 'Lah Chicken Mince',
      slug: 'lah_mince',
      description: 'Lah Chicken Mince',
      price: 350,
      isActive: true,
      brand: getBrandIdByName(brands, 'adhunik')
    },
    {
      sku: 'shrestha_drymeat',
      name: 'Shrestha Buff Dry Meat',
      slug: 'shrestha_drymeat',
      description: 'Shrestha Buff Dry Meat',
      price: 1200,
      isActive: true,
      brand: getBrandIdByName(brands, 'shrestha_drymeat')
    },
    {
      sku: 'sunaulo_drymeat',
      name: 'Sunaulo Buff Dry Meat',
      slug: 'sunaulo_drymeat',
      description: 'Sunaulo Buff Dry Meat',
      price: 1299,
      isActive: true,
      brand: getBrandIdByName(brands, 'sunaulo_drymeat')
    },
    {
      sku: 'meatmania_drymeat',
      name: 'Meat Mania Buff Dry Meat',
      slug: 'meatmania_drymeat',
      description: 'Meat Mania Buff Dry Meat',
      price: 950,
      isActive: true,
      brand: getBrandIdByName(brands, 'meatmania')
    },
    {
      sku: 'local_cauliflower',
      name: 'Local Cauliflower 1kg',
      slug: 'local_cauliflower',
      description: 'Local cauliflower',
      price: 80,
      isActive: true,
      brand: getBrandIdByName(brands, 'local')
    },
    {
      sku: 'pasal101_cauliflower',
      name: 'Pasal 101 Cauliflower 1kg',
      slug: 'pasal101_cauliflower',
      description: 'Pasal 101 cauliflower',
      price: 60,
      isActive: true,
      brand: getBrandIdByName(brands, 'pasal101')
    },
    {
      sku: 'tarkarimart_potato',
      name: 'Tarkari Mart Potato 1kg',
      slug: 'tarkarimart_potato',
      description: 'Tarkari Mart Potato',
      price: 70,
      isActive: true,
      brand: getBrandIdByName(brands, 'tarkarimart')
    },
    {
      sku: 'pasal101_potato',
      name: 'Pasal 101 Potato 1kg',
      slug: 'pasal101_potato',
      description: 'Pasal 101 Potato',
      price: 66,
      isActive: true,
      brand: getBrandIdByName(brands, 'pasal101')
    },
    {
      sku: 'mustang_potato',
      name: 'Mustang Potato 1kg',
      slug: 'mustang_potato',
      description: 'Potato from Mustang',
      price: 165,
      isActive: true,
      brand: getBrandIdByName(brands, 'mustang_potato')
    },
    {
      sku: 'tarkarimart_tomato',
      name: 'Tarkari Mart Tomato 1kg',
      slug: 'tarkarimart_tomato',
      description: 'Tarkari Mart Tomato',
      price: 50,
      isActive: true,
      brand: getBrandIdByName(brands, 'tarkarimart')
    },
    {
      sku: 'kalimatilocal_tomato',
      name: 'Kalimati Local Tomato 1kg',
      slug: 'kalimatilocal_tomato',
      description: 'Kalimati Local Tomato',
      price: 50,
      isActive: true,
      brand: getBrandIdByName(brands, 'local')
    },
    {
      sku: 'merokishan_tomato',
      name: 'Mero Kishan Tomato 1kg',
      slug: 'merokishan_tomato',
      description: 'Mero Kishan Tomato',
      price: 80,
      isActive: true,
      brand: getBrandIdByName(brands, 'merokishan')
    },
    {
      sku: 'nepalgramodhyog_aata',
      name: 'Nepal Gramodhyog Prakritee Chakki Aata 5kg',
      slug: 'nepalgramodhyog_aata',
      description: 'Nepal Gramodhyog Prakritee Chakki Aata',
      price: 460,
      isActive: true,
      brand: getBrandIdByName(brands, 'nepalgramodhyog')
    },
    {
      sku: 'hilife_aata',
      name: 'Hilife Chakki Aata 5kg',
      slug: 'hilife_aata',
      description: 'Hilife Chakki Aata',
      price: 500,
      isActive: true,
      brand: getBrandIdByName(brands, 'hilife')
    },
    {
      sku: 'gyan_aata',
      name: 'Gyan Chakki Aata 5kg',
      slug: 'gyan_aata',
      description: 'Gyan Chakki Aata',
      price: 420,
      isActive: true,
      brand: getBrandIdByName(brands, 'kldugar')
    },
    {
      sku: 'anantabhogpisa_aata',
      name: 'Ananta Bhog Pisa Whole Wheat Aata 5kg',
      slug: 'anantabhogpisa_aata',
      description: 'Ananta Bhog Pisa Whole Wheat Aata',
      price: 425,
      isActive: true,
      brand: getBrandIdByName(brands, 'anantabhog')
    },
    {
      sku: 'hulas_suji',
      name: 'Hulas Suji 400g',
      slug: 'hulas_suji',
      description: 'Hulas Suji',
      price: 65,
      isActive: true,
      brand: getBrandIdByName(brands, 'hulas_food')
    },
    {
      sku: 'aashirvaad_suji',
      name: 'Aashirvaad Suji 500g',
      slug: 'aashirvaad_suji',
      description: 'Aashirvaad Suji',
      price: 65,
      isActive: true,
      brand: getBrandIdByName(brands, 'aashirvaad')
    },
    {
      sku: 'nepalgramodhyog_suji',
      name: 'Nepal Gramodhyog Suji 500g',
      slug: 'nepalgramodhyog_suji',
      description: 'Nepal Gramodhyog Suji',
      price: 70,
      isActive: true,
      brand: getBrandIdByName(brands, 'nepalgramodhyog')
    },
    {
      sku: 'amuanmol_besan',
      name: 'Amu Anmol Besan 500g',
      slug: 'amuanmol_besan',
      description: 'Amu Anmol Besan',
      price: 150,
      isActive: true,
      brand: getBrandIdByName(brands, 'anuanmol')
    },
    {
      sku: 'nepalgramodhyog_besan',
      name: 'Nepal Gramodhyog Besan 500g',
      slug: 'nepalgramodhyog_besan',
      description: 'Nepal Gramodhyog Besan',
      price: 153.6,
      isActive: true,
      brand: getBrandIdByName(brands, 'nepalgramodhyog')
    },
    {
      sku: 'hulas_besan',
      name: 'Hulas Besan 500g',
      slug: 'hulas_besan',
      description: 'Hulas Besan',
      price: 105,
      isActive: true,
      brand: getBrandIdByName(brands, 'hulas_food')
    },
    {
      sku: 'gyan_besan',
      name: 'Gyan Besan 500g',
      slug: 'gyan_besan',
      description: 'Gyan Besan',
      price: 110,
      isActive: true,
      brand: getBrandIdByName(brands, 'kldugar')
    },
    {
      sku: 'cocacola_softdrink',
      name: 'Coca Cola 2.25ltr',
      slug: 'cocacola_softdrink',
      description: 'Coca Cola',
      price: 270,
      isActive: true,
      brand: getBrandIdByName(brands, 'cocacola')
    },
    {
      sku: 'fanta_softdrink',
      name: 'Fanta 2.25ltr',
      slug: 'fanta_softdrink',
      description: 'Fanta',
      price: 260,
      isActive: true,
      brand: getBrandIdByName(brands, 'cocacola')
    },
    {
      sku: 'sprite_softdrink',
      name: 'Sprite 2.25ltr',
      slug: 'sprite_softdrink',
      description: 'Sprite',
      price: 260,
      isActive: true,
      brand: getBrandIdByName(brands, 'cocacola')
    },
    {
      sku: 'pepsi_softdrink',
      name: 'Pepsi 2.25ltr',
      slug: 'pepsi_softdrink',
      description: 'Pepsi',
      price: 260,
      isActive: true,
      brand: getBrandIdByName(brands, 'pepsico')
    },
    {
      sku: 'mountaindew_softdrink',
      name: 'Mountain Dew 2.25ltr',
      slug: 'mountaindew_softdrink',
      description: 'Mountain Dew',
      price: 260,
      isActive: true,
      brand: getBrandIdByName(brands, 'pepsico')
    },
    {
      sku: 'saikripagold_tea',
      name: 'Sai Kripa Gold Tea Pouch 500g',
      slug: 'saikripagold_tea',
      description: 'Sai Kripa Gold Tea Pouch',
      price: 310,
      isActive: true,
      brand: getBrandIdByName(brands, 'saikripa')
    },
    {
      sku: 'gyanmasala_tea',
      name: 'Gyan Masala Tea Pouch 500g',
      slug: 'gyanmasala_tea',
      description: 'Gyan Masala Tea Pouch',
      price: 270,
      isActive: true,
      brand: getBrandIdByName(brands, 'kldugar')
    },
    {
      sku: 'toklagold_tea',
      name: 'Tokla Gold Tea Bag 500g',
      slug: 'toklagold_tea',
      description: 'Tokla Gold Tea Bag',
      price: 310,
      isActive: true,
      brand: getBrandIdByName(brands, 'ntdc_tokla')
    },
    {
      sku: 'mechimasala_tea',
      name: 'Mechi Masala Tea 500g',
      slug: 'mechimasala_tea',
      description: 'Mechi Masala Tea',
      price: 290,
      isActive: true,
      brand: getBrandIdByName(brands, 'mechi_tea')
    },
    {
      sku: 'europeanbakery_bread',
      name: 'European Bakery Brown Bread',
      slug: 'europeanbakery_bread',
      description: 'European Bakery Brown Bread',
      price: 140,
      isActive: true,
      brand: getBrandIdByName(brands, 'europeanbakery')
    },
    {
      sku: 'nanglo_bread',
      name: 'Nanglo Brown Bread',
      slug: 'nanglo_bread',
      description: 'Nanglo Brown Bread',
      price: 110,
      isActive: true,
      brand: getBrandIdByName(brands, 'nanglobakery')
    },
    {
      sku: 'dhakal_bread',
      name: 'Dhakal Brown Bread',
      slug: 'dhakal_bread',
      description: 'Dhakal Brown Bread',
      price: 115,
      isActive: true,
      brand: getBrandIdByName(brands, 'dhakalbakery')
    },
    {
      sku: 'tastyfresh_roti',
      name: 'Tasty Fresh Chapati Roti',
      slug: 'tastyfresh_roti',
      description: 'Tasty Fresh Chapati Roti',
      price: 580.82,
      isActive: true,
      brand: getBrandIdByName(brands, 'tastyfresh_roti')
    },
    {
      sku: 'alyprotein_roti',
      name: 'Aly Protein Tortila',
      slug: 'alyprotein_roti',
      description: 'Aly Protein Tortila Roti',
      price: 415,
      isActive: true,
      brand: getBrandIdByName(brands, 'alyfoods')
    },
    {
      sku: 'nanglo_croissant',
      name: 'Nanglo Croissant 6 pcs',
      slug: 'nanglo_croissant',
      description: 'Nanglo Croissant',
      price: 110,
      isActive: true,
      brand: getBrandIdByName(brands, 'nanglobakery')
    },
    {
      sku: 'europeanbakery_croissant',
      name: 'European Bakery Croissant 8 pcs',
      slug: 'europeanbakery_croissant',
      description: 'European Bakery Croissant',
      price: 240,
      isActive: true,
      brand: getBrandIdByName(brands, 'europeanbakery')
    }
    // {
    //   sku: 'ktm_cornflakes',
    //   name: 'Kathmandu Corn flakes',
    //   slug: 'ktm_cornflakes',
    //   description: 'Kathmandu Cornflakes ',
    //   price: 60,
    //   isActive: true,
    //   brand: getBrandIdByName(brands, 'ktm_cornflakes')
    // },
    // {
    //   sku: 'pokhara_cornflakes',
    //   name: 'Pokhara Corn flakes',
    //   slug: 'pokhara_cornflakes',
    //   description: 'Pokhara Cornflakes ',
    //   price: 1000,
    //   isActive: true,
    //   brand: getBrandIdByName(brands, 'pokhara_cornflakes')
    // }
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
        getProductIdByName(products, 'safal_milk'),
        getProductIdByName(products, 'amul_milk'),
        getProductIdByName(products, 'amul_butter'),
        getProductIdByName(products, 'nds_butter'),
        getProductIdByName(products, 'manaram_butter'),
        getProductIdByName(products, 'nds_ghee'),
        getProductIdByName(products, 'safal_ghee'),
        getProductIdByName(products, 'cow_ghee'),
        getProductIdByName(products, 'ddc_dahi'),
        getProductIdByName(products, 'sitaram_dahi'),
        getProductIdByName(products, 'nds_dahi')
      ]
    },
    {
      name: 'Rice and Rice products',
      slug: 'rice',
      isActive: true,
      description: 'Rice related products',
      products: [
        getProductIdByName(products, 'nepalgramodhyog_rice'),
        getProductIdByName(products, 'newarilonggrain_rice'),
        getProductIdByName(products, 'thakalilonggrain_rice'),
        getProductIdByName(products, 'aaratipremium_rice'),
        getProductIdByName(products, 'hulas_chiura'),
        getProductIdByName(products, 'nepalgramodhyog_chiura'),
        getProductIdByName(products, 'bigchoicelocaltaichin_chiura'),
        getProductIdByName(products, 'hirafoods_bhuja'),
        getProductIdByName(products, 'somani_bhuja'),
        getProductIdByName(products, 'gyan_bhuja')
      ]
    },
    {
      name: 'Noodles and Packaged Food',
      slug: 'noodles',
      isActive: true,
      description: 'Noodles related products',
      products: [
        getProductIdByName(products, 'waiwai_noodles'),
        getProductIdByName(products, 'rara_noodles'),
        getProductIdByName(products, 'rumpum_noodles'),
        getProductIdByName(products, 'waiwaiquick_noodles'),
        getProductIdByName(products, '2pm_spicynoodles'),
        getProductIdByName(products, 'current_spicynoodles'),
        getProductIdByName(products, 'samyangbuldok_spicynoodles'),
        getProductIdByName(products, 'spartan_chowmein'),
        getProductIdByName(products, 'sigma_chowmein'),
        getProductIdByName(products, 'barari_chowmein')
      ]
    },
    {
      name: 'Spices and Condiments',
      slug: 'spices',
      isActive: true,
      description: 'Spices and condiments related products',
      products: [
        getProductIdByName(products, 'swastik_oil'),
        getProductIdByName(products, 'amrit_oil'),
        getProductIdByName(products, 'dibya_oil'),
        getProductIdByName(products, 'mdhkashmiri_redchili'),
        getProductIdByName(products, 'everestkashmiri_redchili'),
        getProductIdByName(products, 'haldiramkashmiri_redchili'),
        getProductIdByName(products, 'century_garammasala'),
        getProductIdByName(products, 'haldiram_garammasala'),
        getProductIdByName(products, 'bmc_garammasala'),
        getProductIdByName(products, 'sagarmatha_soyasauce'),
        getProductIdByName(products, 'druk_soyasauce'),
        getProductIdByName(products, 'century_soyasauce')
      ]
    },
    {
      name: 'Egg and Meat Products',
      slug: 'egg_meats',
      isActive: true,
      description: 'Non vegetarian items',
      products: [
        getProductIdByName(products, 'happy_eggs'),
        getProductIdByName(products, 'anivash_eggs'),
        getProductIdByName(products, 'local_eggs'),
        getProductIdByName(products, 'lah_sausage'),
        getProductIdByName(products, 'meatco_sausage'),
        getProductIdByName(products, 'urban_sausage'),
        getProductIdByName(products, 'valley_mince'),
        getProductIdByName(products, 'meatco_mince'),
        getProductIdByName(products, 'lah_mince'),
        getProductIdByName(products, 'shrestha_drymeat'),
        getProductIdByName(products, 'sunaulo_drymeat'),
        getProductIdByName(products, 'meatmania_drymeat')
      ]
    },
    {
      name: 'Vegetables',
      slug: 'vegetables',
      isActive: true,
      description: 'Vegetable related items',
      products: [
        getProductIdByName(products, 'local_cauliflower'),
        getProductIdByName(products, 'pasal101_cauliflower'),
        getProductIdByName(products, 'tarkarimart_potato'),
        getProductIdByName(products, 'pasal101_potato'),
        getProductIdByName(products, 'mustang_potato'),
        getProductIdByName(products, 'tarkarimart_tomato'),
        getProductIdByName(products, 'kalimatilocal_tomato'),
        getProductIdByName(products, 'merokishan_tomato')
      ]
    },
    {
      name: 'Flour items',
      slug: 'flour',
      isActive: true,
      description: 'Flour related items',
      products: [
        getProductIdByName(products, 'nepalgramodhyog_aata'),
        getProductIdByName(products, 'hilife_aata'),
        getProductIdByName(products, 'gyan_aata'),
        getProductIdByName(products, 'anantabhogpisa_aata'),
        getProductIdByName(products, 'hulas_suji'),
        getProductIdByName(products, 'aashirvaad_suji'),
        getProductIdByName(products, 'nepalgramodhyog_suji'),
        getProductIdByName(products, 'amuanmol_besan'),
        getProductIdByName(products, 'nepalgramodhyog_besan'),
        getProductIdByName(products, 'hulas_besan'),
        getProductIdByName(products, 'gyan_besan')
      ]
    },
    {
      name: 'Beverages',
      slug: 'beverages',
      isActive: true,
      description: 'Beverage related items',
      products: [
        getProductIdByName(products, 'cocacola_softdrink'),
        getProductIdByName(products, 'fanta_softdrink'),
        getProductIdByName(products, 'sprite_softdrink'),
        getProductIdByName(products, 'pepsi_softdrink'),
        getProductIdByName(products, 'mountaindew_softdrink'),
        getProductIdByName(products, 'saikripagold_tea'),
        getProductIdByName(products, 'gyanmasala_tea'),
        getProductIdByName(products, 'toklagold_tea'),
        getProductIdByName(products, 'mechimasala_tea')
      ]
    },
    {
      name: 'Bakery',
      slug: 'bakery',
      isActive: true,
      description: 'bakery related products',
      products: [
        getProductIdByName(products, 'europeanbakery_bread'),
        getProductIdByName(products, 'nanglo_bread'),
        getProductIdByName(products, 'dhakal_bread'),
        getProductIdByName(products, 'tastyfresh_roti'),
        getProductIdByName(products, 'alyprotein_roti'),
        getProductIdByName(products, 'nanglo_croissant'),
        getProductIdByName(products, 'europeanbakery_croissant')
      ]
    }
    // {
    //   name: 'Cereals',
    //   slug: 'cereals',
    //   isActive: true,
    //   description: 'Cereal products',
    //   products: [
    //     getProductIdByName(products, 'ktm_cornflakes'),
    //     getProductIdByName(products, 'pokhara_cornflakes')
    //   ]
    // }
  ];
  try {
    await Category.remove({});
    await Category.insertMany(categories);
    console.log('Categories added');
  } catch (err) {
    console.log('Category addition error');
  }
};

const seedUsers = async () => {
  const users = [
    {
      email: 'user1@gmail.com'
    },
    {
      email: 'user2@gmail.com'
    },
    {
      email: 'user3@gmail.com'
    },
    {
      email: 'user4@gmail.com'
    },
    {
      email: 'user5@gmail.com'
    },
    {
      email: 'user6@gmail.com'
    }
  ];
  try {
    await User.insertMany(users);
    console.log('Users successfully added');
  } catch (err) {
    console.log('Users addition error');
  }
};

// const userByEmail = (users, email) => {
//   return users.find(user => user.email === email)._id;
// };
// const seedCartsAndOrders = async () => {
//   const users = await User.find({});
//   const products = await Product.find({});
//   const carts = [
//     // User 1
//     {
//       products: [
//         {
//           product: getProductIdByName(products, 'ddc_milk'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         }
//       ],
//       user: userByEmail(users, 'user1@gmail.com')
//     },
//     {
//       products: [
//         {
//           product: getProductIdByName(products, 'indian_bread'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         },
//         {
//           product: getProductIdByName(products, 'ktm_cornflakes'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         }
//       ],
//       user: userByEmail(users, 'user1@gmail.com')
//     },
//     // User 2
//     {
//       products: [
//         {
//           product: getProductIdByName(products, 'indian_bread'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         },
//         {
//           product: getProductIdByName(products, 'pokhara_cornflakes'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         }
//       ],
//       user: userByEmail(users, 'user2@gmail.com')
//     },
//     // User 3
//     {
//       products: [
//         {
//           product: getProductIdByName(products, 'indian_bread'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         },
//         {
//           product: getProductIdByName(products, 'ddc_milk'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         },
//         {
//           product: getProductIdByName(products, 'ktm_cornflakes'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         }
//       ],
//       user: userByEmail(users, 'user3@gmail.com')
//     },
//     // User 4
//     {
//       products: [
//         {
//           product: getProductIdByName(products, 'pokhara_cornflakes'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         }
//       ],
//       user: userByEmail(users, 'user4@gmail.com')
//     },
//     // User 5
//     {
//       products: [
//         {
//           product: getProductIdByName(products, 'ktm_cornflakes'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         }
//       ],
//       user: userByEmail(users, 'user5@gmail.com')
//     },
//     // User 6
//     {
//       products: [
//         {
//           product: getProductIdByName(products, 'ktm_cornflakes'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         }
//       ],
//       user: userByEmail(users, 'user6@gmail.com')
//     },
//     {
//       products: [
//         {
//           product: getProductIdByName(products, 'ddc_milk'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         }
//       ],
//       user: userByEmail(users, 'user6@gmail.com')
//     },
//     {
//       products: [
//         {
//           product: getProductIdByName(products, 'indian_bread'),
//           quantity: 1,
//           status: CART_ITEM_STATUS.Delivered
//         }
//       ],
//       user: userByEmail(users, 'user6@gmail.com')
//     }
//   ];
//   await Cart.remove({});
//   await Order.remove({});
//   try {
//     for (let cart of carts) {
//       const cartDb = new Cart(cart);
//       await cartDb.save();
//       const order = new Order({
//         cart: cartDb.cart,
//         user: cartDb.user,
//         total: 100
//       });
//       await order.save();
//     }
//     console.log('Cart successfully added');
//   } catch (err) {
//     console.log('Cart addition error');
//   }
// };

const seedDatabase = async () => {
  await seedBrands();
  await seedProducts();
  await seedCategories();
//   await seedUsers();
//   await seedCartsAndOrders();
};

seedDatabase();
