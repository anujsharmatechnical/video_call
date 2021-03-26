export default {
  generateRandomString() {
    const crypto = window.crypto || window.msCrypto;
    let array = new Uint32Array(1);
    return crypto.getRandomValues(array);
  },
  maximiseStream(e) {
    // function previousElementSibling is pending somewhere
    let elem = e.target.parentElement.previousElementSibling;
    //function three are pendings(requestFullScreen,mozrequestFullScreen,webkitRequestFullScreen)
    elem.requestFullscreen() ||
      elem.mozRequestFullScreen() ||
      elem.webkitRequestFullScreen() ||
      elem.msRequestFullscreen();
  },
  singleStreamToggleMute(e) {
    if (e.target.classList.contains("fa-microphone")) {
      e.target.parentElement.previousElementSibling.muted = true;
      e.target.classList.add("fa-microphone-slash");
    } else {
      e.target.parentElement.previousElementSibling.muted = false;
      e.target.classList.add("fa-microphone");
      e.target.classList.remove("fa-microphone-slash");
    }
  },
  toggleModel(id, show) {
    let el = document.getElementById(id);
    if (show) {
      el.style.display = "block";
      el.removeAttribute("aria-hidden");
    } else {
      el.style.display("none");
      el.setAttribute("aria-hidden", true);
    }
  },
};
