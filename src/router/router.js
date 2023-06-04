const router = require('express');
const { AuthClient } = require('../middlewares/auth.js')
const { PostProducts } = require('../controls/PostProduct/PostProduct.js')
const { GetListProduct } = require('../controls/GetProduct/GetProduct.js')
const { DeleteProduct } = require('../controls/DeleteProduct/DeleteProduct.js')

const route = router()

route.post('/api/v1/produtos/post', AuthClient, PostProducts)
route.get('/api/v1/produtos/get', AuthClient, GetListProduct)
route.delete('/api/v1/produtos/delete/:id', AuthClient, DeleteProduct)


module.exports = { route }