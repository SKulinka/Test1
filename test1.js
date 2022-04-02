let audio= document.querySelector('#audio');

let play = document.querySelector('#playBtn');
let pause=document.querySelector('#pauseBtn');
let stopp = document.querySelector('#stopBtn');

let progress = document.querySelector('#progress')
audio.addEventListener('loadedmetadata', function(){
    progress.setAttribute('max', audio.duration)
})
audio.addEventListener('timeupdate', function (){
    progress.value = audio.currentTime;
})
progress.addEventListener('click', function(event){
    let pos = (event.pageX - (this.offsetLeft + this.offsetParent.offsetLeft))/ this.offsetWidth;

    audio.currentTime = pos*audio.duration;
})


play.onclick = function(){
    audio.play()
}

pause.onclick = function(){
    audio.pause()
}

stopp.onclick = function(){
    audio.stop()
}



audio.onerror = function(){
    alert('Error!')
}