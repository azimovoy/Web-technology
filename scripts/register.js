
let email_put = document.getElementById("email_id");
let password_put = document.getElementById("password_id");
let name_put = document.getElementById("name_id");
let submit_btn = document.getElementById("button_id");
let form_var = document.getElementById("form_id");
let error_message = document.getElementById("errors");

function validateForm() {
    let email = email_put.value;
    let password = password_put.value;
    let name = name_put.value;
    let email_form = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let errors_list = [];

    if (!email_form.test(email)) {
        errors_list.push("Пожалуйста, введите корректный email.");
    }

    if(name.length < 3) {
        errors_list.push("Имя должно быть не менее 3 символов.");
    }

    if (password.length < 8) {
        errors_list.push("Пароль должен быть не менее 8 символов.");
    }

    if (errors_list.length > 0) {
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
form_var.addEventListener("submit", function(event) {
    event.preventDefault();  
    alert("Форма отправлена!");
});




