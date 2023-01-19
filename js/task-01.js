const totalcategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalcategories.length}`);
totalcategories.forEach(item => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
})


