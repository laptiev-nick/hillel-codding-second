const userName = prompt("Enter your name:")?.trim();

if (!userName || !isNaN(+userName)) {
  alert("Hello, noname! How are you?");
} 
else {
  alert(`Hello, ${userName}! How are you?`);
}
