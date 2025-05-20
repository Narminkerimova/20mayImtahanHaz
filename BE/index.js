import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://narmingkbf206:narmin28311007_@cluster0.etsr5ne.mongodb.net/')
    .then(() => console.log("Connected!"))
    .catch(() => console.log("NOT Connected!"))

const clothingSchema = new mongoose.Schema({
    name: String,
    price:Number,
    image:String
});

const Clothes = mongoose.model('Clothes', clothingSchema);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/clothes/', async (req, res) => {
    const clothes = await Clothes.find()
    res.send(clothes)
})

app.get('/clothes/:id', async (req, res) => {
    const { id } = req.params
    const clothes = await Clothes.findById(id)
    res.send(clothes)
})

app.delete('/clothes/:id', async (req, res) => {
    const { id } = req.params
    const clothes = await Clothes.findByIdAndDelete(id)
    res.send(clothes)
})

app.post('/clothes/', async (req, res) => {
    const { body } = req
    const clothes = await Clothes.create(body)
    res.send(clothes)
})

app.put('/clothes/:id', async (req, res) => {
    const { id } = req.params
    const { body } = req
    const clothes = await Clothes.findByIdAndUpdate(id,body)
    res.send(clothes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})