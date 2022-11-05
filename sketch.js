let monoSynth;
let notes = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"]

function setup() {
    let cnv = createCanvas(displayWidth, displayHeight);
    cnv.mousePressed(playSynth);
    monoSynth = new p5.MonoSynth();
  }
  
  function draw() {
    background(0);

    fill(255);
    rect(200, 100, 50, 300);
    rect(251, 100, 50, 300);
  }

  function playSynth() {
    userStartAudio();

    let velocity = 1;
    let time = 0;
    let dur = 1/6;

    if(mouseX >= 200 && mouseX < 250 && mouseY >= 100 && mouseY <=400) {
      monoSynth.play(notes[0], velocity, time, dur);
      }
        else if(mouseX >= 251 && mouseX < 301 && mouseY >= 100 && mouseY <=400) {
      monoSynth.play(notes[12], velocity, time, dur);
      }
  }