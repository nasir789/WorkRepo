
for (var i=0; i<100; i++){
  document.write("number" + i + "</br>");
}

function showThis(){
  $("#buttonOne").fadeIn("medium");
  $(".blackOverLay").fadeIn(4000);
};



setTimeout(
  function()
  { showThis()
  }, 5000);
