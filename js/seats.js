$(document).ready(function(){

  var seatNo="";

  $("#continue").on('click',function(){

    var numOfSeats = localStorage.getItem("Seats");
    var seatSelected = $('.seat.active').length;

      sessionStorage.setItem("seat Num",seatNo);
    var price = numOfSeats * 10;
      sessionStorage.setItem("price",price);

  });
$('.cinema-seats .seat').on('click', function() {
    $(this).toggleClass('active');
    seatNo += ""+$(this).attr('index')+" ";
    
  });

  
  
});
//   $(this).toggleClass('selected');
//   alert("already selected")
// });