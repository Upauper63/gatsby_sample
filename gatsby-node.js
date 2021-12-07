exports.createPages = ({ actions: { createPage } }) => {
    const products = require("./src/data/products.json");
    products.forEach(product => {
        createPage({
            path: `/product/${product.slug}`,
            component: require.resolve('./src/templates/Product.js'),
            context: {
                title: product.title,
                content: product.content,
            }
        })
    })
}