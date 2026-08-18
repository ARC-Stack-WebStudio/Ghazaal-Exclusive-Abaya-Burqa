/* Featured product offer popup for the home page. Change this ID to feature another catalogue item. */
(function () {
    const FEATURED_PRODUCT_ID = 1;
    const modal = document.getElementById("featuredProductModal");

    if (!modal || typeof products === "undefined") return;

    const product = products.find(item => item.id === FEATURED_PRODUCT_ID);
    if (!product) return;

    const image = document.getElementById("featuredProductImage");
    const name = document.getElementById("featuredProductName");
    const description = document.getElementById("featuredProductDescription");
    const price = document.getElementById("featuredProductPrice");
    const orderLink = document.getElementById("featuredContinueOrder");
    const quickView = document.getElementById("featuredQuickView");
    const closeButton = modal.querySelector("[data-featured-close]");
    let lastFocusedElement;

    image.src = product.image;
    image.alt = product.name;
    name.textContent = product.name;
    description.textContent = product.description;
    price.textContent = typeof formatPrice === "function" ? formatPrice(product.price) : `₹${product.price}`;
    orderLink.href = `addorder.html?id=${encodeURIComponent(product.id)}`;

    function closeModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("featured-product-modal-open");
        if (lastFocusedElement) lastFocusedElement.focus();
    }

    function openModal() {
        lastFocusedElement = document.activeElement;
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("featured-product-modal-open");
        closeButton.focus();
    }

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", event => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
    quickView.addEventListener("click", () => {
        window.location.href = `product-details.html?id=${encodeURIComponent(product.id)}`;
    });

    window.setTimeout(openModal, 500);
}());
