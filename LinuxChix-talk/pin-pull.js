var tessel= require('tessel'); // Import Tessel

var pin = tessel.port.A.pin[2]; // Select pin 2 on port A

var pullType = "pullup"; // Set the mode of `pin.pull to pullup`

var led = tessel.led[3]; // Blue LED of Tessel

pin.pull(pullType,(error, buffer) => { // Pin 2 pulled high

  if (error){
    throw error;
  }
});

setInterval({
  pin.read(function(error, number){

      if (error) {
        throw error;
      }

      // Pin 2 reads high when the pushbutton is not pressed since it is pulled up
      console.log(number);
      if (number == 1){
        led.off();
      }

      // Pin 2 reads low when the pushbutton is pressed since its connection with ground gets complete
      else{
        led.on();
      }

  });

}, 500);
