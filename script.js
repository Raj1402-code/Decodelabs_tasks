const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
);

};

if(localStorage.getItem("theme")=="true"){

document.body.classList.add("dark");

}

const count=document.getElementById("cart-count");

let cart=JSON.parse(localStorage.getItem("cart")) || [];

count.innerText=cart.length;