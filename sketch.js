let monoSynth;
let notes = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab5", "A5", "Bb5", "B5", "C5"]

function setup() {
    let cnv = createCanvas(displayWidth, displayHeight);
    cnv.mousePressed(playSynth);
    monoSynth = new p5.MonoSynth();
  }
  
  function draw() {
    background(200);

    fill(0);
    rect(225, 50, 800, 450);

    fill(150);
    rect(300, 75, 488, 75);

    fill(255);
    rect(300, 175, 60, 300);
    rect(361, 175, 60, 300);
    rect(422, 175, 60, 300);
    rect(483, 175, 60, 300);
    rect(544, 175, 60, 300);
    rect(605, 175, 60, 300);
    rect(666, 175, 60, 300);
    rect(727, 175, 60, 300);
  }

  function playSynth() {
    userStartAudio();

    let velocity = 1;
    let time = 0;
    let dur = 1/6;

    if(mouseX >= 300 && mouseX < 360 && mouseY >= 175 && mouseY <=475) {
      monoSynth.play(notes[0], velocity, time, dur);
      }
      //   else if(mouseX >= 251 && mouseX < 301 && mouseY >= 100 && mouseY <=400) {
      // monoSynth.play(notes[1], velocity, time, dur);
      // }
      else if(mouseX >= 361 && mouseX < 421 && mouseY >= 175 && mouseY <=475) {
        monoSynth.play(notes[2], velocity, time, dur);
        }
        // else if(mouseX >= 251 && mouseX < 301 && mouseY >= 100 && mouseY <=400) {
        //   monoSynth.play(notes[3], velocity, time, dur);
        //   }
          else if(mouseX >= 422 && mouseX < 482 && mouseY >= 175 && mouseY <=475) {
            monoSynth.play(notes[4], velocity, time, dur);
            }
            else if(mouseX >= 483 && mouseX < 543 && mouseY >= 175 && mouseY <=475) {
              monoSynth.play(notes[5], velocity, time, dur);
              }
              else if(mouseX >= 544 && mouseX < 604 && mouseY >= 175 && mouseY <=475) {
                monoSynth.play(notes[7], velocity, time, dur);
                }
                // else if(mouseX >= 251 && mouseX < 301 && mouseY >= 100 && mouseY <=400) {
                //   monoSynth.play(notes[7], velocity, time, dur);
                //   }
                  else if(mouseX >= 605 && mouseX < 665 && mouseY >= 175 && mouseY <=475) {
                    monoSynth.play(notes[9], velocity, time, dur);
                    }
                    // else if(mouseX >= 251 && mouseX < 301 && mouseY >= 100 && mouseY <=400) {
                    //   monoSynth.play(notes[9], velocity, time, dur);
                    //   }
                      else if(mouseX >= 666 && mouseX < 726 && mouseY >= 175 && mouseY <=475) {
                        monoSynth.play(notes[11], velocity, time, dur);
                        }
                        // else if(mouseX >= 251 && mouseX < 301 && mouseY >= 100 && mouseY <=400) {
                        //   monoSynth.play(notes[11], velocity, time, dur);
                        //   }
                          else if(mouseX >= 727 && mouseX < 787 && mouseY >= 175 && mouseY <=475) {
                            monoSynth.play(notes[12], velocity, time, dur);
                            }
  }