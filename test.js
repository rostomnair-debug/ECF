'use strict';
/*
//Implémenter le JS de ma page
const inputNom = document.getElementById("NomInput");
const inputPreNom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
inputNom.addEventListener("keyup", validateForm); 
inputPreNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);
//Function permettant de valider tout le formulaire
function validateForm(){
    validateRequired(inputNom);
    validateRequired(inputPreNom);
}
function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}








// ====================================================== //
// =============== TESTER LE MOT DE PASSE =============== //
// ====================================================== //

function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
// ====================================================== //
// ======= VÉRIFIER LA VALIDATION DU MOT DE PASSE ======= //
// ====================================================== //

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.add("is-invalid");
        inputConfirmPwd.classList.remove("is-valid");
        return false;
    }
}

// ====================================================== //
// =============== TESTER L'ADRESSE E-MAIL ============== //
// ====================================================== //

function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
*/


// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('EmailInput');
    const passwordInput = document.getElementById('PasswordInput');
    const validatePasswordInput = document.getElementById('ValidatePasswordInput');
    const form = document.getElementById('form');
    const chauffeurRadio = document.getElementById('chauffeur');
    const chauffeurPassagerRadio = document.getElementById('chauffeurPassager');

    if (!emailInput || !passwordInput || !validatePasswordInput || !form) {
        return;
    }

    // Expression régulière pour valider l'email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Expression régulière pour valider le mot de passe
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    // Fonction pour valider l'email
    function validateEmail() {
        if (emailRegex.test(emailInput.value)) {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
            return true;
        } else {
            emailInput.classList.add('is-invalid');
            emailInput.classList.remove('is-valid');
            return false;
        }
    }

    // Fonction pour valider le mot de passe
    function validatePassword() {
        if (passwordRegex.test(passwordInput.value)) {
            passwordInput.classList.add('is-valid');
            passwordInput.classList.remove('is-invalid');
            return true;
        } else {
            passwordInput.classList.add('is-invalid');
            passwordInput.classList.remove('is-valid');
            return false;
        }
    }

    // Fonction pour valider la confirmation du mot de passe
    function validatePasswordConfirm() {
        if (validatePassword() && passwordInput.value === validatePasswordInput.value && validatePasswordInput.value.length > 0) {
            validatePasswordInput.classList.add('is-valid');
            validatePasswordInput.classList.remove('is-invalid');
            return true;
        } else {
            validatePasswordInput.classList.add('is-invalid');
            validatePasswordInput.classList.remove('is-valid');
            return false;
        }
    }

    // Écouteurs d'événements pour la validation en temps réel
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    validatePasswordInput.addEventListener('input', validatePasswordConfirm);

    // Validation au moment de la soumission du formulaire
    form.addEventListener('submit', function(event) {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isPasswordConfirmValid = validatePasswordConfirm();

        if (!isEmailValid || !isPasswordValid || !isPasswordConfirmValid) {
            event.preventDefault(); // Empêche la soumission si les champs ne sont pas valides
            event.stopPropagation();
            return;
        }

        const souhaiteDevenirChauffeur = (chauffeurRadio && chauffeurRadio.checked) ||
          (chauffeurPassagerRadio && chauffeurPassagerRadio.checked);

        if (souhaiteDevenirChauffeur) {
            event.preventDefault();
            window.location.href = 'form_chauffeur.html';
        }
    });
});




