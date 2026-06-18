const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', () => {
    const newColor = makeRandomColor();
    console.log('ajlkdjas');
    // document.body.style.backgroundColor = 'olive';


    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;

});

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
// rgn(255,1,22);
    return `rgb(${r}, ${g}, ${b})`;
}