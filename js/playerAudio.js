class PlayerAudio{
    
    constructor(){
        this.listaudio = [
            {src:'audio/Flag and National Anthem of Zambia.mp3',name: 'Flag and National Anthem of Zambia'},
            {src:'audio/Show Me Your Money Zed Stylo 2017 Zambian Music Videos.mp3',name: 'Show Me Your Money Zed Stylo 2017 Zambian Music'},
            {src:'audio/Zambia y su Musica.mp3',name: 'Zambia y su Musica'}
             ];
        this.indiceaudio=0;
        this.loopaaudio;
    }
    playaudio(){
        if(audio.src == ''){
            audio.src = this.listaudio[this.indiceaudio].src;
        }
      audio.play();
      this.sumaudio();
      audio_title.innerHTML =
      this.listaudio[this.indiceaudio].name;

      this.loopaaudio = setInterval(this.reproaudio, 1000);
      audio.onclick = this.pauseaudio;
    }
    reproaudio(){
        var tempo = audio.currentTime;
        var total = audio.duration;
        volTextaudio.innerHTML = tempo.toFixed(0)
        +"/"+total.toFixed(0)+" s";
    }
    pauseaudio(){
        audio.pause();
        audio.onclick = this.playaudio;
    }
    stopaudio(){
        audio.pause();
        audio.currentTime = 0;
        clearInterval(this.loopaaudio);
        volTextaudio.innerHTML = 
          audio.currentTime.toFixed(0)
          +"/"+audio.duration.toFixed(0)+" s";
    }
    setVolumeaudio(){
        audio.volume = volaudio.value;
        volumenaudio.innerHTML = audio.volume*100+" %";
    }
    nextaudio(){
        if(this.indiceaudio < this.listaudio.length-1){
            this.indiceaudio ++;					
            audio.src = this.listaudio[this.indiceaudio].src;
            this.playaudio();
    }
    }
    backaudio(){
        if(this.indiceaudio > 0 && this.indiceaudio < this.listaudio.length){
            this.indiceaudio --;
            audio.src = this.listaudio[this.indiceaudio].src;
            this.playaudio();
        }
    }
    sumaudio(){
        sumaudio.innerHTML = `${this.indiceaudio+1} / ${this.listaudio.length}  - `;
    }

}
var playerAudio= new PlayerAudio();