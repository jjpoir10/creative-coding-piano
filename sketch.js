let monoSynth;
let key;

function setup() {
    createCanvas(400, 400);
    monoSynth = new p5.MonoSynth();
  }
  
  function draw() {
    background(220);
    fill(255);
    key = rect(0,0,200,200);
    key.mousePressed(playSynth);
  }

  function playSynth() {
    userStartAudio();

    let note1 = C4;
    let velocity = 1;
    let time = 0;
    let dur = 1/6;

    monoSynth.play(note1, velocity, time, dur);
  }