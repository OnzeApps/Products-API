const fs = require('fs');

function GetListProduct(res) {
  fs.readFile('./database/database.json', 'utf8', (err, getlist) => {
    if (err) {
      return res.status(400).json({
        'success': 'false',
        'message': err
      });
    } else {
      
      try {
        
        const dados = JSON.parse(getlist);
        const list = dados;
        res.status(200).json({
          'success': 'true',
          list
        })
      } catch(error) {
        
        res.status(400).json({
          'success': 'false',
          'message': error.message
        })
        
      }
      
    }
  });
}

module.exports = { GetListProduct }