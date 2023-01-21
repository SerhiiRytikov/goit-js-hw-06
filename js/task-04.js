const refs = {
    minus: document.querySelector("[data-action='decrement']"),
    plus: document.querySelector("[data-action='increment']"),
    span: document.querySelector("#value"),
  };
  
  let counterValue = 0;
  const decrement = () => {
    counterValue -= 1;
  
    refs.span.textContent = counterValue;
  };

    const increment = () => {
    counterValue += 1;
  
   refs.span.textContent = counterValue;
  };
  
  refs.minus.addEventListener("click", decrement);
  refs.plus.addEventListener("click", increment);
  

