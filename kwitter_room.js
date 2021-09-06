
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAJQ9H1SDYxtNkRgX1NvODSl52rj5vDtYk",
      authDomain: "veer38-nfgx.firebaseapp.com",
      databaseURL: "https://veer38-nfgx-default-rtdb.firebaseio.com",
      projectId: "veer38-nfgx",
      storageBucket: "veer38-nfgx.appspot.com",
      messagingSenderId: "682166828842",
      appId: "1:682166828842:web:0ad65627310bdc11d8e853"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="welcome "+user_name+"!";


function add_room(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey
      //Start code
      console.log("room_name-"+Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")

      window.location="index.html"
}