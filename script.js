
//Get the meme image you selected
//This is the code i made to select your image, if you want to try this code, just erase the 1, and put the 1 in the another one.
function selectImg1(imageUrl) {
    // Change to editor screen
    document.getElementById("template-selection").style.display = "none";
    document.getElementById("meme-editor").style.display = "block";
    
    // Change the meme image
    let memeImage = document.getElementById("meme-image");
    memeImage.src = imageUrl;

    //Reset the meme settings to default values
    resetMemeSettings();

}

//This is my code but modifyed by de IA to be able to download the image, this is the one is actually be used.
function selectImg(imageUrl) {
    document.getElementById("template-selection").style.display = "none";
    document.getElementById("meme-editor").style.display = "block";
    
    let memeImage = document.getElementById("meme-image");
    
    // 1. Detectar si es un archivo subido localmente (Base64)
    if (imageUrl.startsWith('data:')) {
        memeImage.removeAttribute("crossOrigin"); // Base64 no usa CORS
        memeImage.src = imageUrl;                 // Se asigna directo, SIN sumarle "?t="
    } 
    // 2. Detectar si es una plantilla de tu propio servidor web
    else if (imageUrl.startsWith('/') || imageUrl.includes(window.location.hostname)) {
        memeImage.crossOrigin = "anonymous"; 
        const separator = imageUrl.includes('?') ? '&' : '?';
        memeImage.src = imageUrl + separator + "t=" + new Date().getTime();
    } 
    else {
        memeImage.crossOrigin = "anonymous";
        const separator = imageUrl.includes('?') ? '&' : '?';
        memeImage.src = imageUrl + separator + "t=" + new Date().getTime();
    }

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
  
  //Restart the text showed on the meme on top
  let topText = document.getElementById("top-text");
  topText.innerText = "TOP TEXT";

    //Restart the text showed on the meme on top
  let bottomText = document.getElementById("bottom-text");
  bottomText.innerText = "BOTTOM TEXT";
  
  //Restart the text color to white
  topText.style.color = "#FFFFFF";
  bottomText.style.color = "#FFFFFF";
  
  //Restart the text size
  topText.style.fontSize = "32px";
  bottomText.style.fontSize = "32px";
}

function descargarCaptura() {
    // 1. Create a canvas and get its context
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const imgOriginal = document.getElementById("meme-image");

    // 2. Adjust canvas size to match the original image
    canvas.width = imgOriginal.naturalWidth;
    canvas.height = imgOriginal.naturalHeight;

    // 3. Draw the original image onto the canvas
    ctx.drawImage(imgOriginal, 0, 0, canvas.width, canvas.height);

    // 4. Configure text styles and draw the top and bottom text onto the canvas
    const topText = document.getElementById("top-text");
    const bottomText = document.getElementById("bottom-text");

    // Auxiliary function to draw text with stroke for better visibility
    function drawMemeText(text, x, y, size, color) {
        ctx.fillStyle = color;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        ctx.font = `bold ${size}px Impact, sans-serif`; // Usamos Impact si está disponible
        ctx.textAlign = "center";
        
        ctx.strokeText(text.toUpperCase(), x, y);
        ctx.fillText(text.toUpperCase(), x, y);
    }

    // Calculate positions (Top and Bottom)
    const fontSize = canvas.height * 0.1; // 10% of the image height
    drawMemeText(topText.innerText, canvas.width / 2, fontSize + 20, fontSize, topText.style.color || "white");
    drawMemeText(bottomText.innerText, canvas.width / 2, canvas.height - 40, fontSize, bottomText.style.color || "white");

    // 5. Download automatically
    const link = document.createElement("a");
    link.download = "mi-meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}








