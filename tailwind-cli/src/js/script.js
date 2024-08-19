document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("submit");
  const successMessage = document.getElementById("success-alert");

  const errors = {
    firstName: document.getElementById("firstnameP"),
    lastName: document.getElementById("lastnameP"),
    email: document.getElementById("emailP"),
    queryType: document.getElementById("radioP"),
    message: document.querySelector(".my-3 .error"),
    checkbox: document.getElementById("checkboxP"),
  };

  const formHandler = (event) => {
    event.preventDefault();

    for (const key in errors) {
      errors[key].classList.add("hidden");
    }
    let isValid = true;

    const firstName = document.getElementById("firstName").value.trim();
    if (!firstName) {
      errors.firstName.classList.remove("hidden");
      isValid = false;
    }

    const lastName = document.getElementById("lastName").value.trim();
    if (!lastName) {
      errors.lastName.classList.remove("hidden");
      isValid = false;
    }

    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email || !emailPattern.test(email)) {
      errors.email.classList.remove("hidden");
      isValid = false;
    }

    const radio1 = document.getElementById("radio1").checked;
    const radio2 = document.getElementById("radio2").checked;
    if (!radio1 && !radio2) {
      errors.queryType.classList.remove("hidden");
      isValid = false;
    }

    const message = document
      .querySelector(".my-3 input[type='text']")
      .value.trim();
    if (!message) {
      errors.message.classList.remove("hidden");
      isValid = false;
    }

    const checkbox = document.getElementById("checkBox").checked;
    if (!checkbox) {
      errors.checkbox.classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      successMessage.classList.remove("hidden");
      form.reset();
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 5000);
    }
  };
  form.addEventListener("submit", formHandler);
});
