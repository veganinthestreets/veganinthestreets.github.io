const goToHome = () => {
    let path = window.location.href.split('/');
    if (path[path.length - 1] !== 'index.html') {
        window.location.href = "../index.html";
    }
};

const goToMushroomJerky = () => {
    window.location.href = "recipes/mushroom-jerky.html";
};

// Ingredients table check boxes
const toggleIngredientRowComplete = (element, tableName='ingredients-table') => {
    const rowIndex = element.parentNode.parentNode.rowIndex;
    const ingredientsTableRow = document.getElementById(tableName).rows[rowIndex];

    const isChecked = ingredientsTableRow.cells[0].getElementsByTagName("input")[0].checked;

    if (isChecked) {
        ingredientsTableRow.classList.add("tr-strikethrough");
    } else {
        ingredientsTableRow.classList.remove("tr-strikethrough");
    };
};

// Recipe pages, resize the image to fit ingredients table height
const resizeRecipeImage = (tableName='ingredients-table') => {
    table = document.getElementById(tableName);
    newHeight = table.offsetHeight;
    newWidth = table.offsetWidth;
    recipeImage = document.getElementById('recipe-img');

    if (newHeight - newWidth > 75) {
        recipeImage.style.display = "none";
    } else {
        recipeImage.style.display = "inline";
        recipeImage.style.height = `${newHeight}px`;
        recipeImage.style.width = `${newWidth - 100}px`;
    }
};

// Instructions table check boxes
const toggleInstructionsRowComplete = (element) => {
    const rowIndex = element.parentNode.parentNode.rowIndex;
    const rowCount = document.getElementById('instructions-table').rows.length;

    let instructionsTableRow = document.getElementById('instructions-table').rows[rowIndex];
    const isChecked = instructionsTableRow.cells[0].getElementsByTagName("input")[0].checked;

    if (isChecked) {
        for (let i = rowIndex; i > -1; i--) {
            instructionsTableRow = document.getElementById('instructions-table').rows[i];
            instructionsTableRow.classList.add("tr-strikethrough");
            instructionsTableRow.cells[0].getElementsByTagName("input")[0].checked = true;
        }
    } else {
        for (let i = rowIndex; i < rowCount; i++) {
            instructionsTableRow = document.getElementById('instructions-table').rows[i];
            instructionsTableRow.classList.remove("tr-strikethrough");
            instructionsTableRow.cells[0].getElementsByTagName("input")[0].checked = false;
        }
    };
};