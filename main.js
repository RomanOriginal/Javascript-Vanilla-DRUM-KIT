//Roman Akivaev JavaScript DRUM KIT

"use strict";

window.addEventListener('keydown', function(e){
    
    //grab clicked element
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    ////grab clicked element class, for animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //stop the function if there is no key code in audio element
    
    audio.currentTime = 0; // rewind the sound quickly
    audio.play();
    
    key.classList.add('playing');
});


//clicked keys transition
function removeTransition(e){
    if(e.propertyName !== 'transform') return // skip if not transform
    this.classList.remove('playing');
}

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
