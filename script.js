//your JS code here. If required.
function delay(message, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

async function displayMessage() {
  const message = await delay('Hello, world!', 2000);
  document.getElementById('output').textContent = message;
}

displayMessage();

