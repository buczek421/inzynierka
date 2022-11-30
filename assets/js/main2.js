
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
         name: "AKG C-414 XLS",
         path: "Tracks/Blumlein/TyleCoNic/C414.mp3",
         img_producent: "MicPictures/AKG_C414_XLS.jpg",
         technika: "Blumlein"
       },
       {
         name: "Cascade Fathead II",
         path: "Tracks/Blumlein/TyleCoNic/Fathead2.mp3",
         img_producent: "MicPictures/Cascade_Fathead2.jpg",
         technika: "Blumlein"
       },
       {
         name: "AKG C-414 XLS",
         path: "Tracks/XY/TyleCoNic/C414.mp3",
         img_producent: "MicPictures/AKG_C414_XLS.jpg",
         technika: "XY"
       },
       {
         name: "Rode NT-1A",
         path: "Tracks/XY/TyleCoNic/NT1A.mp3",
         img_producent: "MicPictures/Rode_NT-1A.jpg",
         technika: "XY"
       },
       {
         name: "AKG C4000B",
         path: "Tracks/XY/TyleCoNic/C4000B.mp3",
         img_producent: "MicPictures/AKG_C4000B.jpg",
         technika: "XY"
       },
       {
         name: "Neumann TLM-103",
         path: "Tracks/XY/TyleCoNic/TLM103.mp3",
         img_producent: "MicPictures/Neumann_TLM103.jpg",
         technika: "XY"
       },
       {
         name: "Audix SCX25A",
         path: "Tracks/XY/TyleCoNic/SCX25A.mp3",
         img_producent: "MicPictures/Audix_SCX25A.jpg",
         technika: "XY"
       },
       {
         name: "Audix ADX51",
         path: "Tracks/XY/TyleCoNic/ADX51.mp3",
         img_producent: "MicPictures/Audix_ADX51.jpg",
         technika: "XY"
       },
       {
         name: "Lewitt LCT-340",
         path: "Tracks/XY/TyleCoNic/LCT340.mp3",
         img_producent: "MicPictures/Lewitt_LCT340.jpg",
         technika: "XY"
       },
       {
         name: "Behringer B5",
         path: "Tracks/XY/TyleCoNic/B5.mp3",
         img_producent: "MicPictures/Behringer_B5.jpg",
         technika: "XY"
       },
       {
         name: "AKG C414 XLS (mid) / AKG C414 XLS (side)",
         path: "Tracks/MS/TyleCoNic/C414_C414.mp3",
         img_producent: "MicPictures/C414_C414.jpg",
         technika: "Mid/Side"
       },
       {
         name: "Rode NT-1A (mid) / AKG C414 XLS (side)",
         path: "Tracks/MS/TyleCoNic/NT1A_C414.mp3",
         img_producent: "MicPictures/NT1A_C414.jpg",
         technika: "Mid/Side"
       },
       {
         name: "AKG C4000B (mid) / AKG C414 XLS (side)",
         path: "Tracks/MS/TyleCoNic/C4000B_C414.mp3",
         img_producent: "MicPictures/C4000B_C414.jpg",
         technika: "Mid/Side"
       },
       {
         name: "Neumann TLM-103 (mid) / AKG C414 XLS (side)",
         path: "Tracks/MS/TyleCoNic/TLM103_C414.mp3",
         img_producent: "MicPictures/TLM103_C414.jpg",
         technika: "Mid/Side"
       },
       {
         name: "Audix SCX25A (mid) / AKG C414 XLS (side)",
         path: "Tracks/MS/TyleCoNic/SCX25A_C414.mp3",
         img_producent: "MicPictures/SCX25A_C414.jpg",
         technika: "Mid/Side"
       },
       {
         name: "AKG C414 XLS (mid) / Cascade Fathead II (side)",
         path: "Tracks/MS/TyleCoNic/C414_Fathead2.mp3",
         img_producent: "MicPictures/C414_Fathead2.jpg",
         technika: "Mid/Side"
       },
       {
         name: "Rode NT-1A (mid) / Cascade Fathead II (side)",
         path: "Tracks/MS/TyleCoNic/NT1A_Fathead2.mp3",
         img_producent: "MicPictures/NT1A_Fathead2.jpg",
         technika: "Mid/Side"
       },
       {
         name: "AKG C4000B (mid) / Cascade Fathead II (side)",
         path: "Tracks/MS/TyleCoNic/C4000B_Fathead2.mp3",
         img_producent: "MicPictures/C4000B_Fathead2.jpg",
         technika: "Mid/Side"
       },
       {
         name: "Neumann TLM-103 (mid) / Cascade Fathead II (side)",
         path: "Tracks/MS/TyleCoNic/TLM103_Fathead2.mp3",
         img_producent: "MicPictures/TLM103_Fathead2.jpg",
         technika: "Mid/Side"
       },
       {
         name: "Audix SCX25A (mid) / Cascade Fathead II (side)",
         path: "Tracks/MS/TyleCoNic/SCX25A_Fathead2.mp3",
         img_producent: "MicPictures/SCX25A_Fathead2.jpg",
         technika: "Mid/Side"
       }
    ];
    
    
    // All functions
    
    
    // function load the track
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
    
    function switchBlumlein_C414(){
        index_no = 0;
            load_track(index_no);
            playtrack();
    }
    function switchBlumlein_Fathead2(){
            index_no = 1;
            load_track(index_no);
            playtrack();
    }
    function switchXY_C414(){
            index_no = 2;
            load_track(index_no);
            playtrack();
    }
    function switchXY_NT1A(){
            index_no = 3;
            load_track(index_no);
            playtrack();
    }
    function switchXY_C4000B(){
            index_no = 4;
            load_track(index_no);
            playtrack();
    }
    function switchXY_TLM103(){
            index_no = 5;
            load_track(index_no);
            playtrack();
    }
    function switchXY_SCX25A(){
            index_no = 6;
            load_track(index_no);
            playtrack();
    }
    function switchXY_ADX51(){
            index_no = 7;
            load_track(index_no);
            playtrack();
    }
    function switchXY_LCT340(){
            index_no = 8;
            load_track(index_no);
            playtrack();
    }
    function switchXY_B5(){
            index_no = 9;
            load_track(index_no);
            playtrack();
    }
    function switchMS_C414_C414(){
            index_no = 10;
            load_track(index_no);
            playtrack();
    }
    function switchMS_NT1A_C414(){
            index_no = 11;
            load_track(index_no);
            playtrack();
    }
    function switchMS_C4000B_C414(){
            index_no = 12;
            load_track(index_no);
            playtrack();
    }
    function switchMS_TLM103_C414(){
            index_no = 13;
            load_track(index_no);
            playtrack();
    }
    function switchMS_SCX25A_C414(){
            index_no = 14;
            load_track(index_no);
            playtrack();
    }
    function switchMS_C414_Fathead2(){
            index_no = 15;
            load_track(index_no);
            playtrack();
    }
    function switchMS_NT1A_Fathead2(){
            index_no = 16;
            load_track(index_no);
            playtrack();
    }
    function switchMS_C4000B_Fathead2(){
            index_no = 17;
            load_track(index_no);
            playtrack();
    }
    function switchMS_TLM103_Fathead2(){
            index_no = 18;
            load_track(index_no);
            playtrack();
    }
    function switchMS_SCX25A_Fathead2(){
            index_no = 19;
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
    
    var blumlein_c414 = document.getElementById("blumlein_c414");
    var blumlein_fathead2 = document.getElementById("blumlein_fathead2");
    
    var xy_c414 = document.getElementById("xy_c414");
    var xy_nt1a = document.getElementById("xy_nt1a");
    var xy_c4000b = document.getElementById("xy_c4000b");
    var xy_tlm103 = document.getElementById("xy_tlm103");
    var xy_scx25a = document.getElementById("xy_scx25a");
    var xy_adx51= document.getElementById("xy_adx51");
    var xy_lct340= document.getElementById("xy_lct340");
    var xy_b5= document.getElementById("xy_b5");
    
    var s_c414_m_c414=document.getElementById("s_c414_m_c414");
    var s_c414_m_nt1a=document.getElementById("s_c414_m_nt1a");
    var s_c414_m_c4000b=document.getElementById("s_c414_m_c4000b");
    var s_c414_m_tlm103=document.getElementById("s_c414_m_tlm103");
    var s_c414_m_scx25a=document.getElementById("s_c414_m_scx25a");
    var s_fathead2_m_c414=document.getElementById("s_fathead2_m_c414");
    var s_fathead2_m_nt1a=document.getElementById("s_fathead2_m_nt1a");
    var s_fathead2_m_c4000b=document.getElementById("s_fathead2_m_c4000b");
    var s_fathead2_m_tlm103=document.getElementById("s_fathead2_m_tlm103");
    var s_fathead2_m_scx25a=document.getElementById("s_fathead2_m_scx25a");
    
    
    blumlein_c414.addEventListener("click", switchBlumlein_C414);
    blumlein_fathead2.addEventListener("click", switchBlumlein_Fathead2);
    
    xy_c414.addEventListener("click", switchXY_C414);
    xy_nt1a.addEventListener("click", switchXY_NT1A);
    xy_c4000b.addEventListener("click", switchXY_C4000B);
    xy_tlm103.addEventListener("click", switchXY_TLM103);
    xy_scx25a.addEventListener("click", switchXY_SCX25A);
    xy_adx51.addEventListener("click", switchXY_ADX51);
    xy_lct340.addEventListener("click", switchXY_LCT340);
    xy_b5.addEventListener("click", switchXY_B5);
    
    s_c414_m_c414.addEventListener("click", switchMS_C414_C414);
    s_c414_m_nt1a.addEventListener("click", switchMS_NT1A_C414);
    s_c414_m_c4000b.addEventListener("click", switchMS_C4000B_C414);
    s_c414_m_tlm103.addEventListener("click", switchMS_TLM103_C414);
    s_c414_m_scx25a.addEventListener("click", switchMS_SCX25A_C414);
    s_fathead2_m_c414.addEventListener("click", switchMS_C414_Fathead2);
    s_fathead2_m_nt1a.addEventListener("click", switchMS_NT1A_Fathead2);
    s_fathead2_m_c4000b.addEventListener("click", switchMS_C4000B_Fathead2);
    s_fathead2_m_tlm103.addEventListener("click", switchMS_TLM103_Fathead2);
    s_fathead2_m_scx25a.addEventListener("click", switchMS_SCX25A_Fathead2);
    