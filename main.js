window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound"); //This makes an array
    const pads = document.querySelectorAll(".padRow1 div, .padRow2 div, .padRow3 div, .padRow4 div");
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
    const pads = document.querySelectorAll(".padRow1 div, .padRow2 div, .padRow3 div, .padRow4 div");
    console.log(sounds)


    pads.forEach((pad, index) =>{
        pad.addEventListener('keydown', function(e){
            if (e.key === 'q') {
                sounds[index].currentTime = 0;
            sounds[index].play();
            }

        });
    });
});


//TO DO:
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


