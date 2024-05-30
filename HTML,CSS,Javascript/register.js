import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0m4_gemKYZ_VLKxdaUyXxi6K5aoMKRbs",
  authDomain: "shiba-eats-ea8a4.firebaseapp.com",
  databaseURL: "https://shiba-eats-ea8a4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shiba-eats-ea8a4",
  storageBucket: "shiba-eats-ea8a4.appspot.com",
  messagingSenderId: "94912530940",
  appId: "1:94912530940:web:f0e6bc45f0b2ace29c8a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event){
    event.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("註冊成功!");
            window.location.href = "type.html";
        })
        .catch((error) => {
            const errorCode = error.code
            let errorMessage;

            // Map Firebase error codes to custom messages
            switch (errorCode) {
                case 'auth/invalid-email':
                    errorMessage = "錯誤的Email格式";
                    break;
                case 'auth/weak-password':
                    errorMessage = "密碼強度不足";
                    break;
                case 'auth/email-already-in-use':
                    errorMessage = "Email已經被註冊";
                    break;
                default:
                    errorMessage = "錯誤的Email或密碼";
                    break;
            }
            alert("註冊失敗: " + errorMessage);
        });
})
