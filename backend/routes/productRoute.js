import express from 'express';
import Product from '../model/productModel' ;
import { isAuth, isAdmin } from '../util';

const route = express.Router();


route.get('/', async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const products = await Product.find({ ...category})
  res.send(products);
});

route.get('/:id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
    console.log(product)
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});
route.put('/:id',isAuth,isAdmin,async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.title= req.body.name;
    product.img= req.body.image;
    product.price= req.body.price;
    product.company= req.body.brand;
    product.category= req.body.category;
    product.countInStock= req.body.countInStock;
    product.info= req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
});

route.delete('/:id',isAuth,isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

route.post('/',isAuth, isAdmin,async (req, res) => {
  const product = new Product({
    title: req.body.name,
    img: req.body.image,
    price: req.body.price,
    company: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    info: req.body.description,
    
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
});

export default route;
