let allProducts = [];
const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category-filter");

axios
  .get("/api/products")
  .then((response) => {
    allProducts = response.data;
    fetchCategories();
    displayProducts(allProducts);
  })
  .catch((error) => console.error("Error fetching data:", error));

function fetchCategories() {
  axios
    .get("/api/categories")
    .then((response) => {
      populateCategories(response.data);
    })
    .catch((error) => console.error("Error fetching categories:", error));
}

function populateCategories(categories) {
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function displayProducts(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${
      product.title
    }" style="height: 200px; object-fit: contain;">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text fw-bold">$${product.price.toFixed(2)}</p>
        </div>
      </div>
    `;
    productList.appendChild(card);
  });
}

categoryFilter.addEventListener("change", (event) => {
  const selectedCategory = event.target.value;
  if (selectedCategory === "all") {
    displayProducts(allProducts);
  } else {
    axios
      .get(`/api/products/category/${encodeURIComponent(selectedCategory)}`)
      .then((response) => {
        displayProducts(response.data);
      })
      .catch((error) =>
        console.error("Error fetching filtered products:", error)
      );
  }
});
