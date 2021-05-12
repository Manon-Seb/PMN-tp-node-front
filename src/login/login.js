const submitBtn = document.querySelector(".login-btn");
const errorMsg = document.querySelector(".error-message");

const onSubmitForm = () => {
  const emailValue = document.querySelector("#email").value;
  const passwordValue = document.querySelector("#password").value;

  var data=`email=${emailValue}&password=${passwordValue}`;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      let response = JSON.parse(this.responseText);

      if(response.message) {
        // si on a un message d'erreur
        errorMsg.textContent = response.message;
        errorMsg.classList.remove("hide");
      }
      else {
        // si l'authentification réussi, on stocke le token dans le localStorage
        localStorage.setItem("token", response.token);
        // puis on redirige à la page des posts
        window.location.replace("http://localhost/post/posts.html");
      }
    }
  });

  xhr.open("POST", "http://localhost:3000/user/login");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.send(data);
}

submitBtn.addEventListener("click", onSubmitForm);