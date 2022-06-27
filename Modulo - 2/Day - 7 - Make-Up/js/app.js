( async function  () {
   const response = await fetch('data/products.json');
   const data = await response.json(); 

   console.log(data);
}
)();


function productItem(product) {
  const item = `<div class="product" data-name="${product.name}" data-brand="${product.brand}" data-type="${product.product_type}" tabindex="${product.id}">
  <figure class="product-figure">
    <img src="${product.image_link}" width="215" height="215" alt="${product.name}" onerror="javascript:this.src='img/unavailable.png'">
  </figure>
  <section class="product-description">
    <h1 class="product-name">${product.name}</h1>
    <div class="product-brands"><span class="product-brand background-brand">${product.brand}</span>
<span class="product-brand background-price">R$ ${(parseFloat(product.price) * 5.5).toFixed(2)}</span></div>
  </section>
   ${loadDetails(product)}
  <section class="product-details">
   
  </section>

</div>`;
}

//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
function loadDetails(product) {

  let datails = ["brand" , "price", "product_type", "category", "rating"];

  Object.entries(product).filter(([name, value]) => datails.includes(name)).map(([name, value]) => {

    `<div class="details-row">
        <div>${name}</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${value}</div>
        </div>
      </div>
     `;

  }).join("");

  
  
}




Array.prototype.uniq = function () {
 return this.filter(function(value, index, self) {
   return self.indexOf(value) === index;
 });
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};