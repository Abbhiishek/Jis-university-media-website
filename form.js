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
const app = initializeApp(firebaseConfig);



//signup function
function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })