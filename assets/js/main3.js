
    let previous = document.querySelector('#pre');
    let play = document.querySelector('#play');
    let next = document.querySelector('#next');
    let microphone = document.querySelector('#microphone');
    let recent_volume= document.querySelector('#volume');
    let volume_show = document.querySelector('#volume_show');
    let slider = document.querySelector('#duration_slider');
    let show_duration = document.querySelector('#show_duration');
    let mic_image = document.querySelector('#mic_image');
    let auto_play = document.querySelector('#auto');
    
    let tech = document.querySelector('#tech');
    
    
    
    let timer;
    let autoplay = 0;
    
    let index_no = 0;
    let Playing_song = false;
    
    
    var pom;
    
    let track = document.createElement('audio');
    
    
    //Wszystkie pliki audio
    let All_tracks = [
       {
         name: "Shure SM57",
         path: "Tracks/Elektryczna/Clean/SM57.mp3",
         img_producent: "MicPictures/Shure_SM57.jpg",
       },
       {
         name: "Audix i5",
         path: "Tracks/Elektryczna/Clean/i5.mp3",
         img_producent: "MicPictures/Audix_i5.jpg",
       },
       {
         name: "Lewitt MTP-440",
         path: "Tracks/Elektryczna/Clean/MTP440.mp3",
         img_producent: "MicPictures/Lewitt_MTP440.jpg",
       },
       {
         name: "Sennheiser MD421",
         path: "Tracks/Elektryczna/Clean/MD421.mp3",
         img_producent: "MicPictures/Sennheiser_MD421.jpg",
       },
       {
         name: "Shure SM7B",
         path: "Tracks/Elektryczna/Clean/SM7B.mp3",
         img_producent: "MicPictures/Shure_SM7B.jpg",
       },
       {
         name: "Beyerdynamic M160",
         path: "Tracks/Elektryczna/Clean/M160.mp3",
         img_producent: "MicPictures/Beyerdynamic_M160.jpg",
       },
    
    ];
    
    
    // All functions
    
    
    // function load the track
    function load_track(index_no){
    
      pom = track.currentTime;
        track.src = All_tracks[index_no].path;
        microphone.innerHTML = All_tracks[index_no].name;	
    
        mic_image.src = All_tracks[index_no].img_producent;
    
        track.currentTime = pom + 0.05;
    
    
        timer = setInterval(range_slider ,1000);
    
      track.load();
    }
    
    load_track(index_no);
    
    
    //Wyciszanie dźwięku
    function mute_sound(){
        track.volume = 0;
        volume.value = 0;
        volume_show.innerHTML = 0;
    }
    
    
    // sprwadzenie czy ścieżka gra czy nie
    function justplay(){
         if(Playing_song==false){
             playtrack();
    
         }else{
             pausetrack();
         }
     }
    
    
    
    // odtwarzanie
    function playtrack(){
      track.play();
      Playing_song = true;
      play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    }
    
    // pauzowanie
    function pausetrack(){
        track.pause();
        Playing_song = false;
        play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
    
    //funkcje odpowiadające za wybór konkretnego mikrofonu (za pomocą indeksu All_tracks)
    
    function switchSM57(){
        index_no = 0;
            load_track(index_no);
            playtrack();
    }
    function switchi5(){
        index_no = 1;
            load_track(index_no);
            playtrack();
    }
    function switchMTP440(){
        index_no = 2;
            load_track(index_no);
            playtrack();
    }
    function switchMD421(){
        index_no = 3;
            load_track(index_no);
            playtrack();
    }
    function switchSM7B(){
        index_no = 4;
            load_track(index_no);
            playtrack();
    }
    function switchM160(){
        index_no = 5;
            load_track(index_no);
            playtrack();
    }
    
    
    
    // zmiana głośności
    function volume_change(){
        volume_show.innerHTML = recent_volume.value;
        track.volume = recent_volume.value / 100;
    }
    
    // zmiana pozycji przewijania 
    function change_duration(){
        slider_position = track.duration * (slider.value / 100);
        track.currentTime = slider_position;
    }
    
    function range_slider(){
        let position = 0;
            
            // aktualizacja pozycji przewijania
            if(!isNaN(track.duration)){
               position = track.currentTime * (100 / track.duration);
               slider.value =  position;
              }
    
         }
    
    var sm57 = document.getElementById("sm57");
    var i5 = document.getElementById("i5");
    var mtp440 = document.getElementById("mtp440");
    var md421 = document.getElementById("md421");
    var sm7b = document.getElementById("sm7b");
    var m160 = document.getElementById("m160");
    
    sm57.addEventListener("click", switchSM57);
    i5.addEventListener("click", switchi5);
    mtp440.addEventListener("click", switchMTP440);
    md421.addEventListener("click", switchMD421);
    sm7b.addEventListener("click", switchSM7B);
    m160.addEventListener("click", switchM160);
