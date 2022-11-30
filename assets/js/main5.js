
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
         name: "Audix ADX51",
         path: "teleRzeczy/mp3/01_adx51_ORTF.mp3",
         img_producent: "MicPictures/Audix_ADX51.jpg",
         technika: "ORTF"
       },
       {
         name: "Audix ADX51",
         path: "teleRzeczy/mp3/02_adx51_NOS.mp3",
         img_producent: "MicPictures/Audix_ADX51.jpg",
         technika: "NOS"
       },
       {
         name: "Audix ADX51",
         path: "teleRzeczy/mp3/03_adx51_DIN.mp3",
         img_producent: "MicPictures/Audix_ADX51.jpg",
         technika: "DIN"
       },
       {
         name: "Behringer B5",
         path: "teleRzeczy/mp3/07_B5_ORTF.mp3",
         img_producent: "MicPictures/Behringer_B5.jpg",
         technika: "ORTF"
       },
       {
         name: "Behringer B5",
         path: "teleRzeczy/mp3/08_B5_NOS.mp3",
         img_producent: "MicPictures/Behringer_B5.jpg",
         technika: "NOS"
       },
       {
         name: "Behringer B5",
         path: "teleRzeczy/mp3/09_B5_DIN.mp3",
         img_producent: "MicPictures/Behringer_B5.jpg",
         technika: "DIN"
       },
       {
         name: "Audix SCX1",
         path: "teleRzeczy/mp3/04_scx1_ORTF.mp3",
         img_producent: "MicPictures/audix-scx1.jpg",
         technika: "ORTF"
       },
       {
         name: "Audix SCX1",
         path: "teleRzeczy/mp3/05_scx1_NOS.mp3",
         img_producent: "MicPictures/audix-scx1.jpg",
         technika: "NOS"
       },
       {
         name: "Audix SCX1",
         path: "teleRzeczy/mp3/06_scx1_DIN.mp3",
         img_producent: "MicPictures/audix-scx1.jpg",
         technika: "DIN"
       },
       {
         name: "AKG C4000 B",
         path: "teleRzeczy/mp3/10_akgc4000b_ORTF.mp3",
         img_producent: "MicPictures/AKG_C4000B.jpg",
         technika: "ORTF"
       },
       {
         name: "AKG C4000 B",
         path: "teleRzeczy/mp3/11_akgc4000b_NOS.mp3",
         img_producent: "MicPictures/AKG_C4000B.jpg",
         technika: "NOS"
       },
       {
         name: "AKG C4000 B",
         path: "teleRzeczy/mp3/12_akgc4000b_DIN.mp3",
         img_producent: "MicPictures/AKG_C4000B.jpg",
         technika: "DIN"
       },
       {
         name: "AKG C414 XLS",
         path: "teleRzeczy/mp3/13_akgc414_ORTF.mp3",
         img_producent: "MicPictures/AKG_C414_XLS.jpg",
         technika: "ORTF"
       },
       {
         name: "AKG C414 XLS",
         path: "teleRzeczy/mp3/14_akgc414_NOS.mp3",
         img_producent: "MicPictures/AKG_C414_XLS.jpg",
         technika: "NOS"
       },
       {
         name: "AKG C414 XLS",
         path: "teleRzeczy/mp3/15_akgc414_DIN.mp3",
         img_producent: "MicPictures/AKG_C414_XLS.jpg",
         technika: "DIN"
       },
       {
         name: "Neumann TLM 103",
         path: "teleRzeczy/mp3/16_neumantlm103_ORTF.mp3",
         img_producent: "MicPictures/Neumann_TLM103.jpg",
         technika: "ORTF"
       },
       {
         name: "Neumann TLM 103",
         path: "teleRzeczy/mp3/17_neumantlm103_NOS.mp3",
         img_producent: "MicPictures/Neumann_TLM103.jpg",
         technika: "NOS"
       },
       {
         name: "Neumann TLM 103",
         path: "teleRzeczy/mp3/18_neumantlm103_DIN.mp3",
         img_producent: "MicPictures/Neumann_TLM103.jpg",
         technika: "DIN"
       },
       {
         name: "Audix SCX25A",
         path: "teleRzeczy/mp3/19_scx25a_ORTF.mp3",
         img_producent: "MicPictures/Audix_SCX25A.jpg",
         technika: "ORTF"
       },
       {
         name: "Audix SCX25A",
         path: "teleRzeczy/mp3/20_scx25a_NOS.mp3",
         img_producent: "MicPictures/Audix_SCX25A.jpg",
         technika: "NOS"
       },
       {
        name: "Audix SCX25A",
        path: "teleRzeczy/mp3/21_scx25a_DIN.mp3",
        img_producent: "MicPictures/Audix_SCX25A.jpg",
        technika: "DIN"
       },
       {
        name: "FAT HEAD II",
        path: "teleRzeczy/mp3/22_fathead2_ORTF.mp3",
        img_producent: "MicPictures/Cascade_Fathead2.jpg",
        technika: "ORTF"
      },
      {
        name: "FAT HEAD II",
        path: "teleRzeczy/mp3/23_fathead2_NOS.mp3",
        img_producent: "MicPictures/Cascade_Fathead2.jpg",
        technika: "NOS"
      },
      {
        name: "FAT HEAD II",
        path: "teleRzeczy/mp3/24_fathead2_DIN.mp3",
        img_producent: "MicPictures/Cascade_Fathead2.jpg",
        technika: "DIN"
      }
    ];
    
    
    // Wszystkie funkcje
    
    
    // ładowanie ścieżki
    function load_track(index_no){

      pom = track.currentTime;
        track.src = All_tracks[index_no].path;
        microphone.innerHTML = All_tracks[index_no].name;	
    
        mic_image.src = All_tracks[index_no].img_producent;
    
        tech.innerHTML = All_tracks[index_no].technika;
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
    
    function switchADX51_ORTF(){
        index_no = 0;
            load_track(index_no);
            playtrack();
    }
    function switchADX51_NOS(){
            index_no = 1;
            load_track(index_no);
            playtrack();
    }
    function switchADX51_DIN(){
            index_no = 2;
            load_track(index_no);
            playtrack();
    }
    function switchB5_ORTF(){
            index_no = 3;
            load_track(index_no);
            playtrack();
    }
    function switchB5_NOS(){
            index_no = 4;
            load_track(index_no);
            playtrack();
    }
    function switchB5_DIN(){
            index_no = 5;
            load_track(index_no);
            playtrack();
    }
    function switchSCX1_ORTF(){
            index_no = 6;
            load_track(index_no);
            playtrack();
    }
    function switchSCX1_NOS(){
            index_no = 7;
            load_track(index_no);
            playtrack();
    }
    function switchSCX1_DIN(){
            index_no = 8;
            load_track(index_no);
            playtrack();
    }
    function switchC4000B_ORTF(){
            index_no = 9;
            load_track(index_no);
            playtrack();
    }
    function switchC4000B_NOS(){
            index_no = 10;
            load_track(index_no);
            playtrack();
    }
    function switchC4000B_DIN(){
            index_no = 11;
            load_track(index_no);
            playtrack();
    }
    function switchC414_ORTF(){
            index_no = 12;
            load_track(index_no);
            playtrack();
    }
    function switchC414_NOS(){
            index_no = 13;
            load_track(index_no);
            playtrack();
    }
    function switchC414_DIN(){
            index_no = 14;
            load_track(index_no);
            playtrack();
    }
    function switchTLM103_ORTF(){
            index_no = 15;
            load_track(index_no);
            playtrack();
    }
    function switchTLM103_NOS(){
            index_no = 16;
            load_track(index_no);
            playtrack();
    }
    function switchTLM103_DIN(){
            index_no = 17;
            load_track(index_no);
            playtrack();
    }
    function switchSCX25A_ORTF(){
            index_no = 18;
            load_track(index_no);
            playtrack();
    }
    function switchSCX25A_NOS(){
            index_no = 19;
            load_track(index_no);
            playtrack();
    }
    function switchSCX25A_DIN(){
            index_no = 20;
            load_track(index_no);
            playtrack();
    }
    function switchFH2_ORTF(){
            index_no = 21;
            load_track(index_no);
            playtrack();
    }
    function switchFH2_NOS(){
            index_no = 22;
            load_track(index_no);
            playtrack();
    }
    function switchFH2_DIN(){
            index_no = 23;
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
    
    var adx51_ortf = document.getElementById("adx51_ortf");
    var adx51_nos = document.getElementById("adx51_nos");
    var adx51_din = document.getElementById("adx51_din");

    var b5_ortf = document.getElementById("b5_ortf");
    var b5_nos = document.getElementById("b5_nos");
    var b5_din = document.getElementById("b5_din");
    
    var scx1_ortf = document.getElementById("scx1_ortf");
    var scx1_nos = document.getElementById("scx1_nos");
    var scx1_din = document.getElementById("scx1_din");

    var c4000_ortf = document.getElementById("c4000_ortf");
    var c4000_nos = document.getElementById("c4000_nos");
    var c4000_din = document.getElementById("c4000_din");

    var c414_ortf = document.getElementById("c414_ortf");
    var c414_nos = document.getElementById("c414_nos");
    var c414_din = document.getElementById("c414_din");

    var tlm103_ortf = document.getElementById("tlm103_ortf");
    var tlm103_nos = document.getElementById("tlm103_nos");
    var tlm103_din = document.getElementById("tlm103_din");

    var scx25_ortf = document.getElementById("scx25_ortf");
    var scx25_nos = document.getElementById("scx25_nos");
    var scx25_din = document.getElementById("scx25_din");

    var fh2_ortf = document.getElementById("fh2_ortf");
    var fh2_nos = document.getElementById("fh2_nos");
    var fh2_din = document.getElementById("fh2_din");
    
    adx51_ortf.addEventListener("click", switchADX51_ORTF);
    adx51_nos.addEventListener("click", switchADX51_NOS);
    adx51_din.addEventListener("click", switchADX51_DIN);
    
    b5_ortf.addEventListener("click", switchB5_ORTF);
    b5_nos.addEventListener("click", switchB5_NOS);
    b5_din.addEventListener("click", switchB5_DIN);

    scx1_ortf.addEventListener("click", switchSCX1_ORTF);
    scx1_nos.addEventListener("click", switchSCX1_NOS);
    scx1_din.addEventListener("click", switchSCX1_DIN);

    c4000_ortf.addEventListener("click", switchC4000B_ORTF);
    c4000_nos.addEventListener("click", switchC4000B_NOS);
    c4000_din.addEventListener("click", switchC4000B_DIN);

    c414_ortf.addEventListener("click", switchC414_ORTF);
    c414_nos.addEventListener("click", switchC414_NOS);
    c414_din.addEventListener("click", switchC414_DIN);

    tlm103_ortf.addEventListener("click", switchTLM103_ORTF);
    tlm103_nos.addEventListener("click", switchTLM103_NOS);
    tlm103_din.addEventListener("click", switchTLM103_DIN);

    scx25_ortf.addEventListener("click", switchSCX25A_ORTF);
    scx25_nos.addEventListener("click", switchSCX25A_NOS);
    scx25_din.addEventListener("click", switchSCX25A_DIN);

    fh2_ortf.addEventListener("click", switchFH2_ORTF);
    fh2_nos.addEventListener("click", switchFH2_NOS);
    fh2_din.addEventListener("click", switchFH2_DIN);
        