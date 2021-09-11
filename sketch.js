let song;

function setup() {
  song = loadSound("assets/nime_24_8.mp3");
  // createCanvas(windowWidth, windowHeight);
  background(255);

}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    console.log("song play");
    // background(255, 0, 0);
  } else {
    song.play();
    // background(0, 255, 0);
  }
}

// $(document).mousemove(function(event) {
//   windowWidth = $(window).width();
//   windowHeight = $(window).height();

//   mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
//   mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

//   $('.spectrum-background').css('background', ' radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
// });
