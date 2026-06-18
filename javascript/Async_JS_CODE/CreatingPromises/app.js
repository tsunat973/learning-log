// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {

//     const rand = Math.random();

//         setTimeout(() => {
//             if(rand < 0.7) {
//                 resolve('ダミーデータです');
//                 return;
//             }
//             reject('コネクションタイムアウト');
//         }, 1000)
//     })
// }

// fakeRequest('/hoge')
//       .then( (data) => {
//         console.log('成功！！！');
//         console.log(data);
//       })

//       .catch((err) => {
//         console.log('エラーーー！', err);
//       })


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);

    });
}

delayedColorChange('red', 1000)
        .then(() => (delayedColorChange('orange', 1000)))
        .then(() => (delayedColorChange('yellow', 1000)))
        .then(() => (delayedColorChange('green', 1000)))
        .then(() => (delayedColorChange('blue', 1000)))
        .then(() => (delayedColorChange('indigo', 1000)))
        .then(() => (delayedColorChange('violet', 1000)))