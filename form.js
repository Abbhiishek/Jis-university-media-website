// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB1-7QDAYfcdEhZRdLDytR0eLuSyfVjqsk",
    authDomain: "form-fb2df.firebaseapp.com",
    projectId: "form-fb2df",
    storageBucket: "form-fb2df.appspot.com",
    messagingSenderId: "490852859264",
    appId: "1:490852859264:web:874b17b024744fa0bc5565",
    measurementId: "G-3GGRW9YGKY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//signup function
function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    //
    promise.catch(e => alert(e.message));
    alert("SignUp Successfully");
}

//signIN function
function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("SignIn Successfully");

}


//signOut

function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);

    } else {
        alert("No Active user Found")
    }
})
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();    
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
       
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});