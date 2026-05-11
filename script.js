
//Get the meme image you selected
function selectImg(imageUrl) {
    // Change to editor screen
    document.getElementById("template-selection").style.display = "none";
    document.getElementById("meme-editor").style.display = "block";
    
    // Change the meme image
    let memeImage = document.getElementById("meme-image");
    memeImage.src = imageUrl;

    resetMemeSettings();

}

function selectImg(imageUrl) {
    document.getElementById("template-selection").style.display = "none";
    document.getElementById("meme-editor").style.display = "block";
    
    let memeImage = document.getElementById("meme-image");
    
    // This MUST happen before .src
    memeImage.crossOrigin = "anonymous"; 
    
    // Add a timestamp to bypass the browser cache, which often causes the 'Tainted' error
    memeImage.src = imageUrl + "?t=" + new Date().getTime();

    resetMemeSettings();
}


//Actualices the image
function updateMeme() {
    let topText = document.getElementById("top-input").value;
    let bottomText = document.getElementById("bottom-input").value;
    
    document.getElementById("top-text").innerText = topText;
    document.getElementById("bottom-text").innerText = bottomText;
  
}

//Return to principal menu
function goBack() {
    document.getElementById("meme-editor").style.display = "none";
    document.getElementById("template-selection").style.display = "block";
    

}

//Get the url of the custom image you want 
function customImage() {
    let imageUrl = prompt("Enter the url of your own image:");

    if (imageUrl) {
        selectImg(imageUrl);

    }
}

//Prompt to ask what color you want thye text to be for top text
function changeTopColor() {
    let topColor = prompt("Select a color");
    let newColor = document.getElementById("top-text");

    newColor.style.color = topColor;
}

//Prompt to ask what color you want thye text to be for bottom text
function changeBottomColor() {
    let bottomColor = prompt("Select a color");
    let newColor = document.getElementById("bottom-text");

    newColor.style.color = bottomColor;
}

//Change the letter size of the top text
function changeTopFontSize() {
    let fontSize = prompt("Select a font size (e.g., 20px)");
    let topText = document.getElementById("top-text");

    topText.style.fontSize = fontSize;
  
}

//Change the bottom text size
function changeBottomFontSize() {
    let fontSize = prompt("Select a font size (e.g., 20px)");
    let bottomText = document.getElementById("bottom-text");

    bottomText.style.fontSize = fontSize;
}


//Reset all the values like color, size and text to their original value once you select other meme
function resetMemeSettings() {
  // Reset text
  let topInput = document.getElementById("top-input");
  topInput.value = "";
  
  let bottomInput = document.getElementById("bottom-input");
  bottomInput.value = "";
  
  // Reiniciar el texto mostrado en el meme
  let topText = document.getElementById("top-text");
  topText.innerText = "TOP TEXT";
  
  let bottomText = document.getElementById("bottom-text");
  bottomText.innerText = "BOTTOM TEXT";
  
  // Reiniciar colores a blanco (o el color que prefieras)
  topText.style.color = "#FFFFFF";
  bottomText.style.color = "#FFFFFF";
  
  // Reiniciar tamaños de fuente a un valor por defecto
  topText.style.fontSize = "32px";
  bottomText.style.fontSize = "32px";
}

function descargarCaptura() {
    // 1. Creamos un canvas oculto en memoria
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const imgOriginal = document.getElementById("meme-image");

    // 2. Ajustamos el tamaño del canvas al de la imagen
    canvas.width = imgOriginal.naturalWidth;
    canvas.height = imgOriginal.naturalHeight;

    // 3. Dibujamos la imagen de fondo
    ctx.drawImage(imgOriginal, 0, 0, canvas.width, canvas.height);

    // 4. Configuramos el estilo del texto (puedes ajustarlo)
    const topText = document.getElementById("top-text");
    const bottomText = document.getElementById("bottom-text");

    // Función auxiliar para pintar texto con borde (estilo meme clásico)
    function drawMemeText(text, x, y, size, color) {
        ctx.fillStyle = color;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.font = `bold ${size}px Impact, sans-serif`; // Usamos Impact si está disponible
        ctx.textAlign = "center";
        
        ctx.strokeText(text.toUpperCase(), x, y);
        ctx.fillText(text.toUpperCase(), x, y);
    }

    // Calculamos posiciones (Top y Bottom)
    const fontSize = canvas.height * 0.1; // 10% de la altura de la imagen
    drawMemeText(topText.innerText, canvas.width / 2, fontSize + 20, fontSize, topText.style.color || "white");
    drawMemeText(bottomText.innerText, canvas.width / 2, canvas.height - 40, fontSize, bottomText.style.color || "white");

    // 5. Descarga automática
    const link = document.createElement("a");
    link.download = "mi-meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}








