const fs = require('fs');

function DeleteProduct(req, res) {
  
  try {
    const path = './database/database.json';
    const objects = fs.readFileSync(path, 'utf-8');
    const dados = JSON.parse(objects);
    const ID = req.body.id
    
    const find = dados.findIndex(item => item.id === ID);
    
    dados.splice(find, 1);
    const AttJson= JSON.stringify(dados);
    fs.writeFileSync(path, AttJson, 'utf-8');
    
    return res.status(200).json({
      'success': 'true',
      'message': `Produto ${req.body.id} foi deletado.`
    })
    
  } catch(error) {
    
    return res.status(400).json({
      'success': 'false',
      'message': error.message
    })
    
  }
  
}

module.exports = { DeleteProduct }