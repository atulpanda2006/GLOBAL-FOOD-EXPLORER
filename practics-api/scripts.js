let container = document.getElementById("container");
let cartContainer = document.getElementById("cart");
let cartItems = []; 

async function getData(){
    const responce = await fetch("https://fakestoreapi.com/products");
    const data = await responce.json();
    return data ;
}

async function showData(){
    
    let data = await getData();
    if(sort.value == "asc") data.sort((a,b) => a.price - b.price);
    else if(sort.value == "desc") data.sort((a,b) => b.price - a.price);

    data.forEach(element => {
        let itemDiv = document.createElement("div");
        itemDiv.className = "item";

        let id = document.createElement("h2")
        id.innerText = "ID: "+element.id;

        let title = document.createElement("h4")
        title.innerText = "Title: "+element.title;

        let price = document.createElement("h4")
        price.innerText = "Price: "+element.price;

        let image = document.createElement("img")
        image.src = element.image ;

        let addToCart = document.createElement("button");
        addToCart.innerText = "Add to cart";

        addToCart.addEventListener("click" , () => {
            cartItems.push(element);
            displayCart();
        });

        itemDiv.append(id,title,price,image,addToCart); 
        container.append(itemDiv);
    });
}

function displayCart(){
    cartContainer.innerHTML = "<h2>Cart</h2>";

    cartItems.forEach((item, index) => {
        let div = document.createElement("div");

        let title = document.createElement("p");
        title.innerText = item.title;

        let price = document.createElement("p");
        price.innerText = "Price: " + item.price;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", () => {
            cartItems.splice(index, 1);
            displayCart();
        });

        div.append(title, price, deleteBtn);
        cartContainer.append(div);
    });
}

showData();

let sort = document.getElementById("sort");
sort.addEventListener("change" , async ()=>{
    container.innerHTML = "";
    showData();
})