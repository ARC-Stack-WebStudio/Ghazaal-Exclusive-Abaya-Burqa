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

// Uses product.images when it is added later; current products fall back to three demo slides.
function getProductImages(product) {
    return Array.isArray(product.images) && product.images.length
        ? product.images
        : [product.image, product.image, product.image];
}

function renderProductGallery(product) {
    const images = getProductImages(product);

    return `
        <div class="product-gallery" aria-label="${product.name} image gallery">
            <div class="product-gallery__viewport">
                <div class="product-gallery__track">
                    ${images.map((image, index) => `
                        <div class="product-gallery__slide">
                            <img src="${image}" alt="${product.name} - view ${index + 1}" ${index === 0 ? "" : "loading=\"lazy\""}>
                        </div>`).join("")}
                </div>
                <button class="product-gallery__arrow product-gallery__arrow--previous" type="button" aria-label="Previous image"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>
                <button class="product-gallery__arrow product-gallery__arrow--next" type="button" aria-label="Next image"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>
            </div>
            <div class="product-gallery__dots" role="tablist" aria-label="Choose product image">
                ${images.map((_, index) => `<button class="product-gallery__dot${index === 0 ? " is-active" : ""}" type="button" aria-label="Show image ${index + 1}" aria-selected="${index === 0}" role="tab"></button>`).join("")}
            </div>
        </div>`;
}

function initialiseProductGallery(container) {
    const gallery = container.querySelector(".product-gallery");
    if (!gallery) return;

    const track = gallery.querySelector(".product-gallery__track");
    const slides = gallery.querySelectorAll(".product-gallery__slide");
    const dots = gallery.querySelectorAll(".product-gallery__dot");
    let activeIndex = 0;

    const showSlide = (index) => {
        activeIndex = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${activeIndex * 100}%)`;
        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === activeIndex;
            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-selected", isActive);
        });
    };

    gallery.querySelector(".product-gallery__arrow--previous").addEventListener("click", () => showSlide(activeIndex - 1));
    gallery.querySelector(".product-gallery__arrow--next").addEventListener("click", () => showSlide(activeIndex + 1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
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
        <div class="col-lg-6">${renderProductGallery(product)}</div>
        <div class="col-lg-6">
            ${product.badge ? `<span class="badge bg-warning text-dark mb-3">${product.badge}</span>` : ""}
            <h1 class="mb-3">${product.name}</h1><h2 style="color:#b18e1e;">${formatPrice(product.price)}</h2>
            <p>${product.description}</p><hr><h5>Fabric Details</h5><ul>${product.fabricDetails.map(detail => `<li>${detail}</li>`).join("")}</ul><hr>
            <h5>Select Size</h5><div class="mb-4" id="sizeOptions">${["L", "XL", "XXL"].map(size => `<button type="button" class="btn btn-outline-light me-2 mb-2" data-size="${size}">${size}</button>`).join("")}</div>
            <div id="sizeDetails"></div>
            <a id="continueOrder" href="addorder.html?id=${product.id}" class="btn btn-success btn-lg me-3 mt-3"><i class="fas fa-shopping-cart"></i> Continue Order</a>
            <a href="collection.html" class="btn btn-gold btn-lg mt-3">Back To Collection</a>
        </div>`;

    initialiseProductGallery(detailsContainer);

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
