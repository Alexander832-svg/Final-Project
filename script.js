
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
        selectImg(imageUrl);

    }
}

function changeTopColor() {
    let topColor = prompt("Select a color");
    let newColor = document.getElementById("top-text");

    newColor.style.color = topColor;
}

function changeBottomColor() {
    let bottomColor = prompt("Select a color");
    let newColor = document.getElementById("bottom-text");

    newColor.style.color = bottomColor;
}

function changeTopFontSize() {
    let fontSize = prompt("Select a font size (e.g., 20px)");
    let topText = document.getElementById("top-text");

    topText.style.fontSize = fontSize;
  
}

function changeBottomFontSize() {
    let fontSize = prompt("Select a font size (e.g., 20px)");
    let bottomText = document.getElementById("bottom-text");

    bottomText.style.fontSize = fontSize;
}

function resetMemeSettings() {
  // Reiniciar los textos
  let topInput = document.getElementById("top-input");
  topInput.value = "";
  
  let bottomInput = document.getElementById("bottom-input");
  bottomInput.value = "";
  
  // Reiniciar el texto mostrado en el meme
  let topText = document.getElementById("top-text");
  topText.innerText = "";
  
  let bottomText = document.getElementById("bottom-text");
  bottomText.innerText = "";
  
  // Reiniciar colores a blanco (o el color que prefieras)
  topText.style.color = "#FFFFFF";
  bottomText.style.color = "#FFFFFF";
  
  // Reiniciar tamaños de fuente a un valor por defecto
  topText.style.fontSize = "32px";
  bottomText.style.fontSize = "32px";
}



