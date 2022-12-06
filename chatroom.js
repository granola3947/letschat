
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAuwEERxKDicxvvh-4IS05vQ0n6NBVAx5Q",
      authDomain: "kwitter-dbf54.firebaseapp.com",
      databaseURL: "https://kwitter-dbf54-default-rtdb.firebaseio.com",
      projectId: "kwitter-dbf54",
      storageBucket: "kwitter-dbf54.appspot.com",
      messagingSenderId: "9214799415",
      appId: "1:9214799415:web:7a25579745488876a999b2",
      measurementId: "G-7NSSWB83V2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="letschatpage.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log("Room name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
