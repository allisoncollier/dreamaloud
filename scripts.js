$(document).ready(function()    {

  /**
  Adding a new other-options div to the color-options div
  to allow admin to add multiple colors and sizes for item.
  **/
  $("button#add-color-option").click(function(){
    $("div#color-options").append('<ul class=other-option>' +
    '<li class="product-and-info"> <div id="info"> <form> ' +
    '<label class="color-label">Color: </label> <input type="text" class="item-color"/> '+
    '</form> <ul id="options-list"> <li id="first-option"> '+
    '<form> <label>Size Options: </label> ' +
    '<input type="text" class="size-options" /> <br> <label>Quantity Options: </label>  ' +
    '<input type="text" class="quantity-options" /> </form> </li> ' +
    '<li class="size-and-quantity"> <form> <input type="text" class="size-options" />  '+
    '<br> <input type="text" class="quantity-options" /> </form> </li> ' +
    '<li class="size-and-quantity"> <form> <input type="text" class="size-options" /> ' +
    '<br> <input type="text" class="quantity-options" /> </form> </li> <li class="size-and-quantity"> ' +
    '<form> <input type="text" class="size-options" /> <br> <input type="text" class="quantity-options" /> ' +
    '</form> </li> </ul> <!--<button id="add-option">Add Option</button> ' +
    '<button id="remove-option">Remove Option</button>--> </div> </li> </ul>');
  });

  /**
  USER INTERATION 1: Creates shaking animation when user tries to remove the only
  color option in the div and gives error message that fades away.
  **/
  $("button#remove-color-option").click(function(){
    if($( "div#color-options > ul.other-option").length == 0){
      $("button#remove-color-option").animate({marginLeft: '5%'}, 'fast', function(){
        $("div#color-options").append("<h4 id='error' style='color:red; font-weight:bold'>There must be at least one color option for item.</h4>");
        $("button#remove-color-option").attr('disabled', true);
      $("button#remove-color-option").animate({marginLeft: '0'}, 'fast', function(){
        $("button#remove-color-option").animate({marginLeft: '5%'}, 'fast', function(){
          $("button#remove-color-option").animate({marginLeft: '0'}, 'fast');
          $("#error").delay(1500).fadeOut('slow', function(){
            $("#error").remove();
            $("button#remove-color-option").attr('disabled', false);
          });

        });
      });
      });
    }
    $( "div#color-options > ul.other-option").last().remove();
  });

  /**
  USER INTERACTION 2: When user hovers over pictures on the home page, the
  source of the image will change and a heading will be added with the name
  of the item in it.
  **/
  $( "#mainImage1" ).mouseover(function() {
    document.getElementById("mainImage1").src="Look1.2.jpg";
    $("#shopthislook ul").prepend("<h2>Elegant in Pink</h2>");
  });
  $( "#mainImage1" ).mouseout(function() {
    document.getElementById("mainImage1").src="Look1.jpg";
    $("#shopthislook ul h2").remove();
  });
  $( "#mainImage2" ).mouseover(function() {
    document.getElementById("mainImage2").src="Look2.2.jpg";
    $("#shopthislook ul").prepend("<h2>Flower Power</h2>");
  });
  $( "#mainImage2" ).mouseout(function() {
    document.getElementById("mainImage2").src="Look2.jpg";
    $("#shopthislook ul h2").remove();
  });
  $( "#mainImage3" ).mouseover(function() {
    document.getElementById("mainImage3").src="Look3.2.jpg";
    $("#shopthislook ul").prepend("<h2>Flamingo Bollo</h2>");
  });
  $( "#mainImage3" ).mouseout(function() {
    document.getElementById("mainImage3").src="Look3.jpg";
    $("#shopthislook ul h2").remove();
  });
  $( "#mainImage4" ).mouseover(function() {
    document.getElementById("mainImage4").src="Look4.2.jpg";
    $("#shopthislook ul").prepend("<h2>Tulle We Meet Again</h2>");
  });
  $( "#mainImage4" ).mouseout(function() {
    document.getElementById("mainImage4").src="Look4.jpg";
    $("#shopthislook ul h2").remove();
  });
});
