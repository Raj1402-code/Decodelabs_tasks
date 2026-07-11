const products=[

{
id:1,
name:"Wireless Headphones",
price:2999,
category:"Electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},

{
id:2,
name:"Running Shoes",
price:3999,
category:"Footwear",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},

{
id:3,
name:"Smart Watch",
price:4999,
category:"Electronics",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},

{
id:4,
name:"Backpack",
price:1999,
category:"Accessories",
image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500"
},

{
id:5,
name:"T-Shirt",
price:999,
category:"Fashion",
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
},

{
id:6,
name:"Sunglasses",
price:1499,
category:"Accessories",
image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
}

];

const container=document.getElementById("product-container");
const search=document.getElementById("search");
const category=document.getElementById("category");
const sort=document.getElementById("sort");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

document.getElementById("cart-count").innerText=cart.length;

function display(data){

container.innerHTML="";

data.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p><b>₹${product.price}</b></p>

<p>${product.category}</p>

<button onclick="addToCart(${product.id})">

Add to Cart

</button>

</div>

`;

});

}

display(products);

function addToCart(id){

const item=products.find(p=>p.id===id);

cart.push(item);

localStorage.setItem("cart",JSON.stringify(cart));

document.getElementById("cart-count").innerText=cart.length;

showToast();

}

function showToast(){

const toast=document.getElementById("toast");

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

}

search.addEventListener("keyup",()=>{

const value=search.value.toLowerCase();

const filtered=products.filter(product=>

product.name.toLowerCase().includes(value)

);

display(filtered);

});

category.addEventListener("change",()=>{

if(category.value==="All"){

display(products);

return;

}

display(

products.filter(product=>

product.category===category.value

)

);

});

sort.addEventListener("change",()=>{

let copy=[...products];

if(sort.value==="low"){

copy.sort((a,b)=>a.price-b.price);

}

else if(sort.value==="high"){

copy.sort((a,b)=>b.price-a.price);

}

display(copy);

});

const themeBtn=document.getElementById("themeBtn");

if(localStorage.getItem("theme")=="true"){

document.body.classList.add("dark");

}

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

localStorage.setItem(

"theme",

document.body.classList.contains("dark")

);

};