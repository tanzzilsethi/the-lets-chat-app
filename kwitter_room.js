const firebaseConfig = {
    apiKey: "AIzaSyDS0t9V0czJ9ImFJJu3Shodla1HQ0z_-7Q",
    authDomain: "let-s-chat-be5f9.firebaseapp.com",
    databaseURL: "https://let-s-chat-be5f9-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-be5f9",
    storageBucket: "let-s-chat-be5f9.appspot.com",
    messagingSenderId: "633109242646",
    appId: "1:633109242646:web:fd65a2dea5dd1fc7f92637",
    measurementId: "G-Z3GTBBGEQP"
  };

  function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).ubdate({
            purpose : "adding room name"
      });

      localStoragel.setItem("room_name",room_name);

      window.location = "kwitter_room.html";

}

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -"+ Room_names );
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div></hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_room.html";

}
  
