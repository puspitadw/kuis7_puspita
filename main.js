const products = [
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
    {
        name: 'Jam Tangan',
        image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-24445376/br-m036969-08198_skmei-jam-tangan-digital-pria-1630_full01.jpg",
        price: "Rp. 100000",
        desc: [
            'bnlkjhghjklllkjhkjh',
            'oiuytrewertyuiokjhb',
            'oiugfghjk87ytresdfg',
        ]
    },
]
function card(product) {
    let content = document.querySelector('.content');
    let figure = document.createElement('figure');
    let figcaption = document.createElement('figcaption');
    let img = document.createElement('img');
    img.src = product.image;
    let h1 = document.createElement('h1');
    h1.textContent = product.name;
    let h2 = document.createElement('h2');
    h2.textContent = product.price;
    let ul = document.createElement('ul');
    product.desc.map((d) => {
        let li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
    })
    let button1 = document.createElement('button');
    button1.textContent = "Beli sekarang";
    button1.addEventListener('click', () => {
        confirm('Apakah anda yakin ingin beli produk ini?');
    })
    let button2 = document.createElement('button');
    button2.textContent = "Like";
    button2.addEventListener('click', () => {
        alert('anda menyukai produk ini');
    })
    let button3 = document.createElement('button');
    button3.textContent = "Coment";
    button3.addEventListener('click', () => {
        prompt("Silahkan isi komentar anda");
    })
    figcaption.appendChild(h1);
    figcaption.appendChild(ul);
    figcaption.appendChild(h2);
    figcaption.appendChild(button1);
    figcaption.appendChild(button2);
    figcaption.appendChild(button3);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    content.appendChild(figure);
}
products.map((product) => {
    card(product);
})
