const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Product List',
      path: '/',
    });
  });
};

exports.getIndex = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Products',
      path: '/products',
    });
  });
}

exports.getCart = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop/cart', {
      pageTitle: 'Your Cart',
      path: '/cart',
    });
  });
}

exports.getCheckout = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop/checkout', {
      prods: products,
      pageTitle: 'Checkout',
      path: '/checkout',
    });
  });
}