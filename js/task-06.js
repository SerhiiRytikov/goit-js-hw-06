const inputBlur = document.querySelector("#validation-input");

const inputData = Number(inputBlur.dataset.length);
inputBlur.addEventListener("blur", (event) => {
    event.currentTarget.classList.remove("valid", "invalid")
    if (event.currentTarget.value.length === inputData) {
        event.target.classList.add("valid");
    } else {
        event.currentTarget.classList.add("invalid");
    }
});
console.log(inputData)