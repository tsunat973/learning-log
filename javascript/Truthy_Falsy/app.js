// const password = prompt('パスワードを入力してください');

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('素晴らしいパスワードです！');
// } else {
//     console.log('パスワードのフォーマットが無効です。');
// }

// 

// let username = prompt('ユーザー名を入力してください');

// if(!username) {
//     username = prompt('問題が起きました。ユーザー名を入力してください');
// }
const day = 6;

switch(day) {
    case 1:
        console.log('月曜日');
        break;
    case 2:
        console.log('火曜日');
        break;
    case 3:
        console.log('水曜日');
        break;
    case 4:
        console.log('木曜日');
        break;
    case 5:
        console.log('金曜日');
        break;
    case 6:
    case 7:
        console.log('週末です');
        break;
    default:
        console.log('無効な数字です')
}