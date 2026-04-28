// Función para mostrar la pantalla del editor
function showEditor(imageUrl) {
    // Ocultar el menú de templates
    let templateScreen = document.getElementById('template-selection');
    templateScreen.style.display = 'none';
    
    // Mostrar el editor
    let editorScreen = document.getElementById('meme-editor');
    editorScreen.style.display = 'block';
    
    // Cargar la imagen seleccionada
    let memeImage = document.getElementById('meme-image');
    memeImage.src = imageUrl;
}

// Función para regresar al menú de templates
function showTemplates() {
    // Mostrar el menú de templates
    let templateScreen = document.getElementById('template-selection');
    templateScreen.style.display = 'block';
    
    // Ocultar el editor
    let editorScreen = document.getElementById('meme-editor');
    editorScreen.style.display = 'none';
}

// Función para actualizar el texto del meme
function updateMemeText() {
    // Obtener el texto de los inputs
    let topInput = document.getElementById('top-input');
    let bottomInput = document.getElementById('bottom-input');
    
    // Obtener los elementos de texto del meme
    let topText = document.getElementById('top-text');
    let bottomText = document.getElementById('bottom-text');
    
    // Actualizar el texto (o mostrar texto por defecto si está vacío)
    if (topInput.value === '') {
        topText.innerText = 'TOP TEXT';
    } else {
        topText.innerText = topInput.value;
    }
    
    if (bottomInput.value === '') {
        bottomText.innerText = 'BOTTOM TEXT';
    } else {
        bottomText.innerText = bottomInput.value;
    }
}

// Cuando la página carga, configurar los event listeners
document.addEventListener('DOMContentLoaded', function() {
    
    // Agregar click listeners a todos los templates
    let templateOptions = document.querySelectorAll('.template-option');
    
    for (let i = 0; i < templateOptions.length; i++) {
        let template = templateOptions[i];
        
        template.addEventListener('click', function() {
            // Obtener la URL de la imagen del atributo data-image
            let imageUrl = template.getAttribute('data-image');
            
            // Mostrar el editor con esta imagen
            showEditor(imageUrl);
        });
    }
    
    // Agregar click listener al botón de regresar
    let backButton = document.getElementById('back-button');
    backButton.addEventListener('click', function() {
        showTemplates();
    });
    
    // Agregar click listener al botón de actualizar meme
    let updateButton = document.getElementById('update-meme');
    updateButton.addEventListener('click', function() {
        updateMemeText();
    });
    
    // Actualizar texto en tiempo real mientras escriben
    let topInput = document.getElementById('top-input');
    let bottomInput = document.getElementById('bottom-input');
    
    topInput.addEventListener('input', function() {
        updateMemeText();
    });
    
    bottomInput.addEventListener('input', function() {
        updateMemeText();
    });
});
