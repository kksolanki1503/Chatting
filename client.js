
const socket = io('http://localhost:8000',{transports: ['websocket']});

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageinp');
const messageContainer = document.querySelector(".container");

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`,'right');
    socket.emit('send',message);
    messageInput.value = "";
})
const append = (message,position) =>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

const name = prompt("enter your name to join");
console.log("hello");

socket.emit('new-user-joined',)

socket.on('user-joined',data=>{
    append(`${name} joined the chat`,'right');

})
const message = messageInput.value;
socket.on('receive',data=>{
    append(`${data,message}: ${data,user}`,'left');

})
