// an arrow function that runs on load, it defines two arrays, one with all sounds and one with all pads.
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound"); //This makes an array of all sound divs
  const pads = document.querySelectorAll(".pads > div"); //this makes an array of all pads
  console.log(sounds);

  // then listens for click on each index inside the pads array. if clicked, runs a function that plays the corresponding sound.
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      pads[index].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      setTimeout(function () {
        pads[index].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }, 300);
      //    EÐA sounds[index].duration)
    });
  });
});

//KEYBOARD ASSIGNMENTS

//SPACE BAR TOGGLE PLAY/PAUSE
function togglePause() {
  if (song.paused && song.currentTime > 0) {
    song.play();
    playBtn.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      playBtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }, 300);
    playLight.style.display = "block";
  } else {
    song.pause();
    song.currentTime = 0.01;
    playBtn.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    setTimeout(function () {
      playBtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }, 300);
    playLight.style.display = "none";
  }
}

window.addEventListener("keydown", function (x) {
  if (x.key === " ") {
    togglePause();
  }
});

window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound"); //This makes an array
  const pads = document.querySelectorAll(".pads > div");
  console.log(sounds);

  pads.forEach((pad, index) => {
    window.addEventListener("keydown", function (e) {
      if (e.key === "q") {
        sounds[0].play();
        pads[0].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "w") {
        sounds[1].play();
        pads[1].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "e") {
        sounds[2].play();
        pads[2].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "r") {
        sounds[3].play();
        pads[3].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "t") {
        sounds[4].play();
        pads[4].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "y") {
        sounds[5].play();
        pads[5].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "u") {
        sounds[6].play();
        pads[6].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "i") {
        sounds[7].play();
        pads[7].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "a") {
        sounds[8].play();
        pads[8].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "s") {
        sounds[9].play();
        pads[9].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "d") {
        sounds[10].play();
        pads[10].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "f") {
        sounds[11].play();
        pads[11].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "g") {
        sounds[12].play();
        pads[12].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "h") {
        sounds[13].play();
        pads[13].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "j") {
        sounds[14].play();
        pads[14].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
      if (e.key === "k") {
        sounds[15].play();
        pads[15].style.backgroundColor = "rgba(0, 0, 0, 0.3)";
      }
    });
  });
});

//STOP SOUND WHEN KEY RELEASED
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound"); //This makes an array
  const pads = document.querySelectorAll(".pads > div");
  console.log(sounds);

  pads.forEach((pad, index) => {
    window.addEventListener("keyup", function (e) {
      if (e.key === "q") {
        sounds[0].pause();
        sounds[0].currentTime = 0;
        pads[0].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "w") {
        sounds[1].pause();
        sounds[1].currentTime = 0;
        pads[1].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "e") {
        sounds[2].pause();
        sounds[2].currentTime = 0;
        pads[2].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "r") {
        sounds[3].pause();
        sounds[3].currentTime = 0;
        pads[3].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "t") {
        sounds[4].pause();
        sounds[4].currentTime = 0;
        pads[4].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "y") {
        sounds[5].pause();
        sounds[5].currentTime = 0;
        pads[5].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "u") {
        sounds[6].pause();
        sounds[6].currentTime = 0;
        pads[6].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "i") {
        sounds[7].pause();
        sounds[7].currentTime = 0;
        pads[7].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "a") {
        sounds[8].pause();
        sounds[8].currentTime = 0;
        pads[8].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "s") {
        sounds[9].pause();
        sounds[9].currentTime = 0;
        pads[9].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "d") {
        sounds[10].pause();
        sounds[10].currentTime = 0;
        pads[10].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "f") {
        sounds[11].pause();
        sounds[11].currentTime = 0;
        pads[11].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "g") {
        sounds[12].pause();
        sounds[12].currentTime = 0;
        pads[12].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "h") {
        sounds[13].pause();
        sounds[13].currentTime = 0;
        pads[13].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "j") {
        sounds[14].pause();
        sounds[14].currentTime = 0;
        pads[14].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
      if (e.key === "k") {
        sounds[15].pause();
        sounds[15].currentTime = 0;
        pads[15].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
      }
    });
  });
});

// PLAY BUTTON CLICK FUNCTION
let song = document.getElementById("song");
song.currentTime = 0.01;
let playBtn = document.getElementById("playBtn");
var playLight = document.getElementById("playLight");
playLight.style.display = "none"; //playLight default display is off.

playBtn.addEventListener("click", function () {
  //PLAY SOUND
  song.currentTime = 0;
  song.play();
  //USER FEEDBACK
  playBtn.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  setTimeout(function () {
    playBtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }, 300);
  //SHOW GREEN LIGHT
  playLight.style.display = "block";
});

//STOP BUTTON FUNCTION
let stopBtn = document.getElementById("stopBtn");

stopBtn.addEventListener("click", function () {
  //STOP SOUND
  song.pause();
  //USER FEEDBACK
  stopBtn.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
  setTimeout(function () {
    stopBtn.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }, 300);
  //REMOVE GREEN LIGHT
  playLight.style.display = "none";
});

//ANIMATION
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const intro = document.querySelector(".intro");

//HEADER
setTimeout(function () {
  h1.style.opacity = "1";
  setTimeout(function () {
    h1.style.transform = "translateY(-20rem)";
  }, 2000);
}, 0);

//TAGLINE
setTimeout(function () {
  h2.style.opacity = "1";
  setTimeout(function () {
    h2.style.transform = "translateY(-20rem)";
  }, 1530);
}, 498);

//INFORMATION TEXT
intro.style.opacity = 0;
setTimeout(function () {
  intro.style.opacity = "1";
}, 4200);

//TRY BUTTON
let mpc = document.getElementById("mpc");
mpc.style.display = "none";

let tryBtn = document.querySelector(".try");
tryBtn.addEventListener("click", function () {
  intro.style.opacity = "0";
  mpc.style.display = "block";
  setTimeout(function () {
    mpc.style.opacity = "1";
    mpc.style.transform = "translateY(-24rem)";
  }, 100);
});

//PUSH TEXT FLASHES ON/OFF
window.addEventListener(
  "load",
  function () {
    var f = document.getElementById("push");
    setInterval(function () {
      f.style.display = f.style.display == "none" ? "" : "none";
    }, 1000);
  },
  false
);

//MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// when the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// when the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// when the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
