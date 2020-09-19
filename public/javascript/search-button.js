// async function findDrink(event) {
//     event.preventDefault();

//     const drinkName = document.getElementById('drinkName').value;
//     const drinkIngr = document.getElementById('drinkIngr').value;
//     const drinkNameDiv = document.getElementById('drinkNameDiv');
//     const drinkNameDivTitle = document.getElementById('drinkNameDivTitle');

//     if (drinkName && !drinkIngr) {
//         // search for drink by name
//         const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName;

//         fetch(apiUrl).then(function (response) {
//             drinkNameDiv.innerHTML = "";
    
//             if (response.ok) {
//                 drinkNameDivTitle.removeAttribute('hidden');
//                 drinkNameDiv.removeAttribute('hidden');

//                 // send the parsed JSON data
//                 response.json().then(function (data) {
    
//                     for (let i = 0; i < data.drinks.length; i++) {
//                         const listItem = document.createElement("li");
//                         const drinkTitle = document.createElement("a");
//                         drinkTitle.textContent = data.drinks[i].strDrink;
//                         listItem.appendChild(drinkTitle);
//                         drinkNameDiv.appendChild(listItem);
//                     }
//                 });
//             } else {
//                 alert("Error: " + response.statusText);
//             };
//         });
//     }

//     else if (!drinkName && drinkIngr) {
//         // search for drink by ingredient
//         const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + drinkIngr;

//         fetch(apiUrl).then(function (response) {
//             drinkNameDiv.innerHTML = "";
    
//             if (response.ok) {
//                 drinkNameDivTitle.removeAttribute('hidden');
//                 drinkNameDiv.removeAttribute('hidden');

//                 // send the parsed JSON data
//                 response.json().then(function (data) {
    
//                     for (let i = 0; i < data.drinks.length; i++) {
//                         const listItem = document.createElement("li");
//                         const drinkTitle = document.createElement("a");
//                         drinkTitle.textContent = data.drinks[i].strDrink;
//                         listItem.appendChild(drinkTitle);
//                         drinkNameDiv.appendChild(listItem);
//                     }
//                 });
//             } else {
//                 alert("Error: " + response.statusText);
//             };
//         });
//     }

//     else if (drinkName && drinkIngr) {
//         alert("Search by EITHER drink name OR alchohol");
//     }

//     else {
//         alert("Enter in a Drink's Name or an Alcohol");
//     }

//     document.getElementById('drinkName').value = "";
//     document.getElementById('drinkIngr').value = "";
// };


// document.querySelector('#drinkSearchBtn').addEventListener('click', findDrink);

// Get the modal
const modal = document.getElementById("drinkNameModal");

// Get the button that opens the modal
const btn = document.getElementById("drinkSearchBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}