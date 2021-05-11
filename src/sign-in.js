const submitBtn = document.querySelector(".signIn");
const errorMsg = document.querySelector(".error-message");

const onSubmitForm = () => {
  const emailValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#password").value;
  let roleValue;

  if (emailValue.includes("admin")) {
    roleValue = "admin";
  }
  else {
    roleValue = "user";
  }

  var data=`email=${emailValue}&password=${passwordValue}&role=${roleValue}`;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      let response = JSON.parse(this.responseText);

      if((response.message).includes("Erreur")) {
        errorMsg.textContent = response.message;
        errorMsg.classList.remove("hide");
      }
      else {
        document.querySelector(".info-message").classList.add("hide");
        document.querySelector(".main").innerHTML += `
        <p>${response.message}</p>
        <p><a href="./login/login.html">Connectez-vous sans attendre !</a></p>
      `;
      }
    }
  });

  xhr.open("POST", "http://localhost:3000/user/register");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.send(data);
}

submitBtn.addEventListener("click", onSubmitForm);