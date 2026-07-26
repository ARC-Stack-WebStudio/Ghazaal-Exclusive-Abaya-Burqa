(function () {
    const orderPage = document.getElementById("orderPage");
    if (!orderPage) return;

    const urlParams = new URLSearchParams(window.location.search);
    const product = products.find((item) => String(item.id) === urlParams.get("id"));
    if (!product) {
        document.title = "Product Not Found | Ghazaal Exclusive Abaya";
        orderPage.innerHTML = `<div class="col-12 text-center"><h1>Product not found</h1><p>The product you selected is unavailable.</p><a href="collection.html" class="btn btn-gold">Back To Collection</a></div>`;
        return;
    }

    const selectedSize = urlParams.get("size");
    const sizes = product.sizes || ["XS", "S", "M", "L", "XL", "XXL", "3XL"];
    const fabric = product.fabricDetails.join(", ");
    const category = product.category || (product.name.toLowerCase().includes("burqa") ? "Burqa" : "Abaya");
    const cityData = {
        ahmedabad: { city: "Ahmedabad", state: "Gujarat", pincode: "380001", pincodes: ["380001", "380015", "380054"] },
        aurangabad: { city: "Aurangabad", state: "Maharashtra", pincode: "431001", pincodes: ["431001", "431005", "431136"] },
        bengaluru: { city: "Bengaluru", state: "Karnataka", pincode: "560001", pincodes: ["560001", "560002", "560004"] },
        bhiwandi: { city: "Bhiwandi", state: "Maharashtra", pincode: "421302", pincodes: ["421302", "421305", "421308"] },
        chennai: { city: "Chennai", state: "Tamil Nadu", pincode: "600001", pincodes: ["600001", "600002", "600003"] },
        hyderabad: { city: "Hyderabad", state: "Telangana", pincode: "500001", pincodes: ["500001", "500002", "500003"] },
        jaipur: { city: "Jaipur", state: "Rajasthan", pincode: "302001", pincodes: ["302001", "302002", "302003"] },
        lucknow: { city: "Lucknow", state: "Uttar Pradesh", pincode: "226001", pincodes: ["226001", "226003", "226010"] },
        mumbai: { city: "Mumbai", state: "Maharashtra", pincode: "400001", pincodes: ["400001", "400002", "400003"] },
        nagpur: { city: "Nagpur", state: "Maharashtra", pincode: "440001", pincodes: ["440001", "440002", "440003"] },
        pune: { city: "Pune", state: "Maharashtra", pincode: "411001", pincodes: ["411001", "411004"] },
        surat: { city: "Surat", state: "Gujarat", pincode: "395003", pincodes: ["395003", "395007", "395009"] }
    };
    const indianStates = [
        "Andaman & Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli and Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];
    const formatPrice = (price) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);
    const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));

    document.title = `Order ${product.name} | Ghazaal Exclusive Abaya`;
    orderPage.innerHTML = `
        <div class="col-lg-5"><div class="contact-form h-100">
            <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" class="img-fluid rounded mb-3" style="max-height:500px; width:100%; object-fit:cover;">
            ${product.badge ? `<span class="badge bg-warning text-dark align-self-start">${escapeHtml(product.badge)}</span>` : ""}
            <h1 class="mb-0">${escapeHtml(product.name)}</h1><h3 style="color:#b18e1e;">${formatPrice(product.price)}</h3>
            <p class="mb-2">${escapeHtml(product.description)}</p><div class="border-top pt-3 small"><p class="mb-2"><strong>Fabric:</strong> ${escapeHtml(fabric)}</p><p class="mb-0"><strong>Category:</strong> ${escapeHtml(category)}</p></div>
        </div></div>
        <div class="col-lg-7"><form id="orderForm" class="contact-form" novalidate>
            <div><span class="eyebrow">Secure Order Request</span><h2 class="mb-1">Complete Your Order</h2><p class="mb-0">Your product details have been selected. Fill in your delivery details to continue on WhatsApp.</p></div>
            <div class="row g-3">
                <div class="col-md-6"><label for="customerName" class="form-label">Customer Name *</label><input id="customerName" name="customerName" class="form-control" required maxlength="50" autocomplete="name"><div class="invalid-feedback">Name must contain only letters and spaces (3–50 characters).</div></div>
                <div class="col-md-6"><label for="mobile" class="form-label">Mobile Number *</label><input id="mobile" name="mobile" class="form-control" type="tel" required maxlength="14" inputmode="numeric" autocomplete="tel"><div class="invalid-feedback">Please enter a valid 10-digit Indian mobile number.</div></div>
                <div class="col-12"><label for="email" class="form-label">Email <span class="text-muted">(optional)</span></label><input id="email" name="email" class="form-control" type="email" autocomplete="email"><div class="invalid-feedback">Please enter a valid email address.</div></div>
                <div class="col-md-6"><label for="house" class="form-label">House / Flat Number *</label><input id="house" name="house" class="form-control" required autocomplete="address-line1"><div class="invalid-feedback">Use letters, numbers, spaces, hyphens, or forward slashes only.</div></div>
                <div class="col-md-6"><label for="street" class="form-label">Street *</label><input id="street" name="street" class="form-control" required><div class="invalid-feedback">Street must contain at least 3 characters.</div></div>
                <div class="col-md-6"><label for="area" class="form-label">Area *</label><input id="area" name="area" class="form-control" required><div class="invalid-feedback">Area must contain at least 3 characters.</div></div>
                <div class="col-md-6"><label for="landmark" class="form-label">Landmark</label><input id="landmark" name="landmark" class="form-control"><div class="invalid-feedback">Landmark must contain at least 2 characters.</div></div>
                <div class="col-md-4"><label for="city" class="form-label">City *</label><input id="city" name="city" class="form-control" required autocomplete="address-level2" list="citySuggestions"><datalist id="citySuggestions">${Object.values(cityData).map((item) => `<option value="${item.city}"></option>`).join("")}</datalist><div class="invalid-feedback">City must contain only letters and spaces (at least 2 characters).</div></div>
                <div class="col-md-4"><label for="state" class="form-label">State *</label><input id="state" name="state" class="form-control" required autocomplete="address-level1" list="stateSuggestions"><datalist id="stateSuggestions">${indianStates.map((state) => `<option value="${state}"></option>`).join("")}</datalist><div class="invalid-feedback">Please select a valid Indian state or union territory.</div></div>
                <div class="col-md-4"><label for="pincode" class="form-label">Pincode *</label><input id="pincode" name="pincode" class="form-control" required inputmode="numeric" autocomplete="postal-code" list="pincodeSuggestions"><datalist id="pincodeSuggestions"></datalist><div class="invalid-feedback">Please enter a valid 6-digit pincode.</div></div>
                <div class="col-md-6"><label for="country" class="form-label">Country</label><input id="country" name="country" class="form-control" value="India" autocomplete="country-name"></div>
                <div class="col-md-3"><label for="size" class="form-label">Size *</label><select id="size" name="size" class="form-select form-control" required><option value="">Select size</option>${sizes.map((size) => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`).join("")}</select><div class="invalid-feedback">Please select a size.</div></div>
                <div class="col-md-3"><label for="quantity" class="form-label">Quantity *</label><input id="quantity" name="quantity" class="form-control" type="number" min="1" value="1" required inputmode="numeric"><div class="invalid-feedback">Enter a quantity of at least 1.</div></div>
            </div>
            <div class="d-flex flex-wrap gap-3 pt-2"><button type="submit" class="btn btn-success"><i class="fab fa-whatsapp"></i> Place Order on WhatsApp</button><a href="product-details.html?id=${encodeURIComponent(product.id)}" class="btn btn-gold">Back to Product</a></div>
        </form></div>`;

    const form = document.getElementById("orderForm");
    const fields = Object.fromEntries(["customerName", "mobile", "email", "house", "street", "area", "landmark", "city", "state", "pincode", "size", "quantity"].map((id) => [id, document.getElementById(id)]));
    const country = document.getElementById("country");
    const lockedSize = selectedSize && sizes.includes(selectedSize) ? selectedSize : "";
    const pincodeSuggestions = document.getElementById("pincodeSuggestions");

    // Turns words into title case while retaining spaces between them.
    const toProperCase = (value) => value.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
    // Restores the fixed country prefix and retains only a 10-digit Indian mobile number.
    const formatIndianMobile = (value) => {
        let digits = value.replace(/\D/g, "");
        if (digits.startsWith("91")) digits = digits.slice(2);
        return `+91 ${digits.slice(0, 10)}`;
    };
    // Applies Bootstrap's existing valid/invalid visual states and matching feedback text.
    const setFieldValidity = (field, isValid, message) => {
        field.setCustomValidity(isValid ? "" : message);
        field.classList.toggle("is-invalid", !isValid);
        field.classList.toggle("is-valid", isValid && field.value.trim() !== "");
        const feedback = field.parentElement.querySelector(".invalid-feedback");
        if (feedback && message) feedback.textContent = message;
        return isValid;
    };
    // Finds optional city-specific delivery suggestions without restricting other Indian cities.
    const getCityRecord = () => cityData[fields.city.value.trim().toLowerCase()];
    // Validates one field so real-time checks and submit checks share the same rules.
    const validateField = (field) => {
        const value = field.value.trim();
        let valid = true;
        let message = "";
        switch (field.id) {
            case "customerName": valid = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(value) && value.length >= 3 && value.length <= 50; message = "Name must contain only letters and spaces (3–50 characters)."; break;
            case "mobile": valid = /^\+91 [6-9]\d{9}$/.test(value); message = "Please enter a valid 10-digit Indian mobile number."; break;
            case "email": valid = !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); message = "Please enter a valid email address."; break;
            case "house": valid = /^[A-Za-z0-9\s/-]+$/.test(value); message = "Use letters, numbers, spaces, hyphens, or forward slashes only."; break;
            case "street": case "area": valid = value.length >= 3; message = `${field.id === "street" ? "Street" : "Area"} must contain at least 3 characters.`; break;
            case "landmark": valid = !value || value.length >= 2; message = "Landmark must contain at least 2 characters."; break;
            case "city": valid = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(value) && value.length >= 2; message = "City must contain only letters and spaces (at least 2 characters)."; break;
            case "state": valid = indianStates.includes(value); message = "Please select a valid Indian state or union territory."; break;
            case "pincode": valid = /^\d{6}$/.test(value); message = "Please enter a valid 6-digit pincode."; break;
            case "size": valid = sizes.includes(value); message = "Please select a size."; break;
            case "quantity": valid = Number.isInteger(Number(value)) && Number(value) >= 1; message = "Enter a quantity of at least 1."; break;
            default: valid = field.required ? value.length > 0 : true; message = "This field is required.";
        }
        return setFieldValidity(field, valid, message);
    };
    let lastAutofilledCity = "";
    // Fills editable state and default-pincode values for a recognised city.
    const updateCitySuggestions = () => {
        const city = getCityRecord();
        if (!city) {
            if (lastAutofilledCity) {
                fields.state.value = "";
                fields.pincode.value = "";
                pincodeSuggestions.innerHTML = "";
                [fields.state, fields.pincode].forEach((field) => {
                    field.setCustomValidity("");
                    field.classList.remove("is-valid", "is-invalid");
                });
            }
            lastAutofilledCity = "";
            return;
        }
        fields.city.value = city.city;
        fields.state.value = city.state;
        fields.pincode.value = city.pincode;
        pincodeSuggestions.innerHTML = city.pincodes.map((pincode) => `<option value="${pincode}"></option>`).join("");
        lastAutofilledCity = city.city;
        validateField(fields.state);
        validateField(fields.pincode);
    };

    fields.mobile.value = "+91 ";
    // Keeps the transferred product size visible and read-only without changing its dropdown appearance.
    if (lockedSize) {
        fields.size.value = lockedSize;
        fields.size.setAttribute("aria-readonly", "true");
        ["mousedown", "keydown"].forEach((eventName) => fields.size.addEventListener(eventName, (event) => event.preventDefault()));
        fields.size.addEventListener("change", () => { fields.size.value = lockedSize; validateField(fields.size); });
    }

    let cityLookupTimer;
    // Debounces city lookups to avoid repeated autofill work while the customer is typing.
    const queueCityAutofill = () => {
        clearTimeout(cityLookupTimer);
        cityLookupTimer = setTimeout(updateCitySuggestions, 400);
    };
    [fields.customerName, fields.house, fields.street, fields.area, fields.landmark, fields.city].forEach((field) => field.addEventListener("input", () => {
        if (field.id === "customerName" || field.id === "city") field.value = field.value.replace(/[^a-zA-Z\s]/g, "");
        if (field.id === "house") field.value = field.value.replace(/[^a-zA-Z0-9\s/-]/g, "");
        field.value = toProperCase(field.value);
        if (field.id === "city") queueCityAutofill();
        validateField(field);
    }));
    fields.mobile.addEventListener("input", () => { fields.mobile.value = formatIndianMobile(fields.mobile.value); validateField(fields.mobile); });
    fields.pincode.addEventListener("input", () => { fields.pincode.value = fields.pincode.value.replace(/\D/g, "").slice(0, 6); validateField(fields.pincode); });
    fields.state.addEventListener("input", () => { fields.state.value = toProperCase(fields.state.value); validateField(fields.state); });
    country.addEventListener("input", () => { country.value = toProperCase(country.value); });
    [fields.email, fields.size, fields.quantity].forEach((field) => field.addEventListener("input", () => validateField(field)));
    fields.city.addEventListener("change", () => { clearTimeout(cityLookupTimer); updateCitySuggestions(); validateField(fields.city); });
    fields.city.addEventListener("blur", () => { clearTimeout(cityLookupTimer); updateCitySuggestions(); });
    fields.state.addEventListener("change", () => validateField(fields.state));
    fields.size.addEventListener("change", () => validateField(fields.size));

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        updateCitySuggestions();
        const allValid = Object.values(fields).every(validateField);
        if (!allValid || !form.checkValidity()) {
            form.classList.add("was-validated");
            const firstInvalid = Object.values(fields).find((field) => !field.checkValidity());
            firstInvalid?.scrollIntoView({ behavior: "smooth", block: "center" });
            firstInvalid?.focus({ preventScroll: true });
            return;
        }

        const data = new FormData(form);
        const quantity = Number(data.get("quantity"));
        const message = `🛍️ NEW ORDER\n\n----------------------------------\n\nCustomer Details\n\nName:\n${data.get("customerName")}\n\nMobile:\n${data.get("mobile")}\n\nEmail:\n${data.get("email") || "Not provided"}\n\n----------------------------------\n\nDelivery Address\n\nHouse:\n${data.get("house")}\n\nStreet:\n${data.get("street")}\n\nArea:\n${data.get("area")}\n\nLandmark:\n${data.get("landmark") || "Not provided"}\n\nCity:\n${data.get("city")}\n\nState:\n${data.get("state")}\n\nPincode:\n${data.get("pincode")}\n\nCountry:\n${data.get("country") || "India"}\n\n----------------------------------\n\nProduct Details\n\nProduct:\n${product.name}\n\nPrice:\n₹${product.price}\n\nSize:\n${data.get("size")}\n\nQuantity:\n${quantity}\n\nFabric:\n${fabric}\n\nCategory:\n${category}\n\n----------------------------------\n\nTotal Price\n\n₹ ${product.price * quantity}\n\n----------------------------------\n\nThank You.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
})();
