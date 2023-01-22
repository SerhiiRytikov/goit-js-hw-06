// варіант1
// const input = document.getElementById("font-size-control");
// const span = document.getElementById("text");
// input.addEventListener("input", change);
// function change(event) {
//   span.style.fontSize = event.currentTarget.value + "px";
// }

// варіант2
const inputRange = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const handleInput = () => {
  inputText.style.fontSize = `${inputRange.value}px`;
};

inputRange.addEventListener("input", handleInput);