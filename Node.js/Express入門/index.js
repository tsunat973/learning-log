const express = require('express');
const app = express();

// app.use((req, res) => {
// console.log('リクエストを受け付けました');
// // res.send('リクエストを受けたので、レスポンスを返します！！');
// res.send({color: 'red'});
// })


app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send( `<h1>「${q}」の検索結果</h1>`);
});
app.get('/cats', (req, res) => {
    res.send('にゃー');
});

app.post('/cats', (req, res) => {
    res.send('にゃーPOST');
});

app.get('/dogs', (req, res) => {
res.send('いっぬ');
});

app.get('/', (req,res) => {
    res.send('ここはほむぺーじですよーん');
});
// app.get(/(.*)/, (req, res) => {
//     res.send('はてなー');
// });
app.listen(8080, () => {
    console.log('リクエストをポート3000で待ち受け中');
});