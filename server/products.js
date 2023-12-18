var express = require('express')
var router = express.Router();

const products = [
  {code: "NZOG", name: 'Nogometna žoga', price: 66.45, favorite: false},
  {code: "LNT", name: 'Lopar za namizni tenis', price: 124.33, favorite: false},
  {code: "BRUK", name: 'Boksarske rokavice', price: 46.54, favorite: false},
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundProducts = products.filter(
      (product) => product.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundProducts);
  }
  return res.status(200).json(products);
});

router.post('/', (req, res) => {
  let product = req.body;
  let foundProduct = products.find(each => each.code === product.code);
  if (foundProduct) {
    return res.status(400)
        .json({msg: 'Product with code ' + product.code + ' already exists'});
  }
  products.push(product);
  return res.status(200).json({msg: 'Product with code ' + product.code + ' successfully created'});
});

router.patch('/:code', (req, res) => {
  let productCode = req.params.code;
  let foundProduct = products.find(each => each.code === productCode);
  if (foundProduct) {
    foundProduct.favorite = req.body.favorite;
    let msg = 'Product with code ' + productCode + ' is now ';
    msg += foundProduct.favorite ? ' favorited.' : ' unfavorited';
    return res.status(200).json({msg: msg});
  }
  return res.status(400).json({msg: 'Product with code ' + productCode + ' not found!'});
});

module.exports = router;