/* =====================================
   GHAZAAL EXCLUSIVE ABAYA
   MAIN JAVASCRIPT FILE
===================================== */

document.addEventListener("DOMContentLoaded", function () {
    if (window.AOS) {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out"
        });
    }

    const navbar = document.querySelector(".custom-nav");

    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 80) {
                navbar.style.background = "rgba(248,246,242,.96)";
                navbar.style.padding = "10px 0";
                navbar.style.boxShadow = "0 10px 30px rgba(46,43,43,0.08)";
            } else {
                navbar.style.background = "rgba(248,246,242,.78)";
                navbar.style.padding = "15px 0";
                navbar.style.boxShadow = "0 10px 35px rgba(46,43,43,0.04)";
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    document.querySelectorAll(".counter").forEach(counter => {
        counter.innerText = "0";

        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 150;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });

    const reviewCards = document.querySelectorAll(".review-card");
    let reviewIndex = 0;

    function rotateReviews() {
        if (reviewCards.length === 0) return;

        reviewCards.forEach(card => {
            card.style.opacity = "0.72";
            card.style.transform = "scale(0.98)";
        });

        reviewCards[reviewIndex].style.opacity = "1";
        reviewCards[reviewIndex].style.transform = "scale(1)";

        reviewIndex = (reviewIndex + 1) % reviewCards.length;
    }

    rotateReviews();
    setInterval(rotateReviews, 3000);

    const whatsappButton = document.querySelector(".whatsapp-float");

    if (whatsappButton) {
        setInterval(() => {
            whatsappButton.style.transform = "scale(1.12)";

            setTimeout(() => {
                whatsappButton.style.transform = "scale(1)";
            }, 500);
        }, 3000);
    }


     const InstagramButton = document.querySelector(".instagram-float");

    if (InstagramButton) {
        setInterval(() => {
            InstagramButton.style.transform = "scale(1.12)";

            setTimeout(() => {
                InstagramButton.style.transform = "scale(1)";
            }, 500);
        }, 3000);
    }


    const loader = document.getElementById("loader");

    window.addEventListener("load", function () {
        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    });

    const happyCustomer = document.getElementById("happyCustomers");

    if (happyCustomer) {
        let count = 0;
        const target = 1000;

        const timer = setInterval(() => {
            count += 10;
            happyCustomer.innerText = count + "+";

            if (count >= target) {
                happyCustomer.innerText = "1000+";
                clearInterval(timer);
            }
        }, 20);
    }

    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            alert(
                "Thank you for contacting Ghazaal Exclusive Abaya.\n\nWe will contact you soon."
            );

            contactForm.reset();
        });
    }

    document.querySelectorAll(".current-year").forEach(item => {
        item.textContent = new Date().getFullYear();
    });

    const backToTop = document.createElement("button");
    backToTop.innerHTML = "&uarr;";
    backToTop.id = "backToTop";
    backToTop.setAttribute("aria-label", "Back to top");

    document.body.appendChild(backToTop);

    backToTop.style.position = "fixed";
    backToTop.style.bottom = "100px";
    backToTop.style.right = "25px";
    backToTop.style.width = "50px";
    backToTop.style.height = "50px";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.background = "#D5B587";
    backToTop.style.color = "#FFFFFF";
    backToTop.style.fontSize = "22px";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "9999";

    window.addEventListener("scroll", function () {
        backToTop.style.display = window.scrollY > 400 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
