
const email_put = document.getElementById("email_id");
const password_put = document.getElementById("password_id");
const submit_btn = document.getElementById("button_id");
const form = document.getElementById("form");
const error_message = document.getElementById("errors");

function validateForm() {
    const email = email_put.value;
    const password = password_put.value;
    const email_form = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let errors_list = [];

    if (!email_form.test(email)) {
        errors_list.push("Пожалуйста, введите корректный email.");
    }

    if (password.length < 8) {
        errors_list.push("Пароль должен быть не менее 8 символов.");
    }

    if (errors.length > 0) {
        error_message.innerHTML = "<ul>" + errors_list.map(item => `<li>${item}</li>`).join("") + "</ul>";
        submit_btn.disabled = true; 
    } else {
        error_message.innerHTML = ""; 
        submit_btn.disabled = false; 
    }

    if (email_form.test(email) && password.length >= 8) {
        submit_btn.disabled = false;
    } else {
        submit_btn.disabled = true;  
    }
}

email_put.addEventListener("input", validateForm);
password_put.addEventListener("input", validateForm);
form.addEventListener("submit", function(event) {
    event.preventDefault();  
    alert("Форма отправлена!");
});




