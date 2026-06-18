async function hello() {

}

const sing = async () => {
    throw new Error('問題が起きました');
    return 'らららっら';
}

// sing()
// .then((data) => {
//     console.log('成功:', data);
// })

// .catch((err) => {
//     console.log('エラー');
//     console.log(err);

// })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indio', 1000);
    await delayedColorChange('violet', 1000);
}

rainbow();