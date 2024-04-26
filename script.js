const signUpForm = document.querySelector("#sign-up-form");
const emailField = document.querySelector("#email");
const errorMessage = document.querySelector("#email-error");
const modal = document.querySelector("#success-modal");
const closeBtn = document.querySelector("#success-modal button");

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  emailField.classList.remove("error");
  errorMessage.classList.remove("error");

  const email = emailField.value;

  if (EMAIL_REGEX.test(email)) {
    modal.showModal();
    emailField.value = "";
    return;
  }

  emailField.classList.add("error");
  errorMessage.classList.add("error");
});

closeBtn.addEventListener("click", () => {
  modal.close();
});
