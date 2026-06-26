// Ad Maiorem Dei Gloriam!

const file = document.getElementById("background-image-file-input");
const uploadButton = document.getElementById("background-image-file-button");
const previewImg = document.getElementById("preview-background-display");

function getFile() {
    return file.files[0];
}

function changeBackground() {
    const file = getFile();
    if (!file) {
        alert("Upload a file first!");
        return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
        document.body.style.backgroundImage = `url(${fileReader.result})`;
    }

    fileReader.readAsDataURL(file);
}

function previewBackground() {
    const file = getFile();
    const fileReader = new FileReader();

    fileReader.onload = () => {
        previewImg.src = `data:image;base64,${fileReader.result}`;
    }

    fileReader.readAsDataURL(file);
}

file.addEventListener("change", () => {
    previewBackground();
})

uploadButton.addEventListener("click", () => {
    changeBackground();
})