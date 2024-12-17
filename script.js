const chatbotIcon = document.getElementById('chatbot-icon');
const chatWindow = document.getElementById('chat-window');
const closeBtn = document.querySelector('.close-btn');
const sendBtn = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const messages = document.querySelector('.messages');

// Open/Close Chat Window
chatbotIcon.addEventListener('click', () => {
  chatWindow.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  chatWindow.style.display = 'none';
});

// Sending a Message
sendBtn.addEventListener('click', sendMessage);
document.addEventListener('keydown',(event)=>{
  if(event.key=="Enter")
    sendMessage();
})
function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (userMessage=="Hello") {
    appendMessage('user', userMessage);
    appendMessage('bot', "Hi! I'm here to help!"); // Placeholder bot response
    chatInput.value = '';
  }
  if (userMessage=="Tell me about the latest music festival") {
    appendMessage('user', userMessage);
    appendMessage('bot', "The Magnetic Fields Festival 2024 is a music festival in India that will be held from December 6–8, 2024 at Alsisar Mahal in Rajasthan. The theme for the 10th edition of the festival is Unified Field"); // Placeholder bot response
    chatInput.value = '';
  }
}

function appendMessage(sender, text) {
  const message = document.createElement('div');
  message.classList.add(sender);
  message.textContent = text;
  messages.appendChild(message);
  messages.scrollTop = messages.scrollHeight; // Scroll to the latest message
}