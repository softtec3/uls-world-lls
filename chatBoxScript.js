const floatingChat = document.getElementById("floatingChat");
const floatingChatCloseBtn = document.getElementById("floatingChatCloseBtn");

floatingChatCloseBtn.addEventListener("click", () => {
  floatingChat.style.transform = "scaleY(0)";
});

// formdata
const floatingChatFom = document.getElementById("floatingChatFom");
const floatingChatContent = document.getElementById("floatingChatContent");
let formDataCustomerDetails = { name: "", email: "", address: "", query: "" };

floatingChat.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  formDataCustomerDetails = data;
  handleData();
});

const handleData = () => {
  console.log(formDataCustomerDetails);
  if (formDataCustomerDetails.name.trim()) {
    floatingChatFom.style.display = "none";
    floatingChatContent.style.display = "flex";
  }
};
