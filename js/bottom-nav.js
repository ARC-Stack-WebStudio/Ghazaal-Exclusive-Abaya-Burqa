/* Reusable mobile-only navigation injected once on every page. */
(function () {
    const renderBottomNavigation = () => {
        if (document.querySelector(".mobile-bottom-nav")) return;

        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navigationPage = ["product-details.html", "addorder.html"].includes(currentPage) ? "collection.html" : currentPage;
        const links = [
            { label: "Home", icon: "fa-solid fa-house", href: "index.html", page: "index.html" },
            { label: "Collection", icon: "fa-solid fa-bag-shopping", href: "collection.html", page: "collection.html" },
            { label: "Contact", icon: "fa-solid fa-phone", href: "contact.html", page: "contact.html" },
            { label: "Visit Store", icon: "fa-solid fa-location-dot", href: "https://www.google.com/maps/search/?api=1&query=Ghazaal%20Exclusive%20Abaya%20Bhiwandi", external: true },
            { label: "WhatsApp", icon: "fa-brands fa-whatsapp", href: "https://wa.me/919769443142", external: true }
        ];
        const activeIndex = Math.max(0, links.findIndex((link) => link.page === navigationPage));
        const nav = document.createElement("nav");

        nav.className = "mobile-bottom-nav";
        nav.setAttribute("aria-label", "Mobile navigation");
        nav.style.setProperty("--active-index", activeIndex);
        nav.innerHTML = `<span class="mobile-bottom-nav__indicator" aria-hidden="true"></span>${links.map((link, index) => `
            <a class="mobile-bottom-nav__item${index === activeIndex && link.page ? " is-active" : ""}" href="${link.href}" aria-label="${link.label}"${index === activeIndex && link.page ? ' aria-current="page"' : ""}${link.external ? ' target="_blank" rel="noopener"' : ""}>
                <i class="${link.icon}" aria-hidden="true"></i><span>${link.label}</span>
            </a>`).join("")}`;

        nav.querySelectorAll(".mobile-bottom-nav__item").forEach((item) => {
            item.addEventListener("pointerdown", () => {
                item.classList.add("is-tapped");
                window.setTimeout(() => item.classList.remove("is-tapped"), 220);
            });
        });
        document.body.appendChild(nav);
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderBottomNavigation);
    } else {
        renderBottomNavigation();
    }
})();
