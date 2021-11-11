$(document).ready(function () {
  const projectItemsList = document.querySelectorAll(".project-thumbnail");
  const labelsList = document.querySelectorAll(".cursor-pointer");

  for (let i = 0; i < labelsList.length; i++) {
    labelsList[i].addEventListener("click", () => {
      for (let h = 0; h < labelsList.length; h++) {
        labelsList[h].classList.remove("bold");
        labelsList[h].classList.remove("text-decoration-underline");
      }
      labelsList[i].classList.add("bold");
      labelsList[i].classList.add("text-decoration-underline");
      let clickedLabel = labelsList[i].innerHTML.toLowerCase();
      for (let j = 0; j < projectItemsList.length; j++) {
        projectItemsList[j].classList.add("hidden");
        let itemProjectTechs = projectItemsList[j].dataset.types.split(" ");
        for (let k = 0; k < itemProjectTechs.length; k++) {
          if (clickedLabel === itemProjectTechs[k].toLowerCase())
            projectItemsList[j].classList.remove("hidden");
          if (clickedLabel === "all")
            projectItemsList[j].classList.remove("hidden");
        }
      }
    });
  }
});
