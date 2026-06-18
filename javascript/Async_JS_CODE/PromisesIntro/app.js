// コールバック版
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('コネクションタイムアウト')
        } else {
            success(`ダミーデータ(${url})`)
        }
    }, delay)
}
// Promise版
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('コネクションタイムアウト')
            } else {
                resolve(`ダミーデータ(${url})`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com', function (response) {
//     console.log('成功！！');
//     console.log(response);
//     fakeRequestCallback('books.com', function (response) {
//         console.log('成功！！');
//         console.log(response);
//     }, function (err) {
//         console.log('エラー！！！', err)
//     })
// }, function (err) {
//     console.log('エラー！！！', err)
// })

// const request = fakeRequestPromise('yelp.com/api/coffe');
// request.then(() => {
//     console.log('成功!!');
// }).catch(() => {
//     console.log('失敗');
// })

//違うpromiseの書き方

// fakeRequestPromise('yelp.com/api/unko')
//     .then(() => {
//         console.log('成功！！！');
//         fakeRequestPromise('yelp.com/api/unko2')
//             .then(() => {
//                 console.log('成功2！！！');
//             })
//             .catch(() => {
//                 console.log('失敗2！！！');
//             })
//     })
//     .catch(() => {
//         console.log('失敗！！！');
//     })

fakeRequestPromise('yelp.com/api/unko1')
    .then((data) => {
        console.log('成功1！！！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/unko2')
    })
    .then((data) => {
        console.log('成功2！！！');
        console.log(data);
        return fakeRequestPromise('yelp.com/api/unko3')
    })
    .then((data) => {
        console.log('成功3！！！');
        console.log(data);
    })
    .catch((err) => {
        console.log('失敗！！！');
        console.log(err);
    })

    //一番目
    setTimeout(() => {
        console.log('こんにちは')
    }, 3000)