function sendMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const output = document.getElementById("messageOutput");

  if (name === "") {
    output.textContent = "Pehle toh naam likho na 😅";
    return;
  }

  // Cute messages array
  const messages = [
    `Hey ${name}, I really admire how positive you are. `,
    `${name}, You always bring good vibes whenever you go.💜`,
    `${name} , You have a really kind heart.`,
    `${name} , You are the type of person people feel comfortable around .  ❤️`,
    `${name}, "You have a really calming presence."  😍`
  ];

  // Random message
  const message = messages[Math.floor(Math.random() * messages.length)];
  output.textContent = message;
}

