const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburgerClose");
const navigationLinks = document.getElementById("navigationLinks");
const navLinks = document.querySelectorAll(".navLink");
hamburger.addEventListener("click", () => {
  navigationLinks.style.transform = "translateX(0)";
});
hamburgerClose.addEventListener("click", () => {
  navigationLinks.style.transform = "translateX(100%)";
});
navLinks &&
  window.innerWidth < 1200 &&
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigationLinks.style.transform = "translateX(100%)";
    });
  });
const products = [
  {
    id: 1,
    name: "Single Vendor E-commerce Site (Front-End)",
    price: 150,
    image: "./images/product1.jpeg",
    live: "https://sites.soft-techtechnologyllc.com/singlelandingpage/",
    description:
      "A modern, responsive single-vendor e-commerce front-end designed for small to medium businesses. Built with HTML, CSS, and JavaScript, featuring a dynamic interface and smooth user experience across devices.",
    features: [
      "Responsive and mobile-friendly layout",
      "Modern design using Tailwind CSS",
      "SEO-optimized front-end structure",
    ],
  },
  {
    id: 2,
    name: "Single Vendor E-commerce Site (Front-End & Backend)",
    price: 220,
    image: "./images/product1.jpeg",
    live: "https://sites.soft-techtechnologyllc.com/singlelandingpage/",
    description:
      "A complete single-vendor e-commerce website with both front-end and backend integration. Includes admin dashboard for product management, order tracking, and customer data management.",
    features: [
      "Full CRUD functionality for products and categories",
      "Admin dashboard with authentication",
      "Order management and invoice generation",
      "Integrated payment gateway (demo setup)",
      "Responsive user interface and dynamic backend",
      "Built with HTML, CSS, JavaScript, and PHP/MySQL",
    ],
  },
  {
    id: 3,
    name: "Multi product landing page (Front-end)",
    price: 200,
    image: "./images/product2.jpeg",
    live: "https://sites.soft-techtechnologyllc.com/multiproductslandingpage/",
    description:
      "A multi-product landing page designed to showcase multiple items under one brand or campaign. Perfect for marketing different product lines with smooth scrolling and call-to-action sections.",
    features: [
      "Clean and attractive design for product promotion",
      "Multiple product sections with highlights",
      "Interactive sliders and animations",
      "Optimized for conversions and lead capture",
      "Responsive and lightweight front-end code",
    ],
  },
  {
    id: 4,
    name: "Multi product landing page (Front-end & Backend)",
    price: 320,
    image: "./images/product2.jpeg",
    live: "https://sites.soft-techtechnologyllc.com/multiproductslandingpage/",
    description:
      "A dynamic multi-product landing page with a complete backend system for managing products, leads, and analytics. Admin panel included for easy content updates and campaign tracking.",
    features: [
      "Admin panel for managing product content",
      "Lead form submissions with database storage",
      "Dynamic product loading and filtering",
      "Real-time analytics dashboard (basic)",
      "Fully responsive and fast-loading interface",
    ],
  },
  {
    id: 5,
    name: "Online matrimony website (Only code of Front-end & Backend)",
    price: 320,
    image: "./images/product3.jpeg",
    live: "https://sites.soft-techtechnologyllc.com/ghotok-bd/",
    description:
      "A complete matrimony platform with user registration, matchmaking algorithm, and admin management features. Comes with front-end and backend source code ready for customization.",
    features: [
      "User registration and profile creation",
      "Matchmaking system based on preferences",
      "Private messaging between users",
      "Admin panel for user and subscription management",
      "Photo verification and secure login system",
      "Developed using PHP, MySQL",
    ],
  },
  {
    id: 6,
    name: "Multi vendor e-commerce site (Only website)",
    price: 500,
    image: "./images/product4.jpeg",
    live: "https://front.nano-techbd.com/",
    description:
      "A complete multi-vendor e-commerce platform front-end with separate sections for vendors and customers. Built with modern UI and scalable architecture ready for backend integration.",
    features: [
      "Multi-vendor product listing layout",
      "Vendor registration and storefront design",
      "Dynamic shopping cart and checkout flow",
      "Advanced search and filter options",
      "Wishlist and customer review sections",
      "Fully responsive with optimized performance",
    ],
  },
  {
    id: 7,
    name: "Multi vendor e-commerce site (With management & setup)",
    price: 720,
    image: "./images/product4.jpeg",
    live: "https://front.nano-techbd.com/",
    description:
      "A full multi-vendor e-commerce system including both website setup and management panel. Ideal for launching an online marketplace with full operational support.",
    features: [
      "Vendor and admin dashboards with role management",
      "Product, order, and payment management systems",
      "Integrated live chat and notifications",
      "Payment gateway setup (SSLCommerz/bKash ready)",
      "Multi-language and multi-currency support",
      "Full setup and deployment service included",
    ],
  },
  {
    id: 8,
    name: "Online news portal (Full setup)",
    price: 1000,
    image: "./images/product5.jpeg",
    live: "https://timevision24.com/",
    description:
      "A professional online news portal with a full setup including admin panel, categories, reporters' panel, and live news updates. Perfect for digital publishers and media organizations.",
    features: [
      "Admin dashboard with article and user management",
      "Reporter and editor access levels",
      "Category-based news filtering",
      "Breaking news ticker and live update sections",
      "SEO and social media sharing integration",
      "Full deployment and configuration support",
    ],
  },
];

// show products
// loop on products container
const productsContainer = document.getElementById("productsContainer");
if (productsContainer) {
  products &&
    products?.length > 0 &&
    products.forEach((product) => {
      productsContainer.innerHTML += `<div class="product">
            <div class="productRight">
              <img
                src="${product?.image}"
                alt="${product?.name}"
              />
            </div>
            <div class="productLeft">
              <div class="productLeftTop">
                <h4 style="text-align: center">
                 ${product?.name}
                </h4>
                <p class="productPrice">Price: $${product?.price}</p>
              </div>
              <div class="actionButtons">
                <a href="./productsDetails.html?product_id=${product?.id}" target="_blank"
                  ><button class="btn">
                    <i class="fa-solid fa-eye"></i> View
                  </button></a
                >
                <button class="btn" onclick="handlePurchase(${product?.id})">
                    <i class="fa-solid fa-credit-card"></i> Purchase
                  </button>
              </div>
            </div>
          </div>`;
    });
}

// refund popup
const refundPopupCloseBtn = document.getElementById("refundPopupCloseBtn");
const refundPopup = document.getElementById("refundPopup");

const handleRefundPopup = () => {
  refundPopup.style.display = "block";
};
refundPopupCloseBtn.addEventListener("click", () => {
  refundPopup.style.display = "none";
});
