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
  // CARREGAR OS DETALHES
</div>`;
}

//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
function loadDetails(product) {
  let details = `<section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">nyx</div>
        </div>
      </div><div class="details-row">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">10.49</div>
        </div>
      </div><div class="details-row">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">5</div>
        </div>
      </div><div class="details-row">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250"></div>
        </div>
      </div><div class="details-row">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">bronzer</div>
        </div>
      </div></section>`;
}


Array.prototype.uniq = function () {
 return this.filter(function(value, index, self) {
   return self.indexOf(value) === index;
 });
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};