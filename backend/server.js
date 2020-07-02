import express from 'express';
import data from './data'
const app = express();
const PORT = 5000 || process.env.PORT;

app.get('/api/products', (req, res) => {
    res.send(data.products)
});
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
        res.send(product);
    else
        res.status(404).send({message: 'Product not found'})
});

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`)
})