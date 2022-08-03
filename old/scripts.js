console.log('this is working');

const car = {
    brand: 'Tesla',
    notAwesome: true,
    overRated: 'true',
    savesGas: true,
    pros: ['tech', 'battery', 'interior'],
};

// grab p1 id

// change the tezt inside via JS

const p1 = document.getElementById('p1');

p1.innerText = 'Hey Class!!';
p1.innerHTML = '<a href="">Hello Class!!<a/>';

const btn = document.getElementById('myBtn');
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'cyan'];

btn.addEventListener('click', () => {
    const random = Math.floor(Math.floor(Math.random() * colors.length));
    console.log(random);
    p1.style.backgroundColor = colors[random];
});

const fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click', (e) => {
    fetch('https://codice-boca.web.app/menu')
    .then(res => res.json())
    .then(console.log)
});