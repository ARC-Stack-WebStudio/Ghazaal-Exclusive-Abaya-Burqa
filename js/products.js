/* Shared product catalogue used by collection.html and product-details.html. */
const products = [
    { id: 1, name: "Luxury Dubai Abaya", price: 2999, image: "https://images.pexels.com/photos/29273203/pexels-photo-29273203.jpeg", badge: "NEW", description: "Premium Dubai-style Abaya crafted with elegant fabric, luxury finishing and a modern Islamic fashion design. Perfect for casual wear, events and special occasions.", fabricDetails: ["Nida Fabric", "Premium Imported Material", "Soft & Comfortable", "Wrinkle Resistant"] },
    { id: 2, name: "Party Wear Abaya", price: 3499, image: "https://images.pexels.com/photos/13863599/pexels-photo-13863599.jpeg", badge: "BEST SELLER", description: "An elegant party-wear Abaya with a refined silhouette and premium finish, made to make every special occasion feel graceful.", fabricDetails: ["Premium Nida Fabric", "Elegant Party Finish", "Lightweight & Flowing", "Comfortable All-Day Wear"] },
    { id: 3, name: "Bridal Abaya", price: 4999, image: "https://images.pexels.com/photos/13791268/pexels-photo-13791268.jpeg", description: "A luxurious bridal Abaya designed with timeless elegance, intricate finishing and a graceful drape for your memorable occasions.", fabricDetails: ["Luxury Imported Fabric", "Detailed Bridal Finish", "Soft Inner Lining", "Premium Tailoring"] },
    { id: 4, name: "Premium Burqa", price: 3999, image: "https://images.pexels.com/photos/17833433/pexels-photo-17833433.jpeg", description: "A premium Burqa that balances modesty, comfort and a polished modern look for everyday and occasion wear.", fabricDetails: ["Breathable Premium Fabric", "Comfort-Fit Design", "Durable Stitching", "Easy-Care Material"] }
];

const whatsappNumber = "919769443142";

function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);
}

function getWhatsAppUrl(product, size) {
    const sizeText = size ? ` in size ${size}` : "";
    const message = `I want to order ${product.name} for ${formatPrice(product.price)}${sizeText}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
