$(document).ready(function () {
    const workModalList = document.querySelectorAll(".thumbnail-modal");
    const workImageList = document.querySelectorAll(".thumbnail-works");

    for (let i = 0; i < workModalList.length; i++) {
        workModalList[i].addEventListener("click", (event) => {
            document.getElementById("modal-image").setAttribute("src", event.target.attributes.src.value);
            document.getElementById("work-image").setAttribute("src", event.target.attributes.src.value);
            for (let j = 0; j < workModalList.length; j++) {
                workImageList[j].classList.remove("thumbnail-border-active");
                workImageList[j].classList.add("thumbnail-border-inactive");
                workModalList[j].classList.remove("thumbnail-border-active");
                workModalList[j].classList.add("thumbnail-border-inactive");
            }
            workImageList[i].classList.remove("thumbnail-border-inactive");
            workImageList[i].classList.add("thumbnail-border-active");
            workModalList[i].classList.remove("thumbnail-border-inactive");
            workModalList[i].classList.add("thumbnail-border-active");
        });
    }
});
