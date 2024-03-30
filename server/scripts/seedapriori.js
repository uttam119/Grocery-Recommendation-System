const mongoose = require('mongoose');
const Brand = require('../models/brand');
const Product = require('../models/product');
const User = require('../models/user');
const Category = require('../models/category');
const Cart = require('../models/cart');
const Order = require('../models/order');
const setupDB = require('../utils/db');
const moment = require("moment");
const { CART_ITEM_STATUS } = require('../constants');
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
            imageUrl: "ddc-image1.jpg",
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
        await Product.insertMany(products.map(product => {
            return {
                ...product,

            }
        }));
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

const seedUsers = async () => {
    const users = [
        {
            email: "user1@gmail.com"
        },
        {
            email: "user2@gmail.com"
        },
        {
            email: "user3@gmail.com"
        },
        {
            email: "user4@gmail.com"
        },
        {
            email: "user5@gmail.com"
        },
        {
            email: "user6@gmail.com"
        },
    ]
    try {
        await User.insertMany(users);
        console.log("Users successfully added")
    } catch (err) {
        console.log("Users addition error")
    }
}


const userByEmail = (users, email) => {
    return users.find(user => user.email === email)._id;
}
const seedCartsAndOrders = async () => {
    const users = await User.find({})
    const products = await Product.find({});
    const carts = [
        // User 1
        {
            products: [{
                product: getProductIdByName(products, 'ddc_milk'),
                quantity: 1,
                status: CART_ITEM_STATUS.Delivered,

            }],
            user: userByEmail(users, 'user1@gmail.com')
        },
        {
            products: [
                {
                    product: getProductIdByName(products, 'indian_bread'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
                {
                    product: getProductIdByName(products, 'ktm_cornflakes'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
            ],
            user: userByEmail(users, 'user1@gmail.com')
        },
        // User 2
        {
            products: [
                {
                    product: getProductIdByName(products, 'indian_bread'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
                {
                    product: getProductIdByName(products, 'pokhara_cornflakes'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
            ],
            user: userByEmail(users, 'user2@gmail.com')
        },
        // User 3
        {
            products: [
                {
                    product: getProductIdByName(products, 'indian_bread'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
                {
                    product: getProductIdByName(products, 'ddc_milk'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
                {
                    product: getProductIdByName(products, 'ktm_cornflakes'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
            ],
            user: userByEmail(users, 'user3@gmail.com')
        },
        // User 4
        {
            products: [
                {
                    product: getProductIdByName(products, 'pokhara_cornflakes'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
            ],
            user: userByEmail(users, 'user4@gmail.com')
        },
        // User 5
        {
            products: [
                {
                    product: getProductIdByName(products, 'ktm_cornflakes'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
            ],
            user: userByEmail(users, 'user5@gmail.com')
        },
        // User 6
        {
            products: [
                {
                    product: getProductIdByName(products, 'ktm_cornflakes'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
            ],
            user: userByEmail(users, 'user6@gmail.com')
        },
        {
            products: [
                {
                    product: getProductIdByName(products, 'ddc_milk'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
            ],
            user: userByEmail(users, 'user6@gmail.com')
        },
        {
            products: [
                {
                    product: getProductIdByName(products, 'indian_bread'),
                    quantity: 1,
                    status: CART_ITEM_STATUS.Delivered
                },
            ],
            user: userByEmail(users, 'user6@gmail.com')
        }
    ]
    await Cart.remove({})
    await Order.remove({})
    try {
        for (let cart of carts) {
            const cartDb = new Cart(cart)
            await cartDb.save()
            const order = new Order({
                cart: cartDb.cart,
                user: cartDb.user,
                total: 100
            })
            await order.save()
        }
        console.log("Cart successfully added")
    } catch (err) {
        console.log("Cart addition error")
    }

}

const seedDatabase = async () => {
    await seedBrands();
    await seedProducts();
    await seedCategories();
    await seedUsers();
    await seedCartsAndOrders();
};

seedDatabase();
