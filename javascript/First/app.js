console.log('テスト');
console.log('条件分岐の前');

let random = Math.random();
if(random < 0.5){
    console.log(`数字が0.5より小さい`);
} else {
    console.log('0.5より大きい');
}
// console.log(random);
// const dayOfweek = prompt('英語で曜日を入力してください').toLowerCase();

// if(dayOfweek === 'monday') {
//     console.log('月曜日は憂鬱')
// } else if (dayOfweek === 'saturday') {
//     console.log('土曜日は最高');
// } else if (dayOfweek === 'friday') {
//     console.log('仕事が終わってからの花金は最高');
// } else {
//     console.log('はぁ');
// }

const age =8;
if(age < 5){
    console.log('無料になります');
} else if (age < 10){
    console.log('子供料金なので１０００円になります。');
} else if (age < 65){
    console.log('大人料なので2000円になります');
} else {
    console.log('シニア料金なので１０００円です')
}

const password = prompt('パスワードを入力してください');

//パスワードは6文字以上
if(password.length >= 6){
    if (password.indexOf(' ') === -1) {
    console.log('素晴らしいパスワードです。');
} else {
    console.log('パスワードは空白を含んではいけません。')
}
} else {
    console.log('パスワードが短すぎます。6文字以上にしてください。')
}

//パスワードに空白は入れてはいけない
