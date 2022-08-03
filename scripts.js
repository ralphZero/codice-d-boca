const menuElement = document.querySelector('#menu');

fetch('https://codice-boca.web.app/menu')
.then(res => res.json())
.then(items => {
    let html = '';
    items.forEach(item => {
        let htmlSeg = `<div class="menu-item">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>`;
        html += htmlSeg;
    });
    menuElement.innerHTML = html;
}).catch(console.error);