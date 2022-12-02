const filterBrand = document.getElementById("filter-brand");
const filterType = document.getElementById("filter-type");
const filterName = document.getElementById("filter-name");
const comboSort = document.getElementById("sort-type");

let productBrands = [];
let productTypes = [];
let products = "";

(async () => {
  let response = await fetch("data/products.json");
  loadProducts(await response.json(), comboSort.value);
})();

const productElement = document.querySelector(".catalog");
let productChild = "";

function loadProducts(json, sortType) {
  let view = sortProducts(json, sortType)
    .map((product) => productItem(product))
    .join("");

  productElement.innerHTML = view;

  loadComboOptions(filterBrand, productBrands.uniq().sort());
  loadComboOptions(filterType, productTypes.uniq().sort());

  productChild = Array.from(document.querySelectorAll(".product"));

  products = json;
}

function loadComboOptions(combo, data) {
  data.map((opt) =>
    combo.insertAdjacentHTML("beforeend", `<option>${opt}</option>`)
  );
}

//EXEMPLO DO CÓDIGO PARA UM PRODUTO
function productItem(product) {
  productBrands = productBrands.concat([product.brand]);
  productTypes = productTypes.concat([product.product_type]);

  return `<div class="product" data-name="${product.name}" data-brand="${
    product.brand
  }" data-type="${product.product_type}" tabindex="${product.id}">
  <figure class="product-figure">
    <img src="${product.image_link}" width="215" height="215" alt="${
    product.name
  }" onerror="javascript:this.src='img/unavailable.png'">
  </figure>
  <section class="product-description">
    <h1 class="product-name">${product.name}</h1>
    <div class="product-brands"><span class="product-brand background-brand">${
      product.brand
    }</span>
<span class="product-brand background-price">R$ ${(
    parseFloat(product.price) * 5.5
  ).toFixed(2)}</span></div>
  </section>
  <section class="product-details">
  ${loadDetails(product)}
  </section>
</div>`;
}

//EXEMPLO DO CÓDIGO PARA OS DETALHES DE UM PRODUTO
function loadDetails(product) {
  let details = ["brand", "price", "product_type", "category", "rating"];

  return Object.entries(product)
    .filter(([name, value]) => details.includes(name))
    .map(([name, value]) => {
      return `<div class="details-row">
       <div>${name}</div>
       <div class="details-bar">
         <div class="details-bar-bg" style="width= 250">${value}</div>
       </div>
     </div>`;
    })
    .join("");
}

function sortProducts(products, sortType) {
  switch (sortType) {
    case "Melhores Avaliados":
      return products.sort((a, b) =>
        a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
      );
    case "Menores Preços":
      return products.sort((a, b) =>
        parseFloat(a.price) > parseFloat(b.price)
          ? 1
          : parseFloat(a.price) < parseFloat(b.price)
          ? -1
          : 0
      );
    case "Maiores Preços":
      return products.sort((a, b) =>
        parseFloat(a.price) > parseFloat(b.price)
          ? -1
          : parseFloat(a.price) < parseFloat(b.price)
          ? 1
          : 0
      );
    case "A-Z":
      return products.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
    case "Z-A":
      return products.sort((a, b) =>
        a.name > b.name ? -1 : a.name < b.name ? 1 : 0
      );
  }
}

filterBrand.addEventListener("change", loadFilters);
filterType.addEventListener("change", loadFilters);
filterName.addEventListener("keyup", loadFilters);
comboSort.addEventListener("change", (e) => {
  loadProducts(products, comboSort.value);
  loadFilters();
});

function loadFilters() {
  const name = filterName.value;
  const brand = filterBrand.value;
  const type = filterType.value;

  productChild.forEach((product) => {
    if (validateProduct(product, name, brand, type)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function validateProduct(product, name, brand, type) {
  const search = new RegExp(name, "i");

  const checkName = search.test(product.dataset.name);
  const checkBrand = product.dataset.brand.includes(brand);
  const checkType = product.dataset.type.includes(type);

  return checkName && checkBrand && checkType;
}

Array.prototype.uniq = function () {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
