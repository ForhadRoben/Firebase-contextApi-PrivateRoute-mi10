const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('server is running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', async (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedNews = await news.find(n => n._id === id)
    res.send(selectedNews)
})

app.get('/categories/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    if (id === 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) == id);
        // const categoryNews = news.filter(n => n.category_id !== id);
        // console.log(categoryNews);
        res.send(categoryNews)
    }

})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})