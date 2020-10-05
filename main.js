// an arrow function that runs on load, it defines two arrays, one with all sounds and one with all pads.
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound"); //This makes an array of all sound divs
    const pads = document.querySelectorAll(".pads > div"); //this makes an array of all pads
    console.log(sounds)

// then listens for click on each index inside the pads array. if clicked, runs a function that plays the corresponding sound.
    pads.forEach((pad, index) =>{ 
        pad.addEventListener('click', function(){

            sounds[index].currentTime = 0;
            sounds[index].play();

            pads[index].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[index].style.backgroundColor = "rgba(0, 0, 0, 0.0)"
               }, 300); 
            //    EÐA sounds[index].duration)
        });
    });
});

//KEYBOARD ASSIGNMENTS
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound"); //This makes an array
    const pads = document.querySelectorAll(".pads > div");
    console.log(sounds)

    pads.forEach((pad, index) =>{
        window.addEventListener('keydown', function(e){

           
            if (e.key === 'q') {
                sounds[0].currentTime = 0;
                sounds[0].play();
                pads[0].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[0].style.backgroundColor = "rgba(0, 0, 0, 0.0)"
               }, 300);
            }
            if (e.key === 'w') {
                sounds[1].currentTime = 0;
                sounds[1].play();
                pads[1].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[1].style.backgroundColor = "rgba(0, 0, 0, 0)"
               }, 300);
            }
            if (e.key === 'e') {
                sounds[2].currentTime = 0;
                sounds[2].play();

                pads[2].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[2].style.backgroundColor = "rgba(0, 0, 0, 0)"
               }, 300);
            }
            if (e.key === 'r') {
                sounds[3].currentTime = 0;
                sounds[3].play();

                pads[3].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[3].style.backgroundColor = "rgba(0, 0, 0, 0)"
               }, 300);
            }
            if (e.key === 't') {
                sounds[4].currentTime = 0;
                sounds[4].play();

                pads[4].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[4].style.backgroundColor = "rgba(0, 0, 0, 0)"
               }, 300);
            }
            if (e.key === 'y') {
                sounds[5].currentTime = 0;
                sounds[5].play();

                pads[5].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[5].style.backgroundColor = "rgba(0, 0, 0, 0)"
               }, 300);
            }
            if (e.key === 'u') {
                sounds[6].currentTime = 0;
                sounds[6].play();

                pads[6].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[6].style.backgroundColor = "rgba(0, 0, 0, 0)"
               }, 300);
            }
            if (e.key === 'i') {
                sounds[7].currentTime = 0;
                sounds[7].play();

                pads[7].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[7].style.backgroundColor = "rgba(0, 0, 0, 0)"
               }, 300);
            }
            if (e.key === 'b') {
                sounds[7].currentTime = 0;
                sounds[7].play();

                pads[7].style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                    pads[7].style.backgroundColor = "rgba(0, 0, 0, 0)"
               }, 300);
            }
            console.log(e)
            if (e.key === " ") {
                song.currentTime = 0;
                song.play();
                playBtn.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
                setTimeout(function(){
                playBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
                }, 300);
                //SHOW GREEN LIGHT
                playLight.style.display = "block";
            }
            
        });
    });
});


// PLAY BUTTON FUNCTION
let song = document.getElementById('song');
let playBtn = document.getElementById('playBtn');
var playLight = document.getElementById("playLight");
playLight.style.display = "none"; //playLight default display is off.

playBtn.addEventListener('click', function(){
    //PLAY SOUND
    song.currentTime = 0;
    song.play();
    //USER FEEDBACK
    playBtn.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
    setTimeout(function(){
    playBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }, 300);
    //SHOW GREEN LIGHT
    playLight.style.display = "block";
})

//STOP BUTTON FUNCTION
let stopBtn = document.getElementById('stopBtn');

stopBtn.addEventListener('click', function(){
    //STOP SOUND
    song.pause();
    //USER FEEDBACK
    stopBtn.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
    setTimeout(function(){
    stopBtn.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }, 300);
    //REMOVE GREEN LIGHT
    playLight.style.display = "none";
});



//TO DO:

//use es6 features: arrow functions, template literals, let and const (búinn að nota forEach og arrowfunc)ß

//gera switch statement á onkey event listeners (q, w, e, r etc..)

//pads go gray for audio duration

//fancy animation intro

//implement web audio api




// FLASH TEXT (WHY DOES IT FLASH THE PADS?)
// window.addEventListener("load", function() {
//     var f = document.getElementById('pushTxt');
//     setInterval(function() {
//         f.style.display = (f.style.display == 'none' ? '' : 'none');
//     }, 1000);
// }, false);



//ANIMATION
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2')
const intro = document.querySelector('.intro')

setTimeout(function() {
  h1.style.opacity = "1";   
    setTimeout(function() {
  h1.style.transform = "translateY(-20rem)";
}, 2000)
}, 0)

setTimeout(function() {
    h2.style.opacity = "1";   
      setTimeout(function() {
    h2.style.transform = "translateY(-20rem)";
  }, 1530)
  }, 498)




  intro.style.opacity = 0;

  setTimeout(function() {
      intro.style.opacity= "1";
  }, 4200)

  //TRY BUTTON
let mpc = document.getElementById('mpc');
mpc.style.display = "none"; 

let tryBtn = document.querySelector('.try')
tryBtn.addEventListener('click', function(){
    intro.style.opacity= "0";
    mpc.style.transform = "translateY(-25rem)";
    mpc.style.display = "block";
    
})

//PROBLEM: ONLY WORKS IN REVERSE, doesnt like intro class



//MODAL 
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// when the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// when the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
