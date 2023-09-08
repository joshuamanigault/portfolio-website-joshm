let isOn = true;


let prevScrollPos = window.scrollY;
const header = document.getElementById("mainHeader");

window.addEventListener('scroll',  function () {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        // user has scrolled up
        document.querySelector('.header').classList.add('show');
      } else {
        // user has scrolled down
        document.querySelector('.header').classList.remove('show');
      }
    
      // update previous scroll position
      prevScrollPos = currentScrollPos;

});

function toggle() {
    isOn = !isOn;
    console.log(isOn);
}


if (isOn == true){
    
    document.addEventListener("DOMContentLoaded", function () {
    // Check if the browser supports the Web Speech API
    if ('speechSynthesis' in window) {
        let hoverDelay;
        document.body.addEventListener('mouseover', function (event) {
            clearTimeout(hoverDelay);  // Clear any previous delays

            hoverDelay = setTimeout(() => {
                let text = event.target.innerText || event.target.value;
                if (text) {
                    if(isOn) {
                        speak(text);
                    }
                }
            }, 300);  // 300ms delay before speaking
        });

        // Cancel speech if the mouse moves out before the delay
        document.body.addEventListener('mouseout', function (event) {
            clearTimeout(hoverDelay);
            window.speechSynthesis.cancel();
        });
    } else {
        console.warn("This browser does not support the Web Speech API");
    }
});

    function speak(text) {
        // Cancel the previous utterance if it's still speaking
        window.speechSynthesis.cancel();

        let utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }
}


function redirectToAnotherPage() {
    window.location.href='project-tile-redirect.html';

}

/* This is a Test Piece of Code */


/* This is going to be used for TTS button feature 


/*Git/Github test 



*/




