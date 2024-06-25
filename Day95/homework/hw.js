const productsContainer = document.querySelector('.products');
const p = document.getElementById('title');
const img = document.getElementById("product-img");
const price = document.getElementById('price');


fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res => res.json())
    .then(data => {
        for(const product of data){
            const html = `
                <div id="${product.id}" class="product">
                    <p id="title">${product.title}</p>
                    <img id="product-img" src="${product.image}" />
                    <p id="price">${product.price}</p>
                </div>
                
            `;
            productsContainer.insertAdjacentHTML('afterbegin', html);
        }
    })
    .catch(err => console.log(err, "My error"))