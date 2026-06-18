const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('hogehoge');
    console.log('クリックした');
}

function scream() {
    console.log('aaaaaa');
    console.log('yayayaya');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function () {
    alert('h1をクリック');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function () {
    alert('クリック！');
});