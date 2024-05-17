const chatform = document.getElementById('chatform');
const messages = document.querySelector('.messages');

chatform.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.getElementById('message').value;
    document.getElementById('message').value = '';

    // Chatbot'a mesaj gönder
    const response = chatbotResponse(message);

    // Yanıtı mesaj kutusuna ekle
    messages.innerHTML += `
        <div class="message user">${message}</div>
        <div class="message bot">${response.message}</div>
    `;
});

//  Ek işlevler ve stillemeler burada eklenebilir...
