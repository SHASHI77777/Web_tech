let login = (e) => {
  event.preventDefault();

  let emailInput = e.target[0];
  let PassInput = e.target[1];

  let credintials = {
    userEmail: "shashircciit07@gmail.com",
    password: "12345",
  };

  let { userEmail, password } = credintials;

  let err = " border: solid 2px red";

  if (emailInput.value === userEmail && PassInput.value === password) {
    window.location = "./Home.html";
  } else {
    emailInput.style.cssText = err;
    PassInput.style.cssText = err;
  }
};
