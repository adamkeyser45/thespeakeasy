const searchResultChoiceName = document.getElementById("searchResultChoiceName");
const searchResultChoiceImage = document.getElementById("searchResultChoiceImage");
const searchResultInst = document.getElementById("searchResultInst");
const searchIngrList = document.getElementById("searchIngrList");
const whatYouNeed = document.getElementById("whatYouNeed");
const howYouDo = document.getElementById("howYouDo");

document.onclick = function(event) {
    searchIngrList.innerHTML = "";
    const choice = event.target;
    if (choice.className === "drink") {
        const drinkName = choice.getAttribute("data");    
    
        const apiUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" + drinkName;

        fetch(apiUrl).then(function (response) {
            if (response.ok) {
                // send the parsed JSON data
                response.json().then(function (data) {
                    const drinkTitle = data.drinks[0].strDrink;
                    const drinkImg = data.drinks[0].strDrinkThumb + "/preview";
                    const drinkInst = data.drinks[0].strInstructions;

                    searchResultChoiceName.textContent = drinkTitle;
                    searchResultChoiceImage.setAttribute("src", drinkImg);
                    searchResultInst.textContent = drinkInst;

                    whatYouNeed.textContent = "What You'll Need:"
                    howYouDo.textContent = "How You'll Do It:"
                    listIngredients(data);
                });
            } else {
                alert("Error: " + response.statusText);
            };
        });
    }
};

function listIngredients(data) {

    if (data.drinks[0].strIngredient1) {
        addToList(data.drinks[0].strIngredient1, data.drinks[0].strMeasure1);
    }
    if (data.drinks[0].strIngredient2) {
        addToList(data.drinks[0].strIngredient2, data.drinks[0].strMeasure2);
    }
    if (data.drinks[0].strIngredient3) {
        addToList(data.drinks[0].strIngredient3, data.drinks[0].strMeasure3);
    }
    if (data.drinks[0].strIngredient4) {
        addToList(data.drinks[0].strIngredient4, data.drinks[0].strMeasure4);
    }
    if (data.drinks[0].strIngredient5) {
        addToList(data.drinks[0].strIngredient5, data.drinks[0].strMeasure5);
    }
    if (data.drinks[0].strIngredient6) {
        addToList(data.drinks[0].strIngredient6, data.drinks[0].strMeasure6);
    }
    if (data.drinks[0].strIngredient7) {
        addToList(data.drinks[0].strIngredient7, data.drinks[0].strMeasure7);
    }
    if (data.drinks[0].strIngredient8) {
        addToList(data.drinks[0].strIngredient8, data.drinks[0].strMeasure8);
    }
    if (data.drinks[0].strIngredient9) {
        addToList(data.drinks[0].strIngredient9, data.drinks[0].strMeasure9);
    }
    if (data.drinks[0].strIngredient10) {
        addToList(data.drinks[0].strIngredient10, data.drinks[0].strMeasure10);
    }
    if (data.drinks[0].strIngredient11) {
        addToList(data.drinks[0].strIngredient11, data.drinks[0].strMeasure11);
    }
    if (data.drinks[0].strIngredient12) {
        addToList(data.drinks[0].strIngredient12, data.drinks[0].strMeasure12);
    }
    if (data.drinks[0].strIngredient13) {
        addToList(data.drinks[0].strIngredient13, data.drinks[0].strMeasure13);
    }
    if (data.drinks[0].strIngredient14) {
        addToList(data.drinks[0].strIngredient14, data.drinks[0].strMeasure14);
    }
    if (data.drinks[0].strIngredient15) {
        addToList(data.drinks[0].strIngredient15, data.drinks[0].strMeasure15);
    }
};

function addToList(ingredient, measure) {

    const addIngr = document.createElement("li");
    if (measure === null) {
        addIngr.textContent = ingredient;
        searchIngrList.appendChild(addIngr);
    } else {
        addIngr.textContent = measure + " " + ingredient;
        searchIngrList.appendChild(addIngr);
    }
};
