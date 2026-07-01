// Ad Maiorem Dei Gloriam!

const file = document.getElementById("background-image-file-input");
const uploadButton = document.getElementById("background-image-file-button");
const previewImg = document.getElementById("preview-background-display");
const restoreButton = document.getElementById("restore-default-background-button");

function getFile() {
    return file.files[0];
}

function saveBackground(base64Url) {
    localStorage.setItem("background-data", base64Url);
}

function getBackground() {
    return localStorage.getItem("background-data");
}

function changeBackground() {
    const file = getFile();
    if (!file) {
        alert("Upload a file first!");
        return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
        saveBackground(fileReader.result);
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

function syncWithLocalStorage() {
    const bg = getBackground();
    if (!bg) return;
    document.body.style.backgroundImage = `url(${bg})`;
}

function changeToDefaultBg() {
    const defaultBg = window.getComputedStyle(document.body).getPropertyValue('--background-image');
    document.body.style.backgroundImage = defaultBg;
}

function deleteBg() {
    localStorage.removeItem("background-data");
    changeToDefaultBg();
}

//file.addEventListener("change", () => {
//    previewBackground();
//})

uploadButton.addEventListener("click", () => {
    changeBackground();
})

restoreButton.addEventListener("click", deleteBg)

syncWithLocalStorage();