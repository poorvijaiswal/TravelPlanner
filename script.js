
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2k8z-WwMm95P78ATs7kT28h_lwtVxMNM",
    authDomain: "travelplanner-78696.firebaseapp.com",
    projectId: "travelplanner-78696",
    storageBucket: "travelplanner-78696.appspot.com",
    messagingSenderId: "250574465381",
    appId: "1:250574465381:web:de8f4d51b687215b0ad98c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();
    alert("working");
})
