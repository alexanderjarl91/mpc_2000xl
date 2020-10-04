window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound"); //This makes an array of all sound divs
    const pads = document.querySelectorAll(".pads > div"); 
    console.log(sounds)


    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){

            sounds[index].currentTime = 0;
            sounds[index].play();

        });
    });
});

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
            }
            if (e.key === 'y') {
                sounds[5].currentTime = 0;
                sounds[5].play();
            }
            if (e.key === 'u') {
                sounds[6].currentTime = 0;
                sounds[6].play();
            }
            if (e.key === 'i') {
                sounds[7].currentTime = 0;
                sounds[7].play();
            }
            

        });
    });
});




//TO DO:

//laga css, skoða það sem pedro sendi.

//gera switch statement á onkey event listeners (q, w, e, r etc..)

//on click, give the div a background color of dark grey

//flash push pads text

//fancy animation intro

//FLASH TEXT FUNCTION (NOT COMPLETELY WORKING)
// window.addEventListener("load", function() {
//     var f = document.getElementById('push');
//     setInterval(function() {
//         f.style.display = (f.style.display == 'none' ? '' : 'none');
//     }, 1000);

// }, false);


