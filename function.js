  $('#slider1').on('click', function(){
    if ($(this).prop("checked")) {

      document.getElementById("Bulb1").src="bulb.png"

      $('#red1').on('click', function(){
        document.getElementById("Bulb1").className="redgloweffect"
      });

      $('#green1').on('click', function(){
        document.getElementById("Bulb1").className="greengloweffect"
      
      });

      $('#yellow1').on('click', function(){
        document.getElementById("Bulb1").className="yellowgloweffect"
      
      });

    } else {
      // If the slider is turned off (unchecked), change the image back to its original state
      document.getElementById("Bulb1").src="Light.png"
      document.getElementById("Bulb1").className="glow-effect"
    }
  });

  $('#slider2').on('click', function(){
    if ($(this).prop("checked")) {
      // If the slider is turned on (checked), change the image
      document.getElementById("Bulb2").src="bulb.png"

      $('#red2').on('click', function(){
        document.getElementById("Bulb2").className="redgloweffect"
      
      });

      $('#green2').on('click', function(){
        document.getElementById("Bulb2").className="greengloweffect"
      
      });

      $('#yellow2').on('click', function(){
        document.getElementById("Bulb2").className="yellowgloweffect"
      
      });

    } else {
      // If the slider is turned off (unchecked), change the image back to its original state
      document.getElementById("Bulb2").src="Light.png"
      document.getElementById("Bulb2").className="glow-effect"
    }
  });

  $('#slider3').on('click', function(){
    if ($(this).prop("checked")) {
      // If the slider is turned on (checked), change the image
      document.getElementById("Bulb3").src="bulb.png"
      
  $('#red3').on('click', function(){
    document.getElementById("Bulb3").className="redgloweffect"
  
  });

  $('#green3').on('click', function(){
    document.getElementById("Bulb3").className="greengloweffect"
  
  });

  $('#yellow3').on('click', function(){
    document.getElementById("Bulb3").className="yellowgloweffect"
  
  });

    } else {
      // If the slider is turned off (unchecked), change the image back to its original state
      document.getElementById("Bulb3").src="Light.png"
      document.getElementById("Bulb3").className="glow-effect"
    }
  });