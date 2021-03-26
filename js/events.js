// const e = require("cors");
// const { default: helpers } = require("./helpers");
import helpers from "./helpers.js";

//when the create room button is clicked
document.getElementById("create-room").addEventListener("click", (e) => {
  e.preventDefault();
  let roomName = document.querySelector("#room-name").value;
  let yourName = document.querySelector("#your-name").value;

  if (roomName && yourName) {
    //remove error message if any occured
    //create div with id err msg is pending
    document.querySelector("#err-msg").innerHTML = "";

    //save the user's name is session storage
    sessionStorage.setItem("username", yourName);

    //create room link
    let roomLink = `${location.origin}?room=${roomName
      .trim()
      .replace("", "_")}_${helpers.generateRandomString()}`;
    //show message with link to room
    //id room-created inside index is still pending
    document.querySelector(
      "#room-created"
    ).innerHTML = `room successfully created .click <a href='${roomLink}'>here</a> to enter the room.
        share the room  link with your partner .`;

    //empty the values
    document.querySelector("#room-name").value = "";
    document.querySelector("#your-name").value = "";
  } else {
    document.querySelector("#err-msg").innerHTML = "all fields are required";
  }
});

//when the enter room button is clicked

document.getElementById("enter-room").addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.querySelector("#username").value;
  if (name) {
    //remove error message,if any
    document.querySelector("#err-msg-username").innerHTML = "";

    //save the user name in session storage
    sessionStorage.setItem("username", name);

    //reload room
    location.reload();
  } else {
    document.querySelector("#err-msg-username").innerHTML =
      "please input your name";
  }
});
document.addEventListener('click',(e)=>{
  if(e.target && e.target.classList.contains('expand-remote-video')){
    //maximise stream function is pending in helper js
    helpers.maximiseStream(e);
  } else if (e.target && e.target.classList.contains('mute-remote-mic')){
    // singleStreamToggleMute function is also pending
    helpers.singleStreamToggleMute(e);
  }
  });
  document.getElementById('closemodel').addEventListener('click',()=>{
    // function toggleModel is also pending in helper js
    helpers.toggleModel('recording-options-modal',false);
  });

;
