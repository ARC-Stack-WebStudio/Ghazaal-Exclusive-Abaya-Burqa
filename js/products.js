/* Shared product catalogue used by collection.html and product-details.html. */
const products = [
    { id: 1, name: "Luxury Dubai Abaya", category: "Luxury Dubai Abaya", price: 2999, image: "./Clean Img/green1 (2).png", imagetwo: "./Clean Img/green1 (3).png", imagethree: "./Clean Img/green1.png", badge: "NEW", description: "Premium Dubai-style Abaya crafted with elegant fabric, luxury finishing and a modern Islamic fashion design. Perfect for casual wear, events and special occasions.", fabricDetails: ["Nida Fabric", "Premium Imported Material", "Soft & Comfortable", "Wrinkle Resistant"] },
    { id: 2, name: "Party Wear Abaya", category: "Party Wear Abaya", price: 3499, image: "./Clean Img/blue1 (4).png", imagetwo: "./Clean Img/blue1 (3).png", imagethree: "./Clean Img/blue1 (4).png", badge: "BEST SELLER", description: "An elegant party-wear Abaya with a refined silhouette and premium finish, made to make every special occasion feel graceful.", fabricDetails: ["Premium Nida Fabric", "Elegant Party Finish", "Lightweight & Flowing", "Comfortable All-Day Wear"] },
    { id: 3, name: "Bridal Abaya", category: "Bridal Abaya", price: 4999, image: "./Clean Img/black1 (2).png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 4, name: "Premium Burqa", category: "Premium Burqa", price: 3999, image: "./Clean Img/brown1.png", imagetwo: "./Clean Img/brown1 (2).png", imagethree: "./Clean Img/brown1 (3).png", description: "A premium Burqa that balances modesty, comfort and a polished modern look for everyday and occasion wear.", fabricDetails: ["Breathable Premium Fabric", "Comfort-Fit Design", "Durable Stitching", "Easy-Care Material"] },
    { id: 5, name: "Premium Burqa", category: "Premium Burqa", price: 2999, image: "./Product Img/1 Hijaab.png", imagetwo: "./Clean Img/brown1 (2).png", imagethree: "./Clean Img/brown1 (3).png", description: "A premium Burqa that balances modesty, comfort and a polished modern look for everyday and occasion wear.", fabricDetails: ["Breathable Premium Fabric", "Comfort-Fit Design", "Durable Stitching", "Easy-Care Material"] },
    { id: 6, name: "Bridal Abaya", category: "Bridal Abaya", price: 3999, image: "./Product Img/2 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 7, name: "Party Wear Abaya", category: "Party Wear Abaya", price: 3199, image: "./Product Img/3 Hijaab.png", imagetwo: "./Clean Img/blue1 (3).png", imagethree: "./Clean Img/blue1 (4).png", description: "An elegant party-wear Abaya with a refined silhouette and premium finish, made to make every special occasion feel graceful.", fabricDetails: ["Premium Nida Fabric", "Elegant Party Finish", "Lightweight & Flowing", "Comfortable All-Day Wear"] },
    { id: 8, name: "Party Wear Abaya", category: "Party Wear Abaya", price: 3299, image: "./Product Img/4 Hijaab.png", imagetwo: "./Clean Img/blue1 (3).png", imagethree: "./Clean Img/blue1 (4).png", description: "An elegant party-wear Abaya with a refined silhouette and premium finish, made to make every special occasion feel graceful.", fabricDetails: ["Premium Nida Fabric", "Elegant Party Finish", "Lightweight & Flowing", "Comfortable All-Day Wear"] },
    { id: 9, name: "Premium Burqa", category: "Premium Burqa", price: 2399, image: "./Product Img/5 Hijaab.png", imagetwo: "./Clean Img/brown1 (2).png", imagethree: "./Clean Img/brown1 (3).png", description: "A premium Burqa that balances modesty, comfort and a polished modern look for everyday and occasion wear.", fabricDetails: ["Breathable Premium Fabric", "Comfort-Fit Design", "Durable Stitching", "Easy-Care Material"] },
    { id: 10, name: "Bridal Abaya", category: "Bridal Abaya", price: 3499, image: "./Product Img/6 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 11, name: "Party Wear Abaya", category: "Party Wear Abaya", price: 3399, image: "./Product Img/7 Hijaab.png", imagetwo: "./Clean Img/blue1 (3).png", imagethree: "./Clean Img/blue1 (4).png", description: "An elegant party-wear Abaya with a refined silhouette and premium finish, made to make every special occasion feel graceful.", fabricDetails: ["Premium Nida Fabric", "Elegant Party Finish", "Lightweight & Flowing", "Comfortable All-Day Wear"] },
    { id: 12, name: "Party Wear Abaya", category: "Party Wear Abaya", price: 4299, image: "./Product Img/8 Hijaab.png", imagetwo: "./Clean Img/blue1 (3).png", imagethree: "./Clean Img/blue1 (4).png", description: "An elegant party-wear Abaya with a refined silhouette and premium finish, made to make every special occasion feel graceful.", fabricDetails: ["Premium Nida Fabric", "Elegant Party Finish", "Lightweight & Flowing", "Comfortable All-Day Wear"] },
    { id: 13, name: "Luxury Dubai Abaya", category: "Luxury Dubai Abaya", price: 2399, image: "./Product Img/9 Hijaab.png", imagetwo: "./Clean Img/green1 (3).png", imagethree: "./Clean Img/green1.png", description: "Premium Dubai-style Abaya crafted with elegant fabric, luxury finishing and a modern Islamic fashion design. Perfect for casual wear, events and special occasions.", fabricDetails: ["Nida Fabric", "Premium Imported Material", "Soft & Comfortable", "Wrinkle Resistant"] },
    { id: 14, name: "Luxury Dubai Abaya", category: "Luxury Dubai Abaya", price: 2499, image: "./Product Img/10 Hijaab.png", imagetwo: "./Clean Img/green1 (3).png", imagethree: "./Clean Img/green1.png", description: "Premium Dubai-style Abaya crafted with elegant fabric, luxury finishing and a modern Islamic fashion design. Perfect for casual wear, events and special occasions.", fabricDetails: ["Nida Fabric", "Premium Imported Material", "Soft & Comfortable", "Wrinkle Resistant"] },
    { id: 15, name: "Bridal-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2899, image: "/Product Img/11 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 16, name: "Bridal-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/12 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 17, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/13 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 18, name: "Bridal Abaya", category: "Bridal Abaya", price: 3499, image: "/Product Img/14 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 19, name: "Party Wear Abaya", category: "Party Wear Abaya", price: 3399, image: "./Product Img/15 Hijaab.png", imagetwo: "./Clean Img/blue1 (3).png", imagethree: "./Clean Img/blue1 (4).png", description: "An elegant party-wear Abaya with a refined silhouette and premium finish, made to make every special occasion feel graceful.", fabricDetails: ["Premium Nida Fabric", "Elegant Party Finish", "Lightweight & Flowing", "Comfortable All-Day Wear"] },
    { id: 20, name: "Party Wear Abaya", category: "Party Wear Abaya", price: 4299, image: "./Product Img/16 Hijaab.png", imagetwo: "./Clean Img/blue1 (3).png", imagethree: "./Clean Img/blue1 (4).png", description: "An elegant party-wear Abaya with a refined silhouette and premium finish, made to make every special occasion feel graceful.", fabricDetails: ["Premium Nida Fabric", "Elegant Party Finish", "Lightweight & Flowing", "Comfortable All-Day Wear"] },
    { id: 21, name: "Luxury Dubai Abaya", category: "Luxury Dubai Abaya", price: 2399, image: "./Product Img/17 Hijaab.png", imagetwo: "./Clean Img/green1 (3).png", imagethree: "./Clean Img/green1.png", description: "Premium Dubai-style Abaya crafted with elegant fabric, luxury finishing and a modern Islamic fashion design. Perfect for casual wear, events and special occasions.", fabricDetails: ["Nida Fabric", "Premium Imported Material", "Soft & Comfortable", "Wrinkle Resistant"] },
    { id: 22, name: "Luxury Dubai Abaya", category: "Luxury Dubai Abaya", price: 2499, image: "./Product Img/18 Hijaab.png", imagetwo: "./Clean Img/green1 (3).png", imagethree: "./Clean Img/green1.png", description: "Premium Dubai-style Abaya crafted with elegant fabric, luxury finishing and a modern Islamic fashion design. Perfect for casual wear, events and special occasions.", fabricDetails: ["Nida Fabric", "Premium Imported Material", "Soft & Comfortable", "Wrinkle Resistant"] },
    { id: 23, name: "Bridal-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2899, image: "/Product Img/19 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 24, name: "Bridal-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/20 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 25, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/21 Hijaab.jpeg", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 26, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/22 Hijaab.jpeg", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 27, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/23 Hijaab.jpeg", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 28, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/24 Hijaab.jpeg", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 29, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/25 Hijaab.jpeg", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 30, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/26 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 31, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/27 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 32, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/28 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 33, name: "AVC-Dubai Abaya ", category: "Bridal-Dubai Abaya", price: 2399, image: "/Product Img/29 Hijaab.png", imagetwo: "./Clean Img/black1 (3).png", imagethree: "./Clean Img/black1.png", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] }
    



];

const whatsappNumber = "919769443142";

products.forEach(product => {
    if (!product.category) {
        product.category = product.name;
    }
});

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
