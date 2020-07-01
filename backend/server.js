import express from 'express';
import data from './../data'
const app = express();
const PORT = 5000 || process.env.PORT;
app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`)
})