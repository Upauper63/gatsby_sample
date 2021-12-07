exports.createPages = ({ actions: { createPage } }) => {
    const cards = require("./src/data/VOW.json");
    cards.forEach(card => {
        createPage({
            path: `/cards/${card.name}`,
            component: require.resolve('./src/templates/Detail.js'),
            context: {
                foreignData: card.foreignData,
            }
        })
    })
}