window.onload = function() {  
    const apiUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/popular.php"

    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                for (let i = 0; i < 6; i++) {
                    const drinkName = data.drinks[i].strDrink;
                    const drinkImgUrl = data.drinks[i].strDrinkThumb;

                    createPageElements(drinkName, drinkImgUrl);
                }
            });
        } else {
            alert("Error: " + response.statusText);
        };
    });
};

function createPageElements(drinkName, drinkImgUrl) {
    const popularDrinkCardContainer = document.getElementById('popularDrinkCardContainer');

    // create the "columns div"
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("columns", "large-4", "small-6");

    // create the "callout div"
    const calloutDiv = document.createElement("div");
    calloutDiv.classList.add("callout", "secondary");

    // create the card title
    const cardTitle = document.createElement("h5");
    cardTitle.textContent = drinkName;
    calloutDiv.appendChild(cardTitle);

    // create the drink image
    const cardImg = document.createElement("img");
    cardImg.setAttribute("src", drinkImgUrl);
    cardImg.setAttribute("style", "width: 200px; height: 200px");
    calloutDiv.appendChild(cardImg);

    // add the calloutDiv to the columnDiv, and then to the page
    columnDiv.appendChild(calloutDiv);
    popularDrinkCardContainer.appendChild(columnDiv);
};