/* Shared product catalogue used by collection.html and product-details.html. */
const products = [
    { id: 1, name: "Luxury Dubai Abaya", price: 2999, image: "./Clean Img/green1 (2).png", badge: "NEW", description: "Premium Dubai-style Abaya crafted with elegant fabric, luxury finishing and a modern Islamic fashion design. Perfect for casual wear, events and special occasions.", fabricDetails: ["Nida Fabric", "Premium Imported Material", "Soft & Comfortable", "Wrinkle Resistant"] },
    { id: 2, name: "Party Wear Abaya", price: 3499, image: "./Clean Img/blue1 (4).png", badge: "BEST SELLER", description: "An elegant party-wear Abaya with a refined silhouette and premium finish, made to make every special occasion feel graceful.", fabricDetails: ["Premium Nida Fabric", "Elegant Party Finish", "Lightweight & Flowing", "Comfortable All-Day Wear"] },
    { id: 3, name: "Bridal Abaya", price: 4999, image: "./Clean Img/black1 (2).png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 4, name: "Premium Burqa", price: 3999, image: "./Clean Img/black&white.png", description: "A premium Burqa that balances modesty, comfort and a polished modern look for everyday and occasion wear.", fabricDetails: ["Breathable Premium Fabric", "Comfort-Fit Design", "Durable Stitching", "Easy-Care Material"] }
];

const whatsappNumber = "919769443142";

const sizeCharts = {
    L: {
        title: "L SIZE",
        measurements: [
            { label: "Length", value: "54 TO 56" },
            { label: "Shoulder", value: "15 TO 16" },
            { label: "Sleeves", value: "23" },
            { label: "Chest", value: "40 TO 46" },
            { label: "West", value: "38 TO 44" },
            { label: "Hip", value: "46 TO 52" }
        ]
    },
    XL: {
        title: "XL SIZE",
        measurements: [
            { label: "Length", value: "56 TO 58" },
            { label: "Shoulder", value: "17 TO 18" },
            { label: "Sleeves", value: "22 TO 24" },
            { label: "Chest", value: "48 TO 54" },
            { label: "West", value: "48 TO 54" },
            { label: "Hip", value: "54 TO 60" }
        ]
    },
    XXL: {
        title: "XXL SIZE",
        measurements: [
            { label: "Length", value: "58" },
            { label: "Shoulder", value: "20" },
            { label: "Sleeves", value: "24" },
            { label: "Chest", value: "58" },
            { label: "West", value: "58" },
            { label: "Hip", value: "64" }
        ]
    }
};

window.sizeCharts = sizeCharts;

function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);
}

function getWhatsAppUrl(product, size) {
    let message = `I want to order ${product.name} for ${formatPrice(product.price)}`;

    if (size) {
        message += ` in size ${size}`;

        const selectedSize = sizeCharts[size];
        if (selectedSize) {
            const measurementsText = selectedSize.measurements
                .map(item => `${item.label}:- ${item.value}`)
                .join("\n");

            message += `\n\n${selectedSize.title}\n${measurementsText}`;
        }
    }

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
