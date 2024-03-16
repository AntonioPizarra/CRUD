const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide")
})


btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide")
})

/************************************* VALIDACIONES *************************************/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');

    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateInput(this);
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        inputs.forEach(input => {
            validateInput(input);
        });
    });

    function validateInput(input) {
        const errorMessage = input.nextElementSibling;
        const value = input.value.trim();
        const label = input.closest('label');

        switch(input.type) {
            case 'text':
                if (!value) {
                    showError(label, 'Campo obligatorio');
                } else if (input.placeholder === 'Nombre Completo' && !/^[a-zA-Z\s]{2,}$/.test(value)) {
                    showError(label, 'Formato incorrecto (Solo letras, mínimo 2 carácteres)');
                } else if (input.placeholder === 'Nombre de Usuario' && !/^[a-zA-Z0-9]{7,15}$/.test(value)) {
                    showError(label, 'Formato incorrecto (Solo letras y números, entre 7 y 15 carácteres )');
                } else if (input.placeholder === 'Número Móvil' && !/^\d{9}$/.test(value)) {
                    showError(label, 'Formato incorrecto (9 números)');
                } else {
                    hideError(label);
                }
                break;
            case 'email':
                if (!value) {
                    showError(label, 'Campo obligatorio');
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    showError(label, 'Formato incorrecto');
                } else {
                    hideError(label);
                }
                break;
            case 'password':
                if (!value) {
                    showError(label, 'Campo obligatorio');
                } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/.test(value)) {
                    showError(label, 'Formato incorrecto (Mínimo 7 carácteres.)');
                } else {
                    hideError(label);
                }
                break;
            case 'radio':
                if (!form.querySelector('input[name="' + input.name + '"]:checked')) {
                    showError(label, 'Debe seleccionar una opción');
                } else {
                    hideError(label);
                }
                break;
            case 'select-one':
                if (!value) {
                    showError(label, 'Debe seleccionar una opción');
                } else {
                    hideError(label);
                }
                break;
        }
    }

    // Función para mostrar mensaje de error
    function showError(label, message) {
        const errorMessage = label.querySelector('.error-message');
        errorMessage.textContent = message;
        errorMessage.style.display = 'inline-block';
        label.classList.add('input-error');
    }

    // Función para ocultar mensaje de error
    function hideError(label) {
        const errorMessage = label.querySelector('.error-message');
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        label.classList.remove('input-error');
    }
});
