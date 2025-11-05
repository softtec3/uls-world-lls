console.log(products);
let singleProduct = null;
const params = new URLSearchParams(window.location.search);
const product_id = params.get("product_id");
if (!product_id) {
  window.location = "./index.html";
}
console.log(singleProduct);
if (product_id) {
  const targetProduct = products.find((product) => product.id == product_id);
  singleProduct = targetProduct;
}
console.log(singleProduct);
if (singleProduct?.name) {
  document.getElementById("productHeading").innerHTML =
    singleProduct?.name ?? "";
  document.getElementById("productImageSingle").src =
    singleProduct?.image ?? null;
  document.getElementById("productPriceSingle").innerHTML =
    singleProduct?.price ?? 0;
  document.getElementById("productPreview").href = singleProduct?.live ?? "#";
  document.getElementById("productDescriptionSingle").innerHTML =
    singleProduct?.description ?? "";
  singleProduct?.features &&
    singleProduct?.features?.length > 0 &&
    singleProduct?.features.forEach((feature) => {
      document.getElementById(
        "featuresContainer"
      ).innerHTML += `<p>${feature}</p>`;
    });
}
