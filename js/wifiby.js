$(document).ready(function()
{
  // scrolling
  $("#servicesBtn").click(function()
  {
    var scrollAmount = $("#services").offset().top;
    $('html,body').animate({scrollTop: scrollAmount}, 1000);
  });
  $("#contactBtn").click(function()
  {
    var scrollAmount = $("#contact").offset().top;
    $('html,body').animate({scrollTop: scrollAmount}, 1000);
  });
  $("#privacy").click(function()
  {
    event.preventDefault();
    alert("Privacy Policy\n\nInformation collected:\nName, Address, Telephone Number, Email Address and Payment Information\n\nUse of information:\nInformation is used to process payment for internet service and/or equipment and any add-ons.\n\nShared Information:\nInformation is shared with credit card processing company only to process monthly payments. No one else.\n\nOpting Out:\nPlease contact office at 760-325-4040\n");
  });
  $(".menuBtn1").click(function()
  {
      console.log("here");
      $("#mySidebar").css("display", "block");
  });
  $(".menuBtn2").click(function()
  {
      $("#mySidebar").css("display", "none");
  });
});
