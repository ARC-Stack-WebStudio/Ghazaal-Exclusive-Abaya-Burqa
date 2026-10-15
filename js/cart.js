(function () {
    const storageKey = "ghazaal-exclusive-abaya-cart";

    const getItems = () => {
        const savedCart = localStorage.getItem(storageKey);
        if (!savedCart) return [];

        const items = JSON.parse(savedCart);
        if (!Array.isArray(items)) {
            throw new Error("The saved cart data is invalid.");
        }

        return items.map((item) => {
            const product = products.find((entry) => String(entry.id) === String(item.productId));
            if (!product || !item.lineId || typeof item.size !== "string" ||
                !Number.isInteger(item.quantity) || item.quantity < 1) {
                throw new Error("A saved cart item is incomplete. Please clear your browser cart and try again.");
            }

            return {
                lineId: item.lineId,
                productId: product.id,
                name: item.name,
                image: item.image,
                price: item.price,
                category: item.category,
                fabricDetails: item.fabricDetails,
                size: item.size,
                quantity: item.quantity
            };
        });
    };

    const writeItems = (items) => {
        localStorage.setItem(storageKey, JSON.stringify(items));
        document.dispatchEvent(new CustomEvent("ghazaal-cart-updated"));
        refreshCount();
    };

    const addItem = (product, size, quantity) => {
        const items = getItems();
        const lineId = window.crypto && typeof window.crypto.randomUUID === "function"
            ? window.crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

        items.push({
            lineId,
            productId: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            category: product.category || "",
            fabricDetails: Array.isArray(product.fabricDetails) ? product.fabricDetails.slice() : [],
            size,
            quantity
        });
        writeItems(items);
    };

    const removeItem = (lineId) => {
        writeItems(getItems().filter((item) => item.lineId !== lineId));
    };

    const clear = () => writeItems([]);

    const refreshCount = () => {
        const countElement = document.querySelector("[data-cart-count]");
        if (!countElement) return;

        try {
            const count = getItems().reduce((total, item) => total + item.quantity, 0);
            countElement.textContent = String(count);
            countElement.closest("[data-cart-link]")?.setAttribute("aria-label", `Cart, ${count} items`);
        } catch (error) {
            countElement.textContent = "!";
            countElement.closest("[data-cart-link]")?.setAttribute("aria-label", "Cart unavailable");
            console.error("Unable to read the saved cart.", error);
        }
    };

    window.GhazaalCart = Object.freeze({ getItems, addItem, removeItem, clear, refreshCount });
    document.addEventListener("ghazaal-cart-updated", refreshCount);
    window.addEventListener("storage", (event) => {
        if (event.key === storageKey) refreshCount();
    });
    refreshCount();
})();
