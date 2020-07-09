import express from 'express'
import data from './data'
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose'
import userRoutes from './routes/userRoutes'
import orderRoute from './routes/orderRoute'
import bodyParser from 'body-parser'
import productRoute from './routes/productRoute'
dotenv.config()

const app = express()
app.use(bodyParser.json())
const mongodbUrl = config.MONGODB_URL

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason))

app.use('/api/users', userRoutes)
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)

//For rendering static
// app.get("/api/products/:id",(req,res) =>{
//     const productId = req.params.id;
//     const product = data.products.find(x=>x._id == productId);
//     if(product)
//          res.status(200).send(product);
//     else
//         res.status(404).send({msg:"Product Not Found."});
// });

// app.get("/api/products",(req,res) =>{

//     res.send(data.products);
// });

app.listen(5000, () => {
  console.log('Server Started At http://localhost:5000')
})
