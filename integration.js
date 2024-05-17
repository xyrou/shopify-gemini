const shopifyAuth = require('shopify-auth');

app.get('/auth', shopifyAuth.authRoute({
    apiKey: APP_ID,
    secret: APP_SECRET,
    scopes: ['read_products', 'read_orders', 'write_products'], // Gereken izinler
}));

app.get('/auth/callback', shopifyAuth.callbackRoute({
    apiKey: APP_ID,
    secret: APP_SECRET,
    successRedirect: '/chat', // Uygulamanın ana sayfasına yönlendir
    failureRedirect: '/', // Hata durumunda yönlendir
}));

// Uygulamanın ana sayfası (Chatbot)
app.get('/chat', async (req, res) => {
    // Shopify'dan verileri alın (örneğin, ürünler)
    const products = await shopifyApi.rest.Product.list();
    res.render('index', { products: products });
});
