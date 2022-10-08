const firebaseConfig = {
    apiKey: "AIzaSyC7UtB05tpy0KIcNXBlBr7xmkbRaqXYth8",
    authDomain: "lets-chat-practice.firebaseapp.com",
    databaseURL: "https://lets-chat-practice-default-rtdb.firebaseio.com",
    projectId: "lets-chat-practice",
    storageBucket: "lets-chat-practice.appspot.com",
    messagingSenderId: "1098536893222",
    appId: "1:1098536893222:web:8100f7109438c3d536dfe7",
    measurementId: "G-M3E6Q4YRQ9"
  };
  

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}