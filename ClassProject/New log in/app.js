let loginpage = (e) => {
    e.preventDefault();
  
    let emailInput = e.target[0];
    let pswdInput = e.target[1];
  
    let credentials = {
      userEmail: "shashircciit07@gmail.com",
      password: "12345",
    };
  
    let { userEmail, password } = credentials;
  
    let errorStyle ='border: solid 2px red';
    let successStyle = 'border: solid 2px green';
  
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    emailInput.style.cssText = '';
    pswdInput.style.cssText = '';
  
 
    let errorMessage = '';
  
    
    if (!emailInput.value || !pswdInput.value) {
      errorMessage = "Both fields are required!";
    } else if (!emailPattern.test(emailInput.value)) {
      errorMessage = "Please enter a valid email!";
    } else if (emailInput.value !== userEmail || pswdInput.value !== password) {
      errorMessage = "Incorrect email or password!";
    }
  
    if (errorMessage) {
    
      emailInput.style.cssText = errorStyle;
      pswdInput.style.cssText = errorStyle;
      alert(errorMessage); 
    } else {
     
      emailInput.style.cssText = successStyle;
      pswdInput.style.cssText = successStyle;
      window.location = "./index.html"; 
    }
  }