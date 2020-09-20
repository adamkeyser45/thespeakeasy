const randoDrinkImg = document.getElementById("randoDrinkImg");
const randoDrinkTitle = document.getElementById("randoDrinkTitle");
const randoDrinkInstr = document.getElementById("randoDrinkInstr");
const ingredientList = document.getElementById("ingredientList");

function randomDrink(event) {
    const apiUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/random.php";


    
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
                
                listIngredients1(data);
            });
        } else {
            alert("Error: " + response.statusText);
        };
    });

};

function listIngredients1(data) {
    console.log(data);
    if (data.drinks[0].strIngredient1) {
        addToList1(data.drinks[0].strIngredient1, data.drinks[0].strMeasure1);
    }
    if (data.drinks[0].strIngredient2) {
        addToList1(data.drinks[0].strIngredient2, data.drinks[0].strMeasure2);
    }
    if (data.drinks[0].strIngredient3) {
        addToList1(data.drinks[0].strIngredient3, data.drinks[0].strMeasure3);
    }
    if (data.drinks[0].strIngredient4) {
        addToList1(data.drinks[0].strIngredient4, data.drinks[0].strMeasure4);
    }
    if (data.drinks[0].strIngredient5) {
        addToList1(data.drinks[0].strIngredient5, data.drinks[0].strMeasure5);
    }
    if (data.drinks[0].strIngredient6) {
        addToList1(data.drinks[0].strIngredient6, data.drinks[0].strMeasure6);
    }
    if (data.drinks[0].strIngredient7) {
        addToList1(data.drinks[0].strIngredient7, data.drinks[0].strMeasure7);
    }
    if (data.drinks[0].strIngredient8) {
        addToList1(data.drinks[0].strIngredient8, data.drinks[0].strMeasure8);
    }
    if (data.drinks[0].strIngredient9) {
        addToList1(data.drinks[0].strIngredient9, data.drinks[0].strMeasure9);
    }
    if (data.drinks[0].strIngredient10) {
        addToList1(data.drinks[0].strIngredient10, data.drinks[0].strMeasure10);
    }
    if (data.drinks[0].strIngredient11) {
        addToList1(data.drinks[0].strIngredient11, data.drinks[0].strMeasure11);
    }
    if (data.drinks[0].strIngredient12) {
        addToList1(data.drinks[0].strIngredient12, data.drinks[0].strMeasure12);
    }
    if (data.drinks[0].strIngredient13) {
        addToList1(data.drinks[0].strIngredient13, data.drinks[0].strMeasure13);
    }
    if (data.drinks[0].strIngredient14) {
        addToList1(data.drinks[0].strIngredient14, data.drinks[0].strMeasure14);
    }
    if (data.drinks[0].strIngredient15) {
        addToList1(data.drinks[0].strIngredient15, data.drinks[0].strMeasure15);
    }
};

function addToList1(ingredient, measure) {
    const addIngr = document.createElement("li");
    if (measure === null) {
        addIngr.textContent = ingredient;
        ingredientList.appendChild(addIngr);
    } else {
        addIngr.textContent = measure + " " + ingredient;
        ingredientList.appendChild(addIngr);
    }
};

window.addEventListener("load", randomDrink);