import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import data from './data';
import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoutes';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

// app.get('/api/products', (req, res) => {
//     res.send(data.products)
// });
// app.get('/api/products/:id', (req, res) => {
//     const productId = req.params.id;
//     const product = data.products.find(x=>x._id === productId);
//     if(product)
//         res.send(product);
//     else
//         res.status(404).send({message: 'Product not found'})
// });

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`)
})