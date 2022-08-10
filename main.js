let tabs = Array.from(document.querySelectorAll(".tabs li"));
let divs = Array.from(document.querySelectorAll(".paragraph > div"));
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((t) => {
      t.classList.remove("active");
    });
    e.target.classList.add("active");
    divs.forEach((d) => {
      d.style.display = "none";
      d.classList.remove("active");
      if (e.target.id === d.id) {
        d.classList.add("active");
        d.style.display = "block";
        let para = document.querySelector(`.paragraph > #${d.id} > p`);
        let heading = document.querySelector(`.paragraph > #${d.id} > h3`);
        para.classList.add("active");
        heading.classList.add("active");

        if (d.id === "vision") {
          document.querySelector("#vision-list").style.display = "block";
        } else {
          document.querySelector("#vision-list").style.display = "none";
        }
      }
    });
  });
});

// if (document.documentElement.classList.contains("active")) {
//   document.documentElement.style.display = "block";
// }
