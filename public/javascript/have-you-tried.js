const randoDrinkImg = document.getElementById("randoDrinkImg");
const randoDrinkTitle = document.getElementById("randoDrinkTitle");
const randoDrinkInstr = document.getElementById("randoDrinkInstr");
const ingredientList = document.getElementById("ingredientList");

function randomDrink(event) {
    const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                const drinkName = data.drinks[0].strDrink;
                const drinkImgUrl = data.drinks[0].strDrinkThumb;
                const instructions = data.drinks[0].strInstructions;

                randoDrinkTitle.textContent = drinkName;
                randoDrinkInstr.textContent = instructions;
                randoDrinkImg.setAttribute("src", drinkImgUrl);
                randoDrinkImg.setAttribute("style", "width: 570px; height: 300px");

                listIngredients(data);
            });
        } else {
            alert("Error: " + response.statusText);
        };
    });

};

function listIngredients(data) {

    if (data.drinks[0].strIngredient1) {
        addToList(data.drinks[0].strIngredient1);
    }
    if (data.drinks[0].strIngredient2) {
        addToList(data.drinks[0].strIngredient2);
    }
    if (data.drinks[0].strIngredient3) {
        addToList(data.drinks[0].strIngredient3);
    }
    if (data.drinks[0].strIngredient4) {
        addToList(data.drinks[0].strIngredient4);
    }
    if (data.drinks[0].strIngredient5) {
        addToList(data.drinks[0].strIngredient5);
    }
    if (data.drinks[0].strIngredient6) {
        addToList(data.drinks[0].strIngredient6);
    }
    if (data.drinks[0].strIngredient7) {
        addToList(data.drinks[0].strIngredient7);
    }
    if (data.drinks[0].strIngredient8) {
        addToList(data.drinks[0].strIngredient8);
    }
    if (data.drinks[0].strIngredient9) {
        addToList(data.drinks[0].strIngredient9);
    }
    if (data.drinks[0].strIngredient10) {
        addToList(data.drinks[0].strIngredient10);
    }
    if (data.drinks[0].strIngredient11) {
        addToList(data.drinks[0].strIngredient11);
    }
    if (data.drinks[0].strIngredient12) {
        addToList(data.drinks[0].strIngredient12);
    }
    if (data.drinks[0].strIngredient13) {
        addToList(data.drinks[0].strIngredient13);
    }
    if (data.drinks[0].strIngredient14) {
        addToList(data.drinks[0].strIngredient14);
    }
    if (data.drinks[0].strIngredient15) {
        addToList(data.drinks[0].strIngredient15);
    }
};

function addToList(ingredient) {

    const addIngr = document.createElement("li");
    addIngr.textContent = ingredient;
    ingredientList.appendChild(addIngr);

};

window.addEventListener("load", randomDrink);