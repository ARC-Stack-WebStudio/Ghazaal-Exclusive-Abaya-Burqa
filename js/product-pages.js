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
                    <a href="${getWhatsAppUrl(product)}" class="btn btn-success w-100 mb-2" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Order Now</a>
                    <a href="product-details.html?id=${product.id}" class="btn btn-gold w-100">Quick View</a>
                </div>
            </article>
        </div>`;
}

function renderCollection() {
    const productList = document.getElementById("productList");
    if (productList) productList.innerHTML = products.map(renderProductCard).join("");
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
            <h1 class="mb-3">${product.name}</h1><h2 style="color:#D4AF37;">${formatPrice(product.price)}</h2>
            <p>${product.description}</p><hr><h5>Fabric Details</h5><ul>${product.fabricDetails.map(detail => `<li>${detail}</li>`).join("")}</ul><hr>
            <h5>Select Size</h5><div class="mb-4" id="sizeOptions">${["S", "M", "L", "XL", "XXL"].map(size => `<button type="button" class="btn btn-outline-light me-2 mb-2" data-size="${size}">${size}</button>`).join("")}</div>
            <a id="whatsAppOrder" href="${getWhatsAppUrl(product)}" class="btn btn-success btn-lg me-3" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Order On WhatsApp</a>
            <a href="collection.html" class="btn btn-gold btn-lg">Back To Collection</a>
        </div>`;

    document.querySelectorAll("[data-size]").forEach(button => button.addEventListener("click", () => {
        document.querySelectorAll("[data-size]").forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        document.getElementById("whatsAppOrder").href = getWhatsAppUrl(product, button.dataset.size);
    }));

    if (relatedProducts) {
        relatedProducts.innerHTML = products.filter(item => item.id !== product.id).map(renderProductCard).join("");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderCollection();
    renderProductDetails();
});
