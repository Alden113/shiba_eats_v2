import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

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
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("登入成功!");
            window.location.href = "grand.html";
        })
        .catch((error) => {
            const errorCode = error.code
            let errorMessage;

            // Map Firebase error codes to custom messages
            switch (errorCode) {
                case 'auth/invalid-email':
                    errorMessage = "無效的Email格式";
                    break;
                case 'auth/user-not-found':
                    errorMessage = "沒有找到使用者";
                    break;
                case 'auth/invalid-credential':
                    errorMessage = "錯誤的驗證資訊";
                    break;
                default:
                    errorMessage = "登入失敗，請稍後再試";
                    break;
            }

            alert("登入失敗: " + errorMessage);
        });
})
