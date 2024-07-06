const meuAudio = document.getElementById('meuAudio');

meuAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
});