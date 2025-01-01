let search = document.getElementById("search")
let productlist = document.getElementById("productlist");

let getData = async () => {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    showdata(data.products);
    filterbySearch(data.products);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

function showdata(productData) {
  productlist.innerHTML = "";
  productData.forEach((product) => {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.src = product.images[0];
    image.style.width = "100px";

    let title = document.createElement("p");
    title.innerHTML = `${product.title}`;

    let price = document.createElement("p");
    price.innerHTML = `Price : ${product.price}`;

    let rating = document.createElement("p");
    rating.innerHTML = `Rating : ${product.rating}`;

    div.append(image, title, price, rating);
    productlist.append(div);
  });
}

function filterbySearch(products){
search.addEventListener("input" , function(){
    let searchValue = search.value.toLowerCase()
console.log(searchValue)
    let filterProducts = products.filter((product)=>{
      return product.title.toLowerCase().includes(searchValue)
    })
    showdata(filterProducts)
})
}

getData();
