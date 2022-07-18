
// ADD YOUR FIREBASE LINKS


function addroom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
       purpose: "Adding Room Name"
 });

 localStorage.setItem("Roomname",room_name);

 window.location = "index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
       console.log("room_name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}

function redirectToroomname(name){
console.log(name);
localStorage.setItem("room_name",name);
Window.location="index.html";

}
