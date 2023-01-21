const minus = document.querySelector("[data-action='decrement']");
const plus = document.querySelector("[data-action='increment']");
const span=  document.querySelector("#value");
  
  let counterValue = 0;
  const decrement = () => {
    counterValue -= 1;
  
    span.textContent = counterValue;
  };

    const increment = () => {
    counterValue += 1;
  
   span.textContent = counterValue;
  };
  
  minus.addEventListener("click", decrement);
  plus.addEventListener("click", increment);
  

