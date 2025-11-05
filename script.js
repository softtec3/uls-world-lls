const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburgerClose");
const navigationLinks = document.getElementById("navigationLinks");

hamburger.addEventListener("click", () => {
  navigationLinks.style.transform = "translateX(0)";
});
hamburgerClose.addEventListener("click", () => {
  navigationLinks.style.transform = "translateX(100%)";
});

const products = [
  {
    id: 1,
    name: "Single product landing page (Front-end)",
    price: 150,
    image: "./images/product1.jpeg",
    live: "https://sites.soft-techtechnologyllc.com/singlelandingpage/",
    description: "",
    features: [],
  },
  {
    id: 2,
    name: "Single product landing page (Front-end & Backend)",
    price: 220,
    image: "./images/product1.jpeg",
    live: "https://sites.soft-techtechnologyllc.com/singlelandingpage/",
    description: "",
    features: [],
  },
  {
    id: 3,
    name: "Multi product landing page (Front-end)",
    price: 200,
    image: "./images/product2.jpeg",
    live: "",
    description: "",
    features: [],
  },
  {
    id: 4,
    name: "Multi product landing page (Front-end & Backend)",
    price: 320,
    image: "./images/product2.jpeg",
    live: "https://sites.soft-techtechnologyllc.com/multiproductslandingpage/",
    description: "",
    features: [],
  },
  {
    id: 5,
    name: "Online matrimony website (Only code of Front-end & Backend)",
    price: 320,
    image: "./images/product3.jpeg",
    live: "https://sites.soft-techtechnologyllc.com/ghotok-bd/",
    description: "",
    features: [],
  },
  {
    id: 6,
    name: "Multi vendor e-commerce site (Only website)",
    price: 500,
    image: "./images/product4.jpeg",
    live: "https://front.nano-techbd.com/",
    description: "",
    features: [],
  },
  {
    id: 7,
    name: "Multi vendor e-commerce site (With management & setup)",
    price: 720,
    image: "./images/product4.jpeg",
    live: "https://front.nano-techbd.com/",
    description:
      "This project is a singl-product e-commerce landing page with a front-end and an admin dashboard, all built using HTML, Tailwind CSS, and JavaScript. The front-end offers a smooth shopping experience with responsive product listings and a shopping cart, while the integrated dashboard provides a streamlined interface for managing products and orders.",
    features: [
      "✅ Single Product E-commerce Landing page",
      "✅ Single Product E-commerce Landing page",
    ],
  },
  {
    id: 8,
    name: "Online news portal (Full setup)",
    price: 1000,
    image: "./images/product5.jpeg",
    live: "https://timevision24.com/",
    description: "",
    features: [],
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
                <button class="btn">
                    <i class="fa-solid fa-credit-card"></i> Purchase
                  </button>
              </div>
            </div>
          </div>`;
    });
}
