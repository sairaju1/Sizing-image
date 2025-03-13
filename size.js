let imageElement = document.getElementById("image");
        let error = document.getElementById("warningMessage");
        let width = document.getElementById("imageWidth");
        let defaultImageWidth = 200;
        imageElement.style.width = defaultImageWidth + "px";
        console.log(imageElement.style.width)
        width.textContent = defaultImageWidth + "px";
        console.log(width.textContent);
function func1() {
    if (defaultImageWidth === 100) {
        error.textContent = "Too small Increase the Size of Image";
    } else {
        defaultImageWidth = defaultImageWidth - 5;
       // imageElement.style.width = defaultImageWidth + "px";
        width.textContent = defaultImageWidth + "px";
        error.textContent = "";
    }
}

function func2() {
    if (defaultImageWidth === 300) {
        error.textContent = "Too Big Derease the Size of Image";
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        imageElement.style.width = defaultImageWidth + "px";
        width.textContent = defaultImageWidth + "px";
        error.textContent = "";
    }
}