async function findDrink(event) {
    event.preventDefault();

    const drinkName = document.getElementById('drinkName').value;
    const drinkIngr = document.getElementById('drinkIngr').value;
    const drinkNameDiv = document.getElementById('drinkNameDiv');

    console.log(drinkName);
    console.log(drinkIngr);

    if (drinkName && !drinkIngr) {
        // search for drink by name
        const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;

        fetch(apiUrl).then(function (response) {
            drinkNameDiv.innerHTML = "";
    
            if (response.ok) {
                // send the parsed JSON data
                response.json().then(function (data) {
    
                    for (let i = 0; i < data.drinks.length; i++) {
                        const drinkTitle = document.createElement("p");
                        drinkTitle.textContent = data.drinks[i].strDrink;
                        drinkNameDiv.appendChild(drinkTitle);
                    }
                });
            } else {
                alert("Error: " + response.statusText);
            };
        });
    }

    else if (!drinkName && drinkIngr) {
        // search for drink by ingredient
        const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkIngr;

        fetch(apiUrl).then(function (response) {
            drinkNameDiv.innerHTML = "";
    
            if (response.ok) {
                // send the parsed JSON data
                response.json().then(function (data) {
    
                    for (let i = 0; i < data.drinks.length; i++) {
                        const drinkTitle = document.createElement("p");
                        drinkTitle.textContent = data.drinks[i].strDrink;
                        drinkNameDiv.appendChild(drinkTitle);
                    }
                });
            } else {
                alert("Error: " + response.statusText);
            };
        });
    }

    else if (drinkName && drinkIngr) {
        alert("Search by EITHER drink name OR alchohol");
    }

    else {
        alert("Enter in a Drink's Name or an Alcohol");
    }

    document.getElementById('drinkName').value = "";
    document.getElementById('drinkIngr').value = "";
};


document.querySelector('#drinkSearchBtn').addEventListener('click', findDrink);