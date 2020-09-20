const searchResultChoiceName = document.getElementById("searchResultChoiceName");
const searchResultChoiceImage = document.getElementById("searchResultChoiceImage");
const searchResultInst = document.getElementById("searchResultInst");

document.onclick = function(event) {
    const choice = event.target;
    if (choice.className === "drink") {
        const drinkName = choice.getAttribute("data");    
    
        const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;

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
                });
            } else {
                alert("Error: " + response.statusText);
            };
        });

    }
    
    

    
}
