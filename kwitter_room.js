const firebaseConfig = {
      apiKey: "AIzaSyAUzuPuAugS9ZfMnHz79NnLuZAT6lj7kys",
      authDomain: "kwitter-2-7a649.firebaseapp.com",
      databaseURL: "https://kwitter-2-7a649-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-7a649",
      storageBucket: "kwitter-2-7a649.appspot.com",
      messagingSenderId: "237609187819",
      appId: "1:237609187819:web:ef5694d756997984a081ae",
      measurementId: "G-QF24DPP8K6"
    };
    
    // Initialize Firebase
    firebase.initializeApp (initializeApp(firebaseConfig));
   


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html";
}
   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.locataion = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}