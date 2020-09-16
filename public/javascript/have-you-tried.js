const randoDrinkImg = document.getElementById("randoDrinkImg");
const randoDrinkTitle = document.getElementById("randoDrinkTitle");
const randoDrinkInstr = document.getElementById("randoDrinkInstr");
// const ingredientList = document.getElementById("ingredientList");

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
            });
        } else {
            alert("Error: " + response.statusText);
        };
    });

};

window.addEventListener("load", randomDrink);