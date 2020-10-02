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



//FLASH TEXT FUNCTION (NOT COMPLETELY WORKING)
// window.addEventListener("load", function() {
//     var f = document.getElementById('push');
//     setInterval(function() {
//         f.style.display = (f.style.display == 'none' ? '' : 'none');
//     }, 1000);

// }, false);


