const fs = require('fs');

function PostProducts(req, res) {
  
  function GerarID() {
    let numero = '';
    for (let i = 0; i < 12; i++) {
      const digito = Math.floor(Math.random() * 12);
      numero += digito.toString();
    }
    return numero;
  }
  
  try {
    
    const product =
      {
        'title': req.body.title,
        'descriptions': req.body.descriptions,
        'value': req.body.value,
        'avaliacao': 0,
        'disponivel': req.body.disponivel,
        'vendidos': req.body.vendidos,
        'estoque': req.body.estoque,
        'id': Number(GerarID()),
        'imageUrl': req.body.img
        
      }
      
      fs.readFile('./database/database.json', 'utf8', (err, listproduct) => {
        if (err) {
          res.status(500).json({ message: 'Erro ao ler os dados.' });
        } else {
          let listdados = [];
          if (listproduct) {
            listdados = JSON.parse(listproduct);
          }
          listdados.push(product);
          
          fs.writeFile('./database/database.json', JSON.stringify(listdados), (err) => {
            
            if (err) {
              
              return res.status(400).json({
                'success': 'false',
                'message': err
              })
              
            } else {
              
              return res.status(200).json({
                'success': 'true',
                'message': 'Produto postado com sucesso.'
              })
              
            }
          })
        }
      });
    
  } catch(error) {
    
    return res.status(400).json({
      'success': 'false',
      'message': error.message
    })
    
  }
  
}

module.exports = { PostProducts }