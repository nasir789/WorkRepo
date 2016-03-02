
//This is for page length
for (var i=0; i<100; i++){
  document.write("number" + i + "</br>");
}
//Another extra for page length
for( var i=0; i<10; i++){
  document.write("</ul>" + i + "</br>");
}

//This will show the Content(s) Div w/ OverLay
function showThis(){
  $(".mainContent").slideDown(1000);
  $("#buttonOne").fadeIn("medium");
  $(".blackOverLay").slideDown(500);
};


//This will close and/or hide pop-up
function closeThis(){
  $(".mainContent").slideUp(500);
  $("#buttonOne").fadeOut("medium");
  $(".blackOverLay").slideUp(1000);
};

//Will send user back to his/her cart
function visitThis(){
  location.href = "https://www.arcteryx.com/YourCart.aspx?EN";
  $("#buttonTwo").fadeOut(1000)
};

//This will instantiate Content(s) Div w/Overlay loading onto window
//at approximately bottom 10% of the page
//will trigger multiple times if dismissed
$(window).scroll(function() {
    if($(window).scrollTop() > $(document).height()*0.6)
    showThis();
});
