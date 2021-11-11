$(document).ready(function () {
    const workImageList = document.querySelectorAll(".thumbnail-works");

    for (let i = 0; i < workImageList.length; i++) {
        workImageList[i].addEventListener("click", (event) => {
            document.getElementById("work-image").setAttribute("src", event.target.attributes.src.value);
            for (let j = 0; j < workImageList.length; j++) {
                workImageList[j].classList.remove("thumbnail-border-active");
                workImageList[j].classList.add("thumbnail-border-inactive");
            }
            workImageList[i].classList.remove("thumbnail-border-inactive");
            workImageList[i].classList.add("thumbnail-border-active");
        });
    }
});
