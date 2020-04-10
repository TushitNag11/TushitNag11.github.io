$(document).ready(function(){

  var seatNo="";

  $("#continue").on('click',function(){

    var numOfSeats = localStorage.getItem("Seats");
    var seatSelected = $('.seat.active').length;

      sessionStorage.setItem("seat Num",seatNo);
  

  });
$('.cinema-seats .seat').on('click', function() {
    $(this).toggleClass('active');
    seatNo += ""+$(this).attr('index')+" ";
    
  });

  
  
});
//   $(this).toggleClass('selected');
//   alert("already selected")
// });