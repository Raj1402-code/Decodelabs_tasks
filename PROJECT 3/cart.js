const cartContainer = document.getElementById("cart-items");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart-count").innerText = cart.length;

function renderCart(){

cartContainer.innerHTML="";

if(cart.length===0){

cartContainer.innerHTML="<h2 class='empty'>Your Cart is Empty 🛒</h2>";

document.getElementById("total-items").innerText=0;

document.getElementById("total-price").innerText=0;

return;

}

let total=0;

cart.forEach((item,index)=>{

total+=item.price*(item.quantity||1);

cartContainer.innerHTML+=`

<div class="cart-item">

<img src="${item.image}">

<div class="cart-info">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<div class="quantity">

<button onclick="decrease(${index})">-</button>

<span>${item.quantity||1}</span>

<button onclick="increase(${index})">+</button>

</div>

</div>

<button class="remove"

onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

document.getElementById("total-items").innerText=cart.length;

document.getElementById("total-price").innerText=total;

}

renderCart();

function increase(index){

if(!cart[index].quantity)

cart[index].quantity=1;

cart[index].quantity++;

save();

}

function decrease(index){

if(!cart[index].quantity)

cart[index].quantity=1;

if(cart[index].quantity>1)

cart[index].quantity--;

save();

}

function removeItem(index){

cart.splice(index,1);

save();

}

function save(){

localStorage.setItem("cart",JSON.stringify(cart));

renderCart();

document.getElementById("cart-count").innerText=cart.length;

}

document.getElementById("checkout").onclick=()=>{

if(cart.length===0){

alert("Your cart is empty!");

return;

}

alert("Order Placed Successfully 🎉");

cart=[];

localStorage.setItem("cart",JSON.stringify(cart));

renderCart();

};

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