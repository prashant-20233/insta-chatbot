function sendMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const output = document.getElementById("messageOutput");

  if (name === "") {
    output.textContent = "Pehle toh naam likho na 😅";
    return;
  }

  // Cute messages array
  const messages = [
    `Hey ${name}, tum toh meri coding journey ki semicolon ho — bina tumhare sab incomplete lagta hai! 😄`,
    `${name}, tumhari smile ka logic mujhe har baar infinite loop mein daal deta hai 💜`,
    `Agar code mein error ho toh fix ho jaye, lekin ${name} ki yaadon ka kya karun?`,
    `function love(${name}) { return forever; } ❤️`,
    `${name}, Stop being so cute , you are distracting me  😍`
  ];

  // Random message
  const message = messages[Math.floor(Math.random() * messages.length)];
  output.textContent = message;
}
