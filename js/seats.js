$(document).ready(function(){

  var seatNo="";

  $("#continue").on('click',function(){

    var numOfSeats = sessionStorage.getItem("Seats");
    var seatSelected = $('.seat.active').length;

    if(seatSelected!=numOfSeats)
    {
      alert("Please select correct number of seats");
    }
    else{
      sessionStorage.setItem("seat Num",seatNo);
      var price = numOfSeats * 10;
      sessionStorage.setItem("price",price);
      document.getElementById("book").action = "/Receipt.html";
    }
  });
$('.cinema-seats .seat').on('click', function() {
    $(this).toggleClass('active');
    seatNo += ""+$(this).attr('index')+" ";
    
  });

  
  
});
//   $(this).toggleClass('selected');
//   alert("already selected")
// });