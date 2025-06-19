import { getDatabase, ref, set, update, onValue, remove, get } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

$(function () {
    "use strict";

    window.CONTROLLER = window.CONTROLLER || {};

    (function (con) {
        //

        const db = getDatabase();
        const dbKey = "altpgn";

        // Variables

        //

        function upd(key, val) {
            update(ref(db, dbKey), {
                [key]: val
            })
        }

        function enb(key) {
            $(key).removeAttr('disabled')
        }

        function dib(key) {
            $(key).attr('disabled', true);
        }

        //
      
        

        //

        onValue(ref(db, dbKey), (snapshot) => {
            const data = snapshot.val();

            if(data.reload == 1) {
              location.reload();
              upd("reload", 0);
            }     
          
            if(data.sfx_intro == 1){
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/01.%20HS%20Opening%20Titles.mp3?v=1745398500735", 1);
              upd("sfx_intro", 0);
            }      
            if(data.sfx_next_player_1 == 1){ 
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/03.%20HS%20Next%20Player%201.mp3?v=1745398500792", 1);
              upd("sfx_next_player_1", 0);
            }          
            if(data.sfx_next_player_2 == 1){ 
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/04.%20HS%20Next%20Player%202.mp3?v=1745337972852", 1);
              upd("sfx_next_player_2", 0);
            }          
            if(data.sfx_next_player_3 == 1){ 
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/05.%20HS%20Next%20Player%203.mp3?v=1745398502182", 1);
              upd("sfx_next_player_3", 0);
            }          
            if(data.sfx_bumper_in == 1){ 
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/17.%20HS%20Bumper%20in.mp3?v=1745398507831", 1);
              upd("sfx_bumper_in", 0);
            }         
            if(data.sfx_bumper_out == 1){ 
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/18.%20HS%20Bumper%20out.mp3?v=1745398509137", 1);
              upd("sfx_bumper_out", 0);
            }      
            if(data.sfx_closer == 1){ 
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/19.%20HS%20Closer.mp3?v=1745398510813", 3);
              upd("sfx_closer", 0);
            }
          
            if(data.sfx_introduce_contestants == 1){
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/02.%20HS%20Today's%20Names.mp3?v=1744906956440", 3);
              upd("sfx_introduce_contestants", 0);
            }
          
            if(data.sfx_fff_read_ques == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_read_question.mp3?v=1744988938190", 3);
              upd("sfx_fff_read_ques", 0);
            }
            if(data.sfx_fff_3_stabs == 1) {
              setTimeout(function(){
                con.StopSound(3);
              }, 1000);
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_3_stabs.mp3?v=1744988977918", 2);
              upd("sfx_fff_3_stabs", 0);
            }
            if(data.sfx_fff_think == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_think_15s.mp3?v=1744988957873", 2);
              upd("sfx_fff_think", 0);
            }
            if(data.sfx_fff_read_ans == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_read_answer_order.mp3?v=1744989868093", 4);
              upd("sfx_fff_read_ans", 0);
            }
            if(data.sfx_fff_order_1 == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_answer_correct_1.mp3?v=1744988939809", 2);
              upd("sfx_fff_order_1", 0);
            }
            if(data.sfx_fff_order_2 == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_answer_correct_2.mp3?v=1744989855290", 2);
              upd("sfx_fff_order_2", 0);
            }
            if(data.sfx_fff_order_3 == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_answer_correct_3.mp3?v=1744989856843", 2);
              upd("sfx_fff_order_3", 0);
            }
            if(data.sfx_fff_order_4 == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_answer_correct_4.mp3?v=1744989858657", 2);
              upd("sfx_fff_order_4", 0);
            }
            if(data.sfx_fff_results == 1) {
              setTimeout(function(){
                con.StopSound(4);
              }, 1000);
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_reveal_times.mp3?v=1744989868979", 2);
              upd("sfx_fff_results", 0);
            }
                    
            if(data.sfx_po10_reveal_short == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/FIXED%2015.7.2021%20money%20reveal%20portugual%202020.mp3?v=1745752366543", 1);
              upd("sfx_po10_reveal_short", 0);
            }
            if(data.sfx_po10_reveal == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/m10_ld_question.mp3?v=1747638695761", 1);
              upd("sfx_po10_reveal", 0);
            }
          
            if(data.sfx_reveal_2 == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/reveal%202%20sfx.mp3?v=1746351555324", 1);
              upd("sfx_reveal_2", 0);
            }
            if(data.sfx_reveal_pass == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/reveal%20pass%20sfx%20-10.mp3?v=1746464139523", 4);
              upd("sfx_reveal_pass", 0);
            }
          
            if(data.sfx_lights_down == 1) {
              if (data.q_now <= 5) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/mus_game_light_down_q_05.wav?v=1745509559654", 2);
              }
              else if (data.q_now == 6 || data.q_now == 11) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/mus_game_light_down_q_06.wav?v=1745509560070", 2);
              }
              else if (data.q_now == 7 || data.q_now == 12) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/mus_game_light_down_q_07and12.wav?v=1745509560709", 2);
              }
              else if (data.q_now == 8 || data.q_now == 13) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/mus_game_light_down_q_08and13.wav?v=1745509564186", 2);
              }
              else if (data.q_now == 9 || data.q_now == 14) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/mus_game_light_down_q_09and14.wav?v=1745509564107", 2);
              }
              else if (data.q_now == 10 || data.q_now == 15) {
                //con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/mus_game_light_down_q_10and15.wav?v=1745509581118", 2);
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/mus_game_light_down_q_05.wav?v=1745509559654", 2);
              }
              
              upd("sfx_lights_down", 0);
            }
          
            if(data.sfx_q_bed == 1) {
              if(data.q_now >= 6) {
                con.StopSound(2);
              }
              
              if(data.q_now >= 1 && data.q_now <= 5) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/06.%20HS%20Question%201-5%20Bed.mp3?v=1745510691331", 5);
              }
              else if (data.q_now == 6) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/07.%20HS%20Question%20Bed%206.mp3?v=1745510689184", 5);
              }
              else if (data.q_now == 7) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/08.%20HS%20Question%20Bed%207.mp3?v=1745510690938", 5);
              }
              else if (data.q_now == 8) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/09.%20HS%20Question%20Bed%208.mp3?v=1745510692803", 5);
              }
              else if (data.q_now == 9) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/10.%20HS%20Question%20Bed%209.mp3?v=1745510694431", 5);
              }
              else if (data.q_now == 10) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/11.%20HS%20Question%20Bed%2010.mp3?v=1745510696347", 5);
              }
              else if (data.q_now == 11) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/12.%20HS%20Question%20Bed%2011.mp3?v=1745510700211", 5);
              }
              else if (data.q_now == 12) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/13.%20HS%20Question%20Bed%2012.mp3?v=1745510703917", 5);
              }
              else if (data.q_now == 13) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/14.%20HS%20Question%20Bed%2013.mp3?v=1745510705533", 5);
              }
              else if (data.q_now == 14) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/15.%20HS%20Question%20Bed%2014.mp3?v=1745510710175", 5);
              }
              else if (data.q_now == 15) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/16.%20HS%20Question%20Bed%2015.mp3?v=1745510713466", 5);
              }
              
              upd("sfx_q_bed", 0);
            }
            if(data.stop_q_bed == 1) {
              con.StopSound(5);
              upd("stop_q_bed", 0);
            }
          
            if(data.sfx_timer == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/timer_90.mp3?v=1745512561293", 2);
              upd("sfx_timer", 0);
            }
            if(data.sfx_stop_timer == 1) {
              setTimeout(function(){
                con.StopSound(2);
              }, 250);
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/explosion.mp3?v=1745512562018", 1);
              upd("sfx_stop_timer", 0);
            }
            if(data.sfx_pass == 1) {
              con.StopSound(2);
              setTimeout(function(){
                con.StopSound(5);
              }, 500);
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/pass.mp3?v=1746449481824", 1);
              upd("sfx_pass", 0);
            }
          
            if(data.sfx_final_answer == 1) {
              if (data.q_now <= 5) {
                setTimeout(function(){
                  con.DecreaseSoundVolume(5, 0.1, 0.025, 500);
                }, 0);
              }
              else{
                setTimeout(function(){
                  con.StopSound(5);
                }, 0);
              }
              
              if (data.q_now == 6 || data.q_now == 11) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/final_answer_1.mp3?v=1745594064093", 3);
              }
              else if (data.q_now == 7 || data.q_now == 12) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/final_answer_2.mp3?v=1745594064707", 3);
              }
              else if (data.q_now == 8 || data.q_now == 13) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/final_answer_3.mp3?v=1745594066693", 3);
              }
              else if (data.q_now == 9 || data.q_now == 14) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/final_answer_4.mp3?v=1745594067698", 3);
              }
              else if (data.q_now == 10 || data.q_now == 15) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/final_answer_4.mp3?v=1745594067698", 3);
              }
              
              upd("sfx_final_answer", 0);
            }
            
            if(data.stop_music_undo == 1) {
              if (data.q_now <= 5) {
                con.StopSound(5);
              }
              else {
                con.StopSound(3);
              }
              
              upd("stop_music_undo", 0);
            }
          
            if(data.sfx_correct == 1) {
              if (data.q_now <= 5) {
                setTimeout(function(){
                  con.StopSound(5);
                }, 500);
              }
              else{
                setTimeout(function(){
                  con.StopSound(3);
                }, 500);
              }
              
              if(data.q_top == data.q_now) {
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/Q15%20Win.mp3?v=1745594986068", 2);
              }
              else if(data.q_now == data.q_milestone){
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/mus_game_question_winstep_10.wav?v=1745602151649", 2);
              }
              else{
                con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fastest_finger_reveal_times.mp3?v=1744989868979", 2);
              }
              
              upd("sfx_correct", 0);
            }
          
            if(data.sfx_wrong == 1) {
              if (data.q_now <= 5) {
                setTimeout(function(){
                  con.StopSound(5);
                }, 500);
              }
              else{
                setTimeout(function(){
                  con.StopSound(3);
                }, 500);
              }
              
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/mus_game_question_lost_06.wav?v=1745595379279", 2);
              
              upd("sfx_wrong", 0);
            }
          
            if(data.stop_music_for_comm == 1) {
              con.StopSound(3);
              con.StopSound(5);
              upd("stop_music_for_comm", 0);
            }
          
            if(data.play_music_after_comm == 1) {
              upd("play_music_after_comm", 0);
              if(data.q_now <= 5) {
                upd("sfx_q_bed", 1);
              }
              else{
                upd("sfx_final_answer", 1);
              }
            }
          
            // Lifelines
            if (data.sfx_ll_ff == 1) {
              con.PlaySound("https://cdn.glitch.global/1e0ed98c-8cea-492e-ab8c-1dec944f253e/fifty_fifty.mp3?v=1745768905038", 1);
              upd("sfx_ll_ff", 0);
            }
          
            // End of Lifelines
          
            if(data.pause_bed == 1) {
              con.StopSound(3,1);
              con.StopSound(4,1);
              con.StopSound(5,1);
              upd("pause_bed", 0);
            }
            if(data.resume_bed == 1) {
              con.ResumeSound(3);
              con.ResumeSound(4);
              con.ResumeSound(5);
              upd("resume_bed", 0);
            }
            if(data.stop_sounds == 1) {
              con.StopSound();
              upd("stop_sounds", 0);
            }
        });
        
      
    }(window.CONTROLLER = window.CONTROLLER || {}));
});
