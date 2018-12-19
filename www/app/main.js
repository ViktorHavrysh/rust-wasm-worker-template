const worker = new Worker("./worker.js");

const textBox = document.querySelector("#primeTextbox");
const submitButton = document.querySelector("#submitButton");
const answerBox = document.querySelector("#answer");

worker.addEventListener("message", ev => {
  const message = ev.data;
  if (message.allGood) {
    answerBox.textContent = message.isPrime
      ? "It is prime!"
      : "It is not prime!";
  } else {
    answerBox.textContent = "Something went wrong! " + message.error;
  }
});

submitButton.addEventListener("click", () => worker.postMessage(textBox.value));
