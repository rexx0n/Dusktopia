const li = document.querySelectorAll(".table li");
li.forEach((element) => {
  element.addEventListener("mouseover", (e) => {

    let className = e.target.className;
    let divs = document.querySelectorAll(".table ul div");
    divs.forEach((element) => {
        element.classList.add("table__more--none")
      if (element.classList.contains(className)) {
        element.classList.remove("table__more--none");
      }
    });
  });
});
// li.forEach((element) => {
//   let table = document.querySelector(".table");
//   table.addEventListener("mouseout", (e) => {
//     let className = e.target.className;
//     let divs = document.querySelectorAll(".table ul div");
//     divs.forEach((element) => {
//       if (element.classList.contains(className)) {
//         element.classList.add("table__more--none");
//       }
//     });
//   });
// });