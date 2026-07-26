function renderProductCard(product) {
    return `
        <div class="col-lg-3 col-md-6">
            <article class="product-card">
                <div class="position-relative">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.badge ? `<span class="badge bg-warning text-dark position-absolute top-0 start-0 m-2">${product.badge}</span>` : ""}
                </div>
                <div><h5>${product.name}</h5><p>${formatPrice(product.price)}</p></div>
                <div class="p-3 pt-0">
                    <a href="addorder.html?id=${product.id}" class="btn btn-success w-100 mb-2"><i class="fas fa-shopping-cart"></i> Continue Order</a>
                    <a href="product-details.html?id=${product.id}" class="btn btn-gold w-100">Quick View</a>
                </div>
            </article>
        </div>`;
}

function renderCollection() {
    const productList = document.getElementById("productList");
    if (productList) productList.innerHTML = products.map(renderProductCard).join("");
}

function renderSizeDetails(size) {
    const sizeCharts = window.sizeCharts || {};
    const selectedSize = sizeCharts[size] || sizeCharts.L;

    return `
        <div class="mt-4 p-3 rounded border border-secondary">
            <h6 class=" mb-3">${selectedSize.title}</h6>
            <div class="small">
                ${selectedSize.measurements.map(item => `<div class="mb-1">${item.label}:- ${item.value}</div>`).join("")}
            </div>
        </div>`;
}

function renderProductDetails() {
    const detailsContainer = document.getElementById("productDetails");
    if (!detailsContainer) return;

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const product = products.find(p => p.id == id);
    const relatedProducts = document.getElementById("relatedProducts");

    if (!product) {
        document.title = "Product Not Found | Ghazaal Exclusive Abaya";
        detailsContainer.innerHTML = `<div class="col-12 text-center"><h1>Product not found</h1><p>The product you selected is unavailable.</p><a href="collection.html" class="btn btn-gold">Back To Collection</a></div>`;
        relatedProducts?.closest("section").classList.add("d-none");
        return;
    }

    document.title = `${product.name} | Ghazaal Exclusive Abaya`;
    detailsContainer.innerHTML = `
        <div class="col-lg-6"><img src="${product.image}" class="img-fluid rounded shadow-lg" alt="${product.name}"></div>
        <div class="col-lg-6">
            ${product.badge ? `<span class="badge bg-warning text-dark mb-3">${product.badge}</span>` : ""}
            <h1 class="mb-3">${product.name}</h1><h2 style="color:#b18e1e;">${formatPrice(product.price)}</h2>
            <p>${product.description}</p><hr><h5>Fabric Details</h5><ul>${product.fabricDetails.map(detail => `<li>${detail}</li>`).join("")}</ul><hr>
            <h5>Select Size</h5><div class="mb-4" id="sizeOptions">${["L", "XL", "XXL"].map(size => `<button type="button" class="btn btn-outline-light me-2 mb-2" data-size="${size}">${size}</button>`).join("")}</div>
            <div id="sizeDetails"></div>
            <a id="continueOrder" href="addorder.html?id=${product.id}" class="btn btn-success btn-lg me-3 mt-3"><i class="fas fa-shopping-cart"></i> Continue Order</a>
            <a href="collection.html" class="btn btn-gold btn-lg mt-3">Back To Collection</a>
        </div>`;

    let selectedSize = "";
    const continueOrder = document.getElementById("continueOrder");

    const updateSizeSelection = (size) => {
        selectedSize = size;
        document.querySelectorAll("[data-size]").forEach(item => item.classList.toggle("active", item.dataset.size === selectedSize));
        document.getElementById("sizeDetails").innerHTML = renderSizeDetails(selectedSize);

        // Keep the selected size in the order-page URL so it can be pre-filled there.
        continueOrder.href = `addorder.html?id=${encodeURIComponent(product.id)}&size=${encodeURIComponent(selectedSize)}`;
    };

    document.querySelectorAll("[data-size]").forEach(button => button.addEventListener("click", () => {
        updateSizeSelection(button.dataset.size);
    }));

    continueOrder.addEventListener("click", (event) => {
        if (!selectedSize) {
            event.preventDefault();
            window.alert("Please select a size before continuing your order.");
        }
    });

    if (relatedProducts) {
        relatedProducts.innerHTML = products.filter(item => item.id !== product.id).map(renderProductCard).join("");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderCollection();
    renderProductDetails();
});
