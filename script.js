
function selectImg(imageUrl) {
    // Cambiar a la pantalla del editor
    document.getElementById("template-selection").style.display = "none";
    document.getElementById("meme-editor").style.display = "block";
    
    // Cambiar la imagen del meme
    let memeImage = document.getElementById("meme-image");
    memeImage.src = imageUrl;
}

function updateMeme() {
    let topText = document.getElementById("top-input").value;
    let bottomText = document.getElementById("bottom-input").value;
    
    document.getElementById("top-text").innerText = topText;
    document.getElementById("bottom-text").innerText = bottomText;
}

function goBack() {
    document.getElementById("meme-editor").style.display = "none";
    document.getElementById("template-selection").style.display = "block";
}

function customImage() {
    let imageUrl = prompt("Enter the url of your own image:");

    if (imageUrl) {
        selectImg(imageUrl)

    }
}

