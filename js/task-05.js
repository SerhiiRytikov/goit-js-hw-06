const input = document.querySelector("#name-input");

const inputSpan = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    event.target.value;
    console.log(event.currentTarget.value);
    if (input.value === "") {
        inputSpan.textContent = "Anonymous";
    } else {inputSpan.textContent = event.currentTarget.value;

    }

})