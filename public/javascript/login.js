async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', { 
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) { // .ok adds error handling
            console.log('success');
            alert("Account Created");
            location.href = '/';            
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

async function loginFormHandler(event) {
    console.log("Attempted to Login")
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    console.log(email)
    const password = document.querySelector('#password-login').value.trim();
    console.log(password)
  
    if (email && password) {
      console.log("If called")
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(function(){
        document.location.replace('/');
      })
      .catch(err => console.log(err));
  
      // if (response.ok) {
      //   document.location.replace('/');
      // } else {
      //   alert(response.statusText);
      // }
    }
  }
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);