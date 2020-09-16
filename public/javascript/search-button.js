async function findDrink(event) {
    event.preventDefault();

    console.log("Hello, the button works!");

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
                        console.log(data.drinks[i].strDrink);
    
                        const drinkTitle = document.createElement("p");
                        drinkTitle.textContent = data.drinks[i].strDrink;
                        drinkNameDiv.appendChild(drinkTitle);
                    }
    
                    console.log("========================")
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
                        console.log(data.drinks[i].strDrink);
    
                        const drinkTitle = document.createElement("p");
                        drinkTitle.classList.add("horizontal-center");
                        drinkTitle.textContent = data.drinks[i].strDrink;
                        drinkNameDiv.appendChild(drinkTitle);
                    }
    
                    console.log("========================")
                });
            } else {
                alert("Error: " + response.statusText);
            };
        });
    }

    else if (drinkName && drinkIngr) {
        // Display message that says only one field at a time

        alert("Search by EITHER drink name OR alchohol");
    }

    else {
        // Display message that says to put in one of the fields

        alert("Enter in a Drink's Name or an Alcohol");
    }

    document.getElementById('drinkName').value = "";
    document.getElementById('drinkIngr').value = "";
};


document.querySelector('#drinkSearchBtn').addEventListener('click', findDrink);