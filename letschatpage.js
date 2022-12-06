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

user_name = localStorage.getItem("user_name")

function getData() { firebase.database().ref("/"+room_name).on('value', 
function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData =
   childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childkey;
message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>+name+</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes:"+like+"</button>";

row=name_with_tag+ message_with_tag + like_button;
document.getElementById("output").innerHTML +=row;
} }); }); }
getData();

function updateLike(message_id){
  console.log("clicked on like button - "+message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id),update({
    like: updated_likes
});
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("remove_name");
  window.location("index.html");
}

