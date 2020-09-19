async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="recipe-name"]').value;
    const url = document.querySelector('input[name="recipe-url"]').value;
    const instructions = document.querySelector('input[name="recipe-instructions"]').value;
    const ingredient1 = document.querySelector('input[name="ingredient1"]').value;
    const ingredient2 = document.querySelector('input[name="ingredient2"]').value;
    const ingredient3 = document.querySelector('input[name="ingredient3"]').value;
    const ingredient4 = document.querySelector('input[name="ingredient4"]').value;
  
  
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        url,
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
      document.location.replace('/recipe-dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);