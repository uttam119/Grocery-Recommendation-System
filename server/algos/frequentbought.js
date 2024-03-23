const setupDB = require('../utils/db');
const Cart = require('../models/cart');
const Product = require('../models/product');
const apriori = require("../utils/fppattern");

const getProductsByUser = async () => {
    try {
        console.log("Get products is called")
        const result = await Cart.aggregate([
            {
                $unwind: "$products"
            },
            {
                $group: {
                    _id: {
                        user: "$user",
                        day: { $dateToString: { format: "%Y-%m-%d", date: "$created" } }
                    },
                    products: { $addToSet: "$products.product" }
                }
            },
            {
                $lookup: {
                    from: "users", // assuming the name of the collection is 'users'
                    localField: "_id.user",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $unwind: "$user"
            },
            {
                $project: {
                    _id: 0,
                    day: "$_id.day",
                    user: "$user.email",
                    products: 1
                }
            },
            {
                $unwind: "$products"
            },
            {
                $lookup: {
                    from: "products", // assuming the name of the collection is 'products'
                    localField: "products",
                    foreignField: "_id",
                    as: "productDetails"
                }
            },
            {
                $unwind: "$productDetails"
            },
            {
                $project: {
                    day: 1,
                    user: 1,
                    products: {
                        $concat: [
                            { $toString: "$productDetails.sku" } // Convert SKU to string
                        ]
                    }
                }
            },
            {
                $group: {
                    _id: { day: "$day", user: "$user" },
                    products: { $addToSet: "$products" }
                }
            },
            {
                $project: {
                    _id: 0,
                    day: "$_id.day",
                    user: "$_id.user",
                    products: 1
                }
            }
        ]);
        return result
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
const SUPPORT_COUNT_PERCENTAGE = 0.4 // 40% percentage
const aprioriAlgo = async () => {
    await setupDB()
    console.log("Algo is called")
    const productsByUsers = await getProductsByUser();
    console.log("Products by users are", productsByUsers)

    const candidateSets = productsByUsers.map(pr => pr.products.map(pr => `${pr}`));
    const totalProducts = candidateSets.length

    const supportCount = SUPPORT_COUNT_PERCENTAGE * totalProducts
    console.log("Candidate sets are", candidateSets)
    const association = apriori(candidateSets, 2)
    return association
}


const findFrequentOfAProduct = async (sku) => {
    console.log("Product is", sku)
    const assocation = await aprioriAlgo();
    console.log("Assocation is", assocation, sku)

    const productAssocation = assocation.find(assoc => assoc.antecedent.length === 1 && assoc.antecedent[0] === `${sku}`)
    console.log("Product association is", sku)
    const frequentProducts = []
    if (productAssocation) {
        for (let item of productAssocation.consequent) {
            console.log("Item is ", item)
            const product = await Product.findOne({ sku: item })
            frequentProducts.push(product)
        }
    }
    console.log("Product assocation is", frequentProducts)
    return frequentProducts


}

//findFrequentOfAProduct("ktm_cornflakes")
module.exports = findFrequentOfAProduct