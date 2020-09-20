async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[name="recipe-name"]').value;
    const instructions = document.querySelector('textarea[name="recipe-instructions"]').value;
    const ingredient1 = document.querySelector('input[name="ingredient1"]').value;
    const ingredient2 = document.querySelector('input[name="ingredient2"]').value;
    const ingredient3 = document.querySelector('input[name="ingredient3"]').value;
    const ingredient4 = document.querySelector('input[name="ingredient4"]').value;
    console.log(name)
  
  
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        instructions,
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/view-recipes');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.recipe-form').addEventListener('submit', newFormHandler);