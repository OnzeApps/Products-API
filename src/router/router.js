const { Router } = require("express")
const { PostProducts } = require('../controls/PostProduct/PostProduct.js');
const { GetListProduct } = require('../controls/GetProduct/GetProduct.js')
const { DeleteProduct } = require('../controls/DeleteProduct/DeleteProduct.js')
const { auth } = require('../middlewares/auth.js')

const route = Router()

try {
//route.post('/api/v1/produtos/post', auth, PostProducts);

route.get('/api/v1/produtos/list', auth, GetListProduct());

//route.delete("/api/v1/produtos/delete", auth, DeleteProduct);
} catch(error) {
  console.log(error.message)
}
module.exports = { route }