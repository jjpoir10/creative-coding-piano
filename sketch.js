let monoSynth;
let notes = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab5", "A5", "Bb5", "B5", "C5"]

function setup() {
    let cnv = createCanvas(displayWidth, displayHeight);
    cnv.mousePressed(playSynth);
    monoSynth = new p5.MonoSynth();
  }
  
  function draw() {
    background(200);

    //Piano body
    fill(0);
    rect(225, 50, 800, 450);

    //Piano screen
    fill(156, 175, 136);
    rect(300, 75, 488, 75);

    //Piano keys

    //C key
    fill(255);
    if((mouseIsPressed === true && mouseX >= 300 && mouseX < 345 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed ===true && mouseX >= 300 && mouseX < 360 && mouseY > 375 && mouseY <=475)) {
    textSize(36);
    fill(0);
    text("Note: C", 330, 125);
    fill(241, 235, 156);
    }
    rect(300, 175, 60, 300);

    //D key
    fill(255);
    if((mouseIsPressed === true && mouseX >= 376 && mouseX < 405 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 361 && mouseX < 421 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("Note: D", 330, 125);
      fill(241, 235, 156);
      }
    rect(361, 175, 60, 300);

    //E key
    fill(255);
    if((mouseIsPressed === true && mouseX >= 437 && mouseX < 482 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 422 && mouseX < 482 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("Note: E", 330, 125);
      fill(241, 235, 156);
      }
    rect(422, 175, 60, 300);

    //F key
    fill(255);
    if((mouseIsPressed === true && mouseX >= 483 && mouseX < 528 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 483 && mouseX < 543 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("Note: F", 330, 125);
      fill(241, 235, 156);
      }
      rect(483, 175, 60, 300);

      //G key
      fill(255);
    if((mouseIsPressed === true && mouseX >= 559 && mouseX < 589 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 544 && mouseX < 604 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("Note: G", 330, 125);
      fill(241, 235, 156);
      }
      rect(544, 175, 60, 300);

      //A key
      fill(255);
    if((mouseIsPressed === true && mouseX >= 620 && mouseX < 650 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 605 && mouseX < 665 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("Note: A", 330, 125);
      fill(241, 235, 156);
      }
      rect(605, 175, 60, 300);

      //B key
      fill(255);
    if((mouseIsPressed === true && mouseX >= 681 && mouseX < 726 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 666 && mouseX < 726 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("Note: B", 330, 125);
      fill(241, 235, 156);
      }
    rect(666, 175, 60, 300);

    //Second C key
    fill(255);
    if(mouseIsPressed === true && mouseX >= 727 && mouseX < 787 && mouseY >= 175 && mouseY <=475) {
      textSize(36);
      fill(0);
      text("Note: C", 330, 125);
      fill(241, 235, 156);
      }
     rect(727, 175, 60, 300);

     //Db4 Key
    fill (0);
    if(mouseIsPressed === true && mouseX >= 345 && mouseX < 375 && mouseY >= 175 && mouseY <=375) {
      textSize(36);
      text("Note: Db", 330, 125);
      fill(241, 235, 156);
    }
      rect (345, 175, 30, 200);

   //Eb4 Key
   fill (0);
   if(mouseIsPressed === true && mouseX >= 406 && mouseX < 436 && mouseY >= 175 && mouseY <=375) {
     textSize(36);
     text("Note: Eb", 330, 125);
     fill(241, 235, 156);
   }
     rect (406, 175, 30, 200);

  //Gb4 Key
  fill (0);
  if(mouseIsPressed === true && mouseX >= 528 && mouseX < 558 && mouseY >= 175 && mouseY <=375) {
    textSize(36);
    text("Note: Gb", 330, 125);
    fill(241, 235, 156);
  }
    rect (528, 175, 30, 200);

  //Ab5 Key
  fill (0);
  if(mouseIsPressed === true && mouseX >= 589 && mouseX < 619 && mouseY >= 175 && mouseY <=375) {
    textSize(36);
    text("Note: Ab", 330, 125);
    fill(241, 235, 156);
  }
    rect (589, 175, 30, 200);

  //Bb5 Key
  fill (0);
  if(mouseIsPressed === true && mouseX >= 650 && mouseX < 680 && mouseY >= 175 && mouseY <=375) {
    textSize(36);
    text("Note: Bb", 330, 125);
    fill(241, 235, 156);
  }
    rect (650, 175, 30, 200);

  }

  function playSynth() {
    userStartAudio();

    let velocity = 1;
    let time = 0;
    let dur = 1/6;

    if((mouseX >= 300 && mouseX < 345 && mouseY >= 175 && mouseY <=375) || (mouseX >= 300 && mouseX < 360 && mouseY > 375 && mouseY <=475)) {
      monoSynth.play(notes[0], velocity, time, dur);
      }
      else if(mouseX >= 345 && mouseX < 375 && mouseY >= 175 && mouseY <=375) {
      monoSynth.play(notes[1], velocity, time, dur);
      }
      else if((mouseX >= 376 && mouseX < 405 && mouseY >= 175 && mouseY <=375) || (mouseX >= 361 && mouseX < 421 && mouseY > 375 && mouseY <=475)) {
        monoSynth.play(notes[2], velocity, time, dur);
        }
      else if(mouseX >= 406 && mouseX < 436 && mouseY >= 100 && mouseY <=375) {
        monoSynth.play(notes[3], velocity, time, dur);
        }
          else if((mouseX >= 437 && mouseX < 482 && mouseY >= 175 && mouseY <=375) || (mouseX >= 422 && mouseX < 482 && mouseY > 375 && mouseY <=475)) {
            monoSynth.play(notes[4], velocity, time, dur);
            }
            else if((mouseX >= 483 && mouseX < 528 && mouseY >= 175 && mouseY <=375) || (mouseX >= 483 && mouseX < 543 && mouseY > 375 && mouseY <=475)) {
              monoSynth.play(notes[5], velocity, time, dur);
              }
            else if(mouseX >= 528 && mouseX < 558 && mouseY >= 175 && mouseY <=375) {
              monoSynth.play(notes[6], velocity, time, dur);
              }
              else if((mouseX >= 559 && mouseX < 589 && mouseY >= 175 && mouseY <=375) || (mouseX >= 544 && mouseX < 604 && mouseY > 375 && mouseY <=475)) {
                monoSynth.play(notes[7], velocity, time, dur);
                }
              else if(mouseX >= 589 && mouseX < 619 && mouseY >= 175 && mouseY <=375) {
                monoSynth.play(notes[8], velocity, time, dur);
                }
                  else if((mouseX >= 620 && mouseX < 650 && mouseY >= 175 && mouseY <=375) || (mouseX >= 605 && mouseX < 665 && mouseY > 375 && mouseY <=475)) {
                    monoSynth.play(notes[9], velocity, time, dur);
                    }
                  else if (mouseX >= 650 && mouseX < 680 && mouseY >= 175 && mouseY <=375) {
                    monoSynth.play(notes[10], velocity, time, dur);
                      }
                      else if((mouseX >= 681 && mouseX < 726 && mouseY >= 175 && mouseY <=375) || (mouseX >= 666 && mouseX < 726 && mouseY > 375 && mouseY <=475)) {
                        monoSynth.play(notes[11], velocity, time, dur);
                        }
                      else if(mouseX >= 727 && mouseX < 787 && mouseY >= 175 && mouseY <=475) {
                            monoSynth.play(notes[12], velocity, time, dur);
                            }
  }