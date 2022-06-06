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
   

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}
      } });  }); }
getData();
