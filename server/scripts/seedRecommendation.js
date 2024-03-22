const seed = require("./seed");
const User = require('../models/user');
const Product = require('../models/product');
const Review = require("../models/review");
const { REVIEW_STATUS } = require("../constants");
const seedProducts = seed.seedProducts
const getProductIdByName = seed.getProductIdByName
const seedUsers = seed.seedUsers
const userByEmail = seed.userByEmail

//3,4 and 5 star
const addAmulMilkReviews = async (products, users) => {
    const reviews = [
        {
            product: getProductIdByName(products, "amul_milk"),
            user: userByEmail(users, "user1@gmail.com"),
            rating: 3,
            status: REVIEW_STATUS.Approved
        },
        {
            product: getProductIdByName(products, "amul_milk"),
            user: userByEmail(users, "user2@gmail.com"),
            rating: 4,
            review: "The product is good",
            status: REVIEW_STATUS.Approved
        },
        {
            product: getProductIdByName(products, "amul_milk"),
            user: userByEmail(users, "user2@gmail.com"),
            rating: 5,
            status: REVIEW_STATUS.Approved
        }
    ]

    try {
        const res = await Review.insertMany(reviews)
        console.log("Amul milk review added")
    } catch (err) {
        console.log("Review addition error", err)
    }
}

// 3 and 4. moderate review
const addAmulButterReviews = async (products, users) => {
    const reviews = [
        {
            product: getProductIdByName(products, "amul_butter"),
            user: userByEmail(users, "user1@gmail.com"),
            rating: 3,
            review: "The product is pretty good",
            status: REVIEW_STATUS.Approved
        },
        {
            product: getProductIdByName(products, "amul_butter"),
            user: userByEmail(users, "user2@gmail.com"),
            rating: 4,
            status: REVIEW_STATUS.Approved
        },
    ]

    try {
        const res = await Review.insertMany(reviews)
        console.log("Amul butter review added")
    } catch (err) {
        console.log("Review addition error", err)
    }
}

// 3 and 4. really good reviews
const addSitaramDahiReviews = async (products, users) => {
    const reviews = [
        {
            product: getProductIdByName(products, "sitaram_dahi"),
            user: userByEmail(users, "user1@gmail.com"),
            rating: 3,
            review: "The product is damn good. It is amazing",
            status: REVIEW_STATUS.Approved
        },
        {
            product: getProductIdByName(products, "sitaram_dahi"),
            user: userByEmail(users, "user2@gmail.com"),
            rating: 4,
            review: "Absolutely amazing. Buy it right now.",
            status: REVIEW_STATUS.Approved
        },
    ]

    try {
        const res = await Review.insertMany(reviews)
        console.log("Sitaram review added")
    } catch (err) {
        console.log("Review addition error", err)
    }
}

const seedDatabase = async () => {
    await seedProducts()
    await seedUsers()
    const products = await Product.find({});
    const users = await User.find({})
    await Review.remove({})
    await addAmulMilkReviews(products, users)
    await addAmulButterReviews(products, users)
    await addSitaramDahiReviews(products, users)
}

seedDatabase()