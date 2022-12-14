let monoSynth;
let autoSynth;
let myFont;
let myImage;
var loopTimer = 0;
let interval = 400;
var counter = 0;
let notes = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab5", "A5", "Bb5", "B5", "C5"]

 //Mary Had a Little Lamb - 33 Notes
 let mary = [0, 0, 0, 0, "E4", "D4", "C4", "D4", "E4", "E4", "E4", 0, "D4", "D4", "D4", 0, "E4", "G4", "G4", 0, "E4", "D4", "C4", "D4", "E4", "E4", "E4", "E4", "D4", "D4", "E4", "D4", "C4"]

 //Twinkle Twinkle Little Star - 51 Notes
 let twinkle = [0, 0, 0, 0, "C4", "C4", "G4", "G4", "A5", "A5", "G4", 0, "F4", "F4", "E4", "E4", "D4", "D4", "C4", 0, "G4", "G4", "F4", "F4", "E4", "E4", "D4", 0, "G4", "G4", "F4", "F4", "E4", "E4", "D4", 0, "C4", "C4", "G4", "G4", "A5", "A5", "G4", 0, "F4", "F4", "E4", "E4", "D4", "D4", "C4"]

 //The Wheels on the Bus - 39 Notes
 let wheels = [0, 0, 0, 0, "D4", "G4", 0, "G4", "G4", "G4", "B5", "D5", "B5", "G4", 0, "A5", "A5", "A5", 0, "Gb4", "E4", "D4", 0, "D4", "G4", 0, "G4", "G4", "G4", "B5", "D5", "B5", "G4", 0, "A5", 0, "D4", 0, "G4"]

 function preload() {
  myFont = loadFont('assets/RobotoSlab-Medium.ttf');
  myImage = loadImage('assets/transparent-music-note.png');
  baseImage = loadImage('assets/simple-desk.png');
}

 function setup() {
    let cnv = createCanvas(displayWidth, displayHeight);
    cnv.mousePressed(playSynth1);

    let colMary = color(254, 57, 57);
    let colTwinkle = color(30, 144, 255);
    let colWheels = color(252, 235, 74);
    let fontColor = color(0, 0, 0, 0.5);
    let buttonStroke = color(185, 185 ,185);
    textFont(myFont);
    
    var button1 = createButton('x');
    button1.style('background-color', colMary);
    button1.style('border-radius', 50 + "%");
    button1.style('font-size', 25 + 'px');
    button1.style('color', fontColor);
    button1.style('border-style', "solid");
    button1.style('border-color', buttonStroke);
    button1.position(853, 156);
    button1.size(35);
    button1.mousePressed(playSynth2);

    var button2 = createButton('x');
    button2.style('background-color', colTwinkle);
    button2.style('border-radius', 50 + "%");
    button2.style('font-size', 25 + 'px');
    button2.style('color', fontColor);
    button2.style('border-style', "solid");
    button2.style('border-color', buttonStroke);
    button2.position(918, 156);
    button2.size(35);
    button2.mousePressed(playSynth3);

    var button3 = createButton('x');
    button3.style('background-color', colWheels);
    button3.style('border-radius', 50 + "%");
    button3.style('font-size', 25 + 'px');
    button3.style('color', fontColor);
    button3.style('border-style', "solid");
    button3.style('border-color', buttonStroke);
    button3.position(983,156);
    button3.size(35);
    button3.mousePressed(playSynth4);

    monoSynth = new p5.MonoSynth();
    autoSynth = new p5.MonoSynth();
  }
  
  function draw() {
    background(200);
    image(baseImage, 0, 0, width, height);

    //Piano body
    fill(0);
    noStroke();
    rect(225, 50, 850, 450);
    fill(255);
    textSize(30);
    text("Creative Coding", 820, 118);
    stroke(255);
    line(227, 52, 227, 498);
    line(227, 52, 1073, 52);
    line(232, 56, 232, 494);
    line(232, 56, 1068, 56);
    line(1068, 56, 1068, 493);
    line(232, 493, 1068, 493);
    line(1073, 52, 1073, 498);
    line(227, 498, 1073, 498);

    //Piano screen
    fill(140, 160, 145);
    rect(296, 75, 496, 75);
    noFill();
    stroke(0);
    strokeWeight(2);
    rect(300, 79, 488, 67);

    //Piano speaker
    stroke(192,192,192);
    fill(211, 211, 211, 85);
    ellipse(935, 340, 195, 230);
    noStroke();
    ellipse(935, 340, 60, 60);
    stroke(0);
    strokeWeight(1);
    ellipse(935, 340, 180, 215);
    fill(100, 100, 100);
    ellipse(935, 340, 50, 50);
    fill(220, 220, 220);
    ellipse(935, 340, 10, 10);

    //Piano keys

    noFill();
    stroke(255);
    strokeWeight(2);
    rect(296, 171, 495, 308);
    textFont(myFont);

    //C key
    noStroke();
    fill(255);
    if((mouseIsPressed === true && mouseX >= 300 && mouseX < 345 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed ===true && mouseX >= 300 && mouseX < 360 && mouseY > 375 && mouseY <=475)) {
    textSize(36);
    fill(0);
    text("C", 317, 125);
    image(myImage, 342, 88, 15, 20);
    fill(241, 235, 156);
    }
    rect(300, 175, 60, 300);

    //D key
    fill(255);
    if((mouseIsPressed === true && mouseX >= 376 && mouseX < 405 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 361 && mouseX < 421 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("D", 378, 125);
      image(myImage, 403, 88, 15, 20);
      fill(241, 235, 156);
      }
    rect(361, 175, 60, 300);

    //E key
    fill(255);
    if((mouseIsPressed === true && mouseX >= 437 && mouseX < 482 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 422 && mouseX < 482 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("E", 439, 125);
      image(myImage, 464, 88, 15, 20);
      fill(241, 235, 156);
      }
    rect(422, 175, 60, 300);

    //F key
    fill(255);
    if((mouseIsPressed === true && mouseX >= 483 && mouseX < 528 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 483 && mouseX < 543 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("F", 500, 125);
      image(myImage, 525, 88, 15, 20);
      fill(241, 235, 156);
      }
      rect(483, 175, 60, 300);

      //G key
      fill(255);
    if((mouseIsPressed === true && mouseX >= 559 && mouseX < 589 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 544 && mouseX < 604 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("G", 560, 125);
      image(myImage, 585, 88, 15, 20);
      fill(241, 235, 156);
      }
      rect(544, 175, 60, 300);

      //A key
      fill(255);
    if((mouseIsPressed === true && mouseX >= 620 && mouseX < 650 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 605 && mouseX < 665 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("A", 620, 125);
      image(myImage, 645, 88, 15, 20);
      fill(241, 235, 156);
      }
      rect(605, 175, 60, 300);

      //B key
      fill(255);
    if((mouseIsPressed === true && mouseX >= 681 && mouseX < 726 && mouseY >= 175 && mouseY <=375) || (mouseIsPressed === true && mouseX >= 666 && mouseX < 726 && mouseY > 375 && mouseY <=475)) {
      textSize(36);
      fill(0);
      text("B", 686, 125);
      image(myImage, 711, 88, 15, 20);
      fill(241, 235, 156);
      }
    rect(666, 175, 60, 300);

    //Second C key
    fill(255);
    if(mouseIsPressed === true && mouseX >= 727 && mouseX < 787 && mouseY >= 175 && mouseY <=475) {
      textSize(36);
      fill(0);
      text("C", 742, 125);
      image(myImage, 767, 88, 15, 20);
      fill(241, 235, 156);
      }
     rect(727, 175, 60, 300);

     //Db4 Key
    fill (0);
    if(mouseIsPressed === true && mouseX >= 345 && mouseX < 375 && mouseY >= 172 && mouseY <=375) {
      textSize(36);
      text("Db", 338, 125);
      image(myImage, 383, 88, 15, 20);
      fill(241, 235, 156);
    }
      rect (345, 172, 30, 203);

   //Eb4 Key
   fill (0);
   if(mouseIsPressed === true && mouseX >= 406 && mouseX < 436 && mouseY >= 172 && mouseY <=375) {
     textSize(36);
     text("Eb", 399, 125);
     image(myImage, 444, 88, 15, 20);
     fill(241, 235, 156);
   }
     rect (406, 172, 30, 203);

  //Gb4 Key
  fill (0);
  if(mouseIsPressed === true && mouseX >= 528 && mouseX < 558 && mouseY >= 172 && mouseY <=375) {
    textSize(36);
    text("Gb", 521, 125);
    image(myImage, 566, 88, 15, 20);
    fill(241, 235, 156);
  }
    rect (528, 172, 30, 203);

  //Ab5 Key
  fill (0);
  if(mouseIsPressed === true && mouseX >= 589 && mouseX < 619 && mouseY >= 172 && mouseY <=375) {
    textSize(36);
    text("Ab", 582, 125);
    image(myImage, 629, 88, 15, 20);
    fill(241, 235, 156);
  }
    rect (589, 172, 30, 203);

  //Bb5 Key
  fill (0);
  if(mouseIsPressed === true && mouseX >= 650 && mouseX < 680 && mouseY >= 172 && mouseY <=375) {
    textSize(36);
    text("Bb", 643, 125);
    image(myImage, 688, 88, 15, 20);
    fill(241, 235, 156);
  }
    rect (650, 172, 30, 203);

  //Minor key accents
  stroke(255);
  strokeWeight(0.5);
  line(348, 170, 348, 372);
  line(349, 372, 371, 372);
  line(372, 170, 372, 372);

  line(409, 170, 409, 372);
  line(410, 372, 432, 372);
  line(433, 170, 433, 372);

  line(531, 170, 531, 372);
  line(532, 372, 554, 372);
  line(555, 170, 555, 372);

  line(592, 170, 592, 372);
  line(593, 372, 615, 372);
  line(616, 170, 616, 372);

  line(653, 170, 653, 372);
  line(654, 372, 676, 372);
  line(677, 170, 677, 372);

}

  function playSynth1() {
    userStartAudio();

    let velocity = 1;
    let time = 0;
    let dur = 1/6;

    //Playable Piano keys

    switch (true) {
      case (mouseX >= 300 && mouseX < 345 && mouseY >= 175 && mouseY <=375) || (mouseX >= 300 && mouseX < 360 && mouseY > 375 && mouseY <=475):
        monoSynth.play(notes[0], velocity, time, dur);
        break;
      case mouseX >= 345 && mouseX < 375 && mouseY >= 172 && mouseY <=375:
        monoSynth.play(notes[1], velocity, time, dur);
        break;
      case (mouseX >= 376 && mouseX < 405 && mouseY >= 175 && mouseY <=375) || (mouseX >= 361 && mouseX < 421 && mouseY > 375 && mouseY <=475):
        monoSynth.play(notes[2], velocity, time, dur);
        break;
      case mouseX >= 406 && mouseX < 436 && mouseY >= 172 && mouseY <=375:
        monoSynth.play(notes[3], velocity, time, dur);
        break;
      case (mouseX >= 437 && mouseX < 482 && mouseY >= 175 && mouseY <=375) || (mouseX >= 422 && mouseX < 482 && mouseY > 375 && mouseY <=475):
        monoSynth.play(notes[4], velocity, time, dur);
        break;
      case (mouseX >= 483 && mouseX < 528 && mouseY >= 175 && mouseY <=375) || (mouseX >= 483 && mouseX < 543 && mouseY > 375 && mouseY <=475):
        monoSynth.play(notes[5], velocity, time, dur);
        break;
      case mouseX >= 528 && mouseX < 558 && mouseY >= 172 && mouseY <=375:
        monoSynth.play(notes[6], velocity, time, dur);
        break;
      case (mouseX >= 559 && mouseX < 589 && mouseY >= 175 && mouseY <=375) || (mouseX >= 544 && mouseX < 604 && mouseY > 375 && mouseY <=475):
        monoSynth.play(notes[7], velocity, time, dur);
        break;
      case mouseX >= 589 && mouseX < 619 && mouseY >= 172 && mouseY <=375:
        monoSynth.play(notes[8], velocity, time, dur);
        break;
      case (mouseX >= 620 && mouseX < 650 && mouseY >= 175 && mouseY <=375) || (mouseX >= 605 && mouseX < 665 && mouseY > 375 && mouseY <=475):
        monoSynth.play(notes[9], velocity, time, dur);
        break;
      case mouseX >= 650 && mouseX < 680 && mouseY >= 172 && mouseY <=375:
        monoSynth.play(notes[10], velocity, time, dur);
        break;
      case (mouseX >= 681 && mouseX < 726 && mouseY >= 175 && mouseY <=375) || (mouseX >= 666 && mouseX < 726 && mouseY > 375 && mouseY <=475):
        monoSynth.play(notes[11], velocity, time, dur);
        break;
      case mouseX >= 727 && mouseX < 787 && mouseY >= 175 && mouseY <=475:
        monoSynth.play(notes[12], velocity, time, dur);
        break;
    }
  }

  function playSynth2() {
    userStartAudio();

    let velocity = 1;
    let time = 0;
    let dur = 1/6;
    
    while (counter < 33) {
      if(millis() >= loopTimer) {
        loopTimer += interval;
        autoSynth.play(mary[counter], velocity, time, dur);
        counter++;
      }
    }
    counter = 0;
}

function playSynth3() {
  userStartAudio();

  let velocity = 1;
  let time = 0;
  let dur = 1/6;
  
  while (counter < 51) {
    if(millis() >= loopTimer) {
      loopTimer += interval;
      autoSynth.play(twinkle[counter], velocity, time, dur);
      counter++;
    }
  }
  counter = 0;
}

function playSynth4() {
  userStartAudio();

    let velocity = 1;
    let time = 0;
    let dur = 1/6;

  while (counter < 39) {
    if (millis() >= loopTimer) {
      loopTimer += interval;
      autoSynth.play(wheels[counter], velocity, time, dur);
      counter ++;
    }
  }
  counter = 0;
}

// function mouseClicked() {
// if (mouseX >= 855 && mouseY >=157 && mouseX <= 882 && mouseY <= 189) {
//   for (let i = 0; i < 32; i++) {
//     switch (true) {
//       case mary[counter] == mary[4]:
//         textSize(36);
//         fill(0);
//         text("E", 439, 125);
//         image(myImage, 464, 88, 15, 20);
//         break;
//     //   case mary[i] == mary[1]:
//     //     monoSynth.play(mary[1], velocity, time, dur);
//     //     // break;
//     //   case mary[1]:
//     //     monoSynth.play(mary[1], velocity, time, dur);
//     //     // break;
//     //  case mary[2]:
//     //     monoSynth.play(mary[2], velocity, time, dur);
//     //     // break;
//     //   case mary[i] == "G4":
//     //     monoSynth.play(mary[14], velocity, time, dur);
//     //     //  break;
//       default:
//         background(220);
//       }
//   }
// }
// }