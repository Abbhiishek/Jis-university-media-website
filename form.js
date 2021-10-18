var firebaseConfig = {
    apiKey: "AIzaSyCH3BK4qK6EG039Dm2K0Khzl9bLzo1lC5g",
    authDomain: "login-signup-form-5cb45.firebaseapp.com",
    projectId: "login-signup-form-5cb45",
    storageBucket: "login-signup-form-5cb45.appspot.com",
    messagingSenderId: "1047209836294",
    appId: "1:1047209836294:web:b66189eff3c4355b0e2887",
    measurementId: "G-NXQF2WW747"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

var datab  = firebase.database().ref('login-data');
function SignUp(){
    var email = document.getElementById('eemail');
    var password = document.getElementById('ppassword');
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(function(){
    
    }).catch(function (error){
        var errorcode = error.code;
        var errormsg = error.message;
    });
    }
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("SignIn Successfully"+ email); 
}
document.getElementById('createAccount').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('Username'),
        email : getId('eemail'),
        password : getId('ppassword')
    });
    alert("Successfully Signed Up");
    console.log("Successfully Signed Up");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
//signOut
function SignOut() {
    auth().signOut();
    alert("SignOut Successfully from System");
}
//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);
        location.replace("home.html")

    } else {
        alert("No Active user Found")
    }
})