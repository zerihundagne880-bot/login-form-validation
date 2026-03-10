const qs = id => document.getElementById(id);

const tabRegister = qs('tabRegister');
const tabLogin = qs('tabLogin');

const registerForm = qs('registerForm');
const loginForm = qs('loginForm');

tabRegister.onclick = () => {
 registerForm.classList.remove("hidden");
 loginForm.classList.add("hidden");
};

tabLogin.onclick = () => {
 loginForm.classList.remove("hidden");
 registerForm.classList.add("hidden");
};