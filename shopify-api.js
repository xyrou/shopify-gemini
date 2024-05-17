const shopify = require('shopify-api');
const { APP_ID, APP_SECRET, SHOP_DOMAIN } = process.env;

const shopifyApi = new shopify.Shop({
    shop: SHOP_DOMAIN,
    apiKey: APP_ID,
    secret: APP_SECRET,
});
