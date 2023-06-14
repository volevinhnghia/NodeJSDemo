const getAllProducts = (req, res) => {
    res.send([
        {id: 1, name: 'fgsgsdfgsg', brand: 'fgdfsbn', price:34323443},
        {id: 2, name: 'fgsgsdfgsg', brand: 'fgdfsbn', price:34323443},
        {id: 3, name: 'fgsgsdfgsg', brand: 'fgdfsbn', price:34323443},
        {id: 4, name: 'fgsgsdfgsg', brand: 'fgdfsbn', price:34323443},
    ])
  };
  module.exports = {
    getAllProducts
  }