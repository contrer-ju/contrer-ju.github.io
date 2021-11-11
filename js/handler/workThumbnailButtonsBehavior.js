$(document).ready(function () {
    const thumbnailButtons = document.querySelectorAll(".thumbnail-buttons");
    const workImageList = document.querySelectorAll(".thumbnail-works");
    let numberThumbnailActive = 0;
    let nextThumbnailActive = 0;

    for (let i = 0; i < thumbnailButtons.length; i++) {
        thumbnailButtons[i].addEventListener("click", () => {
            for (let j = 0; j < workImageList.length; j++) {
                if (workImageList[j].classList[1] === "thumbnail-border-active") numberThumbnailActive = j;
                workImageList[j].classList.remove("thumbnail-border-active");
                workImageList[j].classList.add("thumbnail-border-inactive");
            }

            if (thumbnailButtons[i].id === "thumbnail-right") {
                if (numberThumbnailActive === workImageList.length - 1) {
                    nextThumbnailActive = 0;
                } else {
                    nextThumbnailActive = numberThumbnailActive + 1;
                }
                const indexOfImageForThumbnailActive = workImageList[nextThumbnailActive].src.indexOf("k/") + 1;
                const pathImageForThumbnailActive = ".." + workImageList[nextThumbnailActive].src.substring(indexOfImageForThumbnailActive)
                document.getElementById("work-image").setAttribute("src", pathImageForThumbnailActive);
                workImageList[nextThumbnailActive].classList.remove("thumbnail-border-inactive");
                workImageList[nextThumbnailActive].classList.add("thumbnail-border-active");
            }

            if (thumbnailButtons[i].id === "thumbnail-left") {
                if (numberThumbnailActive === 0) {
                    nextThumbnailActive = workImageList.length - 1;
                } else {
                    nextThumbnailActive = numberThumbnailActive - 1;
                }
                const indexOfThumbnailActive = workImageList[nextThumbnailActive].src.indexOf("k/") + 1;
                const pathOfThumbnailActive = ".." + workImageList[nextThumbnailActive].src.substring(indexOfThumbnailActive)
                document.getElementById("work-image").setAttribute("src", pathOfThumbnailActive);
                workImageList[nextThumbnailActive].classList.remove("thumbnail-border-inactive");
                workImageList[nextThumbnailActive].classList.add("thumbnail-border-active");
            }
        });
    }
});
