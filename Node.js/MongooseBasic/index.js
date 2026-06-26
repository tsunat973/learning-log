const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'コネクションエラーーー！！！'));
db.once('open', function () {
    console.log('接続OK!!!');
});

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    Score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

// Movie.insertMany([
//     {
//         title: 'Amadeus',
//         year: 1984,
//         score: 9.2,
//         rating: 'R'
//     },
//     {
//         title: 'The Dark Knight',
//         year: 2008,
//         score: 9.0,
//         rating: 'PG-13'
//     },
//     {
//         title: 'Inception',
//         year: 2010,
//         score: 8.8,
//         rating: 'PG-13'
//     },
//     {
//         title: 'Interstellar',
//         year: 2014,
//         score: 8.7,
//         rating: 'PG-13'
//     },
//     {
//         title: 'Spirited Away',
//         year: 2001,
//         score: 8.6,
//         rating: 'PG'
//     }
// ]).then(data => {
//     console.log('成功');
//     console.log(data);
// });