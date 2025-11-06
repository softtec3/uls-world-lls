//new
const floatingChat = document.getElementById("floatingChat");
const floatingChatCloseBtn = document.getElementById("floatingChatCloseBtn");
const floatingChatForm = document.getElementById("floatingChatFom");
const floatingChatContent = document.getElementById("floatingChatContent");
const questionContainer = document.querySelector(".questionContainer");

let formDataCustomerDetails = { name: "", email: "", address: "", query: "" };
let arrayOfQuestionAndAnswers = [];
let selectedProduct = null; // 🔹 store the product that triggered chat

// Questions and answers
const questions = [
  { id: 1, msg: "How are you?" },
  { id: 2, msg: "How much price?" }, //don't change this order
  { id: 3, msg: "Where is your office?" },
];

const answers = [
  { questionId: 1, answers: ["I am fine, thanks!", "Doing great!"] },
  {
    questionId: 3,
    answers: ["Our office is in Dhaka", "Located in City Center"],
  },
  // price question (id: 2) will be handled dynamically
];

// Handle open chat for specific product
const handlePurchase = (id) => {
  selectedProduct = products.find((p) => p.id === id); // 🔹 store selected product
  if (!selectedProduct) return alert("Product not found!");

  floatingChat.style.display = "block";
};

// Close chat
floatingChatCloseBtn.addEventListener("click", () => {
  floatingChat.style.transform = "scaleY(0)";
  setTimeout(() => {
    window.location.reload();
  }, 500);
});

// Submit form
floatingChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  formDataCustomerDetails = Object.fromEntries(formData.entries());
  handleData();
});

// Handle form submission and show chat
function handleData() {
  if (formDataCustomerDetails.name.trim()) {
    floatingChatForm.style.display = "none";
    floatingChatContent.style.display = "flex";
    questionContainer.style.display = "none";

    arrayOfQuestionAndAnswers = [
      {
        customer: `Name: ${formDataCustomerDetails.name}<br/>
                   Email: ${formDataCustomerDetails.email}<br/>
                   Address: ${formDataCustomerDetails.address}<br/>
                   Interested Product: ${
                     selectedProduct?.name || "Not selected"
                   } <br/>
                   Query: ${formDataCustomerDetails?.query}`,
        owner:
          "Thanks for contacting us! <br/>One of our representatives will review your message and get in touch with you shortly to discuss your needs in detail.",
      },
    ];

    handleChatUpdate();
    showAllQuestions();
  }
}

// Render chat messages
function handleChatUpdate() {
  let html = "";
  arrayOfQuestionAndAnswers.forEach((qs) => {
    html += `
      <div class="chatContentContainer">
        <div class="chatContentLeftContainer">
          <div class="chatContentLeftContent">${qs.customer}</div>
        </div>
        <div class="chatContentRightContainer">
          <div class="chatContentRightContent">${qs.owner}</div>
        </div>
      </div>`;
  });
  floatingChatContent.innerHTML = html;
}

// Show all questions initially
function showAllQuestions() {
  questionContainer.innerHTML = "";
  questions.forEach((q) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "singleQuestion";
    questionDiv.textContent = q.msg;
    questionDiv.dataset.id = q.id;
    questionDiv.addEventListener("click", () =>
      handleCustomerQuestion(q.id, q.msg)
    );
    questionContainer.appendChild(questionDiv);
  });
}

// Handle question click
function handleCustomerQuestion(id, msg) {
  let randomAnswer = "No answer found";

  // Dynamic answer logic
  if (id === 2 && selectedProduct) {
    // Price question
    randomAnswer = `The price of <b>${selectedProduct.name}</b> is <b>$${selectedProduct.price}</b>.`;
  } else {
    const answerObj = answers.find((a) => a.questionId === id);
    const possibleAnswers = answerObj ? answerObj.answers : [];
    if (possibleAnswers.length > 0) {
      randomAnswer =
        possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    }
  }

  // Push to chat
  arrayOfQuestionAndAnswers.push({
    customer: msg,
    owner: randomAnswer,
  });

  handleChatUpdate();

  // Remove the question from the array and HTML
  const questionIndex = questions.findIndex((q) => q.id === id);
  if (questionIndex > -1) questions.splice(questionIndex, 1);

  const questionDiv = questionContainer.querySelector(`[data-id="${id}"]`);
  if (questionDiv) questionDiv.remove();

  // If no more questions left
  if (questions.length === 0) {
    questionContainer.innerHTML =
      '<div class="singleQuestion">✅ Thank you for chatting with us!</div>';
  }
}
