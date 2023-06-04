const fs = require('fs');

const GetListProduct = async (req, res) => {
  try {
    const database = './database/database.json';
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: err
        })
      }
      
      const jsonList = JSON.parse(data);
      const list = jsonList;
      
      return res.status(200).json({
        success: true,
        list
      })
      
    });
    
  } catch(error) {
    
    return res.status(401).json({
      success: false,
      message: error.message
    })
    
  }
}

module.exports = { GetListProduct }