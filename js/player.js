class Player{
    
    constructor(){
        this.listvideo = [
            {src:'video/aThings3.mp4',name: 'Things 3'},
            {src:'video/capitana.mp4',name: 'Capitana America'},
            {src:'video/vinga4.mp4',name: 'Vingadores 4'}
             ];
        this.indicevideo=0;
        this.loopaVideo;
    }
    playvideo(){
        if(video.src == ''){
            video.src = this.listvideo[this.indicevideo].src;
        }
      video.play();
      this.sumvideo();
      video_title.innerHTML =
      this.listvideo[this.indicevideo].name;

      this.loopaVideo = setInterval(this.reproVideo, 1000);
      video.onclick = this.pausevideo;
    }
    reproVideo(){
        var tempo = video.currentTime;
        var total = video.duration;
        volTextVideo.innerHTML = tempo.toFixed(0)
        +"/"+total.toFixed(0)+" s";
    }
    pausevideo(){
        video.pause();
        video.onclick = this.playvideo;
    }
    stopvideo(){
        video.pause();
        video.currentTime = 0;
        clearInterval(this.loopaVideo);
        volTextVideo.innerHTML = 
          video.currentTime.toFixed(0)
          +"/"+video.duration.toFixed(0)+" s";
    }
    setVolumeVideo(){
        video.volume = volVideo.value;
        volumenVideo.innerHTML = video.volume*100+" %";
    }
    nextvideo(){
        if(this.indicevideo < this.listvideo.length-1){
            this.indicevideo ++;					
            video.src = this.listvideo[this.indicevideo].src;
            this.playvideo();
    }
    }
    backvideo(){
        if(this.indicevideo > 0 && this.indicevideo < this.listvideo.length){
            this.indicevideo --;
            video.src = this.listvideo[this.indicevideo].src;
            this.playvideo();
        }
    }
    sumvideo(){
        sumVideo.innerHTML = `${this.indicevideo+1} / ${this.listvideo.length}  - `;
    }

}
var player= new Player();