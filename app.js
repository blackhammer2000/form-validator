const form = document.querySelector("form");
const nameInput = form.querySelector("[data-name]");
const emailInput = form.querySelector("[data-email]");
const passwordInput = form.querySelector("[data-password]");
const confirmPasswordInput = form.querySelector("[data-confirm-password]");

nameInput.addEventListener("keyup", (e) => {
  // console.log(e.target.value)
  const nameInput = e.target;
  const nameCapsRegex = /[A-Z]/;
  const nameLowerRegex = /[a-z]/;
  const currentValue = nameInput.value.trim();
  if (
    currentValue.match(nameCapsRegex) &&
    currentValue.match(nameLowerRegex) &&
    currentValue.length >= 5
  ) {
    nameInput.classList.remove("bg-danger");
    nameInput.classList.remove("bg-light");
    nameInput.classList.add("bg-success");
  } else {
    nameInput.classList.remove("bg-light");
    nameInput.classList.remove("bg-sucess");
    nameInput.classList.add("bg-danger");
  }
});

emailInput.addEventListener("keyup", (e) => {
  // console.log(e.target.value)
  const input = e.target;
  const nameLowerRegex = /[a-z]/;
  const atSymbolRegex = /[@]/;
  const currentValue = input.value.trim();
  if (
    currentValue.match(nameLowerRegex) &&
    currentValue.match(atSymbolRegex) &&
    currentValue.length >= 5
  ) {
    input.classList.remove("bg-danger");
    input.classList.remove("bg-light");
    input.classList.add("bg-success");
  } else {
    input.classList.remove("bg-light");
    input.classList.remove("bg-sucess");
    input.classList.add("bg-danger");
  }
});

passwordInput.addEventListener("keyup", (e) => {
  // console.log(e.target.value)
  const input = e.target;
  const upperRegex = /[A-Z]/;
  const lowerRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const whiteSpaceRegex = /\s/;
  const passwordRegex =
    upperRegex && lowerRegex && digitRegex && whiteSpaceRegex;

  const currentValue = input.value.trim();
  if (
    currentValue.match(upperRegex) &&
    currentValue.match(lowerRegex) &&
    currentValue.match(digitRegex) &&
    !currentValue.match(whiteSpaceRegex) &&
    currentValue.length >= 2
  ) {
    input.classList.remove("bg-danger");
    input.classList.remove("bg-light");
    input.classList.add("bg-success");
  } else {
    input.classList.remove("bg-light");
    input.classList.remove("bg-sucess");
    input.classList.add("bg-danger");
  }
});

confirmPasswordInput.addEventListener("keyup", (e) => {
  // console.log(e.target.value)
  const input = e.target;
  const upperRegex = /[A-Z]/;
  const lowerRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const whiteSpaceRegex = /\s/;

  const currentValue = input.value.trim();
  if (
    currentValue.match(upperRegex) &&
    currentValue.match(lowerRegex) &&
    currentValue.match(digitRegex) &&
    !currentValue.match(whiteSpaceRegex) &&
    currentValue.length >= 2
  ) {
    input.classList.remove("bg-danger");
    input.classList.remove("bg-light");
    input.classList.add("bg-success");
  } else {
    input.classList.remove("bg-light");
    input.classList.remove("bg-sucess");
    input.classList.add("bg-danger");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordInput = form.querySelector("[data-password]");
  const confirmPasswordInput = form.querySelector("[data-confirm-password]");

  if (passwordInput.value === confirmPasswordInput.value) {
    location.href = `./pages/success.html`;
  } else {
    location.href = `./pages/failed.html`;
  }
});
