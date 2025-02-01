const express = require('express')
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const port = process.env.PORT || 5050;
require('dotenv').config()

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173/'],
    credentials: true
}));

//Ny9yhTA4FLkaxZQH
// pramithmdo

// routes
const bookRoutes = require('./src/books/book.route');
app.use('/api/books', bookRoutes);


async function main() {
    await mongoose.connect(process.env.DB_URL);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })
}

main().then(() => console.log("Mongodb connected.")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
