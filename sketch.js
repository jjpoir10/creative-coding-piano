let monoSynth;
let notes = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5"]

function setup() {
    createCanvas(400, 400);
    let cnv = createCanvas(100, 100);
    cnv.mousePressed(playSynth);
    monoSynth = new p5.MonoSynth();
  }
  
  function draw() {
    background(220);
  }

  function playSynth() {
    userStartAudio();

    let velocity = 1;
    let time = 0;
    let dur = 1/6;

    monoSynth.play(notes[2], velocity, time, dur);
  }