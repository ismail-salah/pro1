// Define questions and answers
const qaPairs = {
    "What are your operating hours?": "Our operating hours are from 9 AM to 5 PM, Monday to Friday.", 
    "How do I place an order?": "You can place an order by visiting our website, selecting your products, and proceeding to checkout.",
    "Do you offer international shipping?": "Yes, we offer international shipping. Shipping costs will vary based on your location.",
    "What is your return policy?": "We accept returns within 30 days of purchase. The product must be in its original condition.",
    "How can I track my order?": "Once your order is shipped, you'll receive a tracking number via email.",
    "Can I change my order after placing it?": "Yes, you can change your order within 24 hours of placing it.",
    "What payment methods do you accept?": "We accept credit cards, PayPal, and bank transfers."
};

// Call displayGreetingMessage when the page loads
window.addEventListener("load", function() {
    displayGreetingMessage();
});

function sendMessage() {
    var input = document.getElementById("chatbotInput");
    var userMessage = input.value.toLowerCase(); // Convert user input to lowercase
    displayMessage("You: " + input.value);

    // Find a matching question in a case-insensitive manner
    var matchedQuestion = Object.keys(qaPairs).find(question => question.toLowerCase() === userMessage);
    var chatbotResponse = matchedQuestion ? qaPairs[matchedQuestion] : "Sorry, I don't understand that question.";
    displayMessage("Chatbot: " + chatbotResponse);

    // Clear the input field after sending the message
    input.value = "";
}

function displayMessage(message, isHTML = false) {
    var messageDiv = document.createElement("div");
    if (isHTML) {
        messageDiv.innerHTML = message; // Set HTML content
    } else {
        messageDiv.textContent = message; // Set text content
    }
    document.getElementById("chatbotMessages").appendChild(messageDiv);
}

function handleQuestionClick(question) {
    var chatbotMessages = document.getElementById("chatbotMessages");
    var chatbotResponse = qaPairs[question] || "Sorry, I don't have an answer for that question.";
    displayMessage("You: " + question);
    displayMessage("Chatbot: " + chatbotResponse);
}

function displayGreetingMessage() {
    var chatbotMessages = document.getElementById("chatbotMessages");
    chatbotMessages.innerHTML = ""; // Clear existing messages

    const greeting = "Hi! I'm here to help. Here are some questions you can ask me:<br><br>";
    const questions = Object.keys(qaPairs);

    const questionList = questions.map(question => 
        `<a class="question-link" href="javascript:void(0);" onclick="handleQuestionClick('${question}')">${question}</a><br>`
    );

    displayMessage("Chatbot: " + greeting + questionList.join(""), true);
}

// Global variable to track the open/close state of the chatbot
var isChatbotOpen = false;

function toggleChatbot() {
    var chatbotContainer = document.getElementById("chatbotContainer");
    var chatbotToggle = document.getElementById("chatbotToggle");

    // Toggle the chatbot open state
    isChatbotOpen = !isChatbotOpen;

    // Update the display based on the state
    if (isChatbotOpen) {
        chatbotContainer.style.display = 'block';
        chatbotToggle.style.display = 'none';
        displayGreetingMessage(); // Display greeting message when opening
    } else {
        chatbotContainer.style.display = 'none';
        chatbotToggle.style.display = 'block';
        clearChatHistory(); // Clear the chat history when closing
    }
}

function clearChatHistory() {
    var chatbotMessages = document.getElementById("chatbotMessages");
    chatbotMessages.innerHTML = ""; // Clear chat history
}

// Close button functionality
document.getElementById("closeChatbotBtn").addEventListener("click", function() {
    var chatbotContainer = document.getElementById("chatbotContainer");
    var chatbotToggle = document.getElementById("chatbotToggle");
    var chatbotImage = document.getElementById("chatbotImage");

    // Directly set the chatbot to be closed
    chatbotContainer.style.display = 'none';
    chatbotToggle.style.display = 'block';
    chatbotImage.style.display = 'block'; // Assuming you have a chatbotImage to show when chatbot is closed

    clearChatHistory(); // Clear the chat history
    isChatbotOpen = false; // Update the chatbot open state
});

// Attach the event listener to the chatbot toggle button
document.getElementById("chatbotToggle").addEventListener("click", toggleChatbot);
