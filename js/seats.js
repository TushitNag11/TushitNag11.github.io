$(document).ready(function(){
$('.cinema-seats .seat').on('click', function() {
    $(this).toggleClass('active');
    alert(  $(this).attr('index'));
    
  });

 $('.submit').on('click',function() {

    $(this).toggleClass('selected');

    alert("seatchages");
 }) 
});
//   $(this).toggleClass('selected');
//   alert("already selected")
// });