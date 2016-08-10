

//OnLoad
function showThis(){
  $("#buttonOne").fadeIn("medium");
  $(".blackOverLay").fadeIn(4000);
  $(".firstLine").fadeIn();
  $(".holderMaitre").hide();
  $("#backFromWin").hide();
  //
  $(".chatBox").hide(8000);
  $(".adviceBox").hide(8000);
  $(".talkBox").hide(8500);
  $(".moreBox").hide(11500);
  $(".chatBox").fadeIn(8000);
  $(".adviceBox").fadeIn(8000);
  $(".talkBox").fadeIn(9500);
  $(".moreBox").fadeIn(12500);
  $(".fLTitleLogo").fadeIn(8000);

};



//Will fade in action call

setTimeout(
  function()
  { showThis()
  }, 5000);

//Exit out overlay

function closeThis(){
  $(".imageContainer").slideUp(1000);
  $("#buttonOne").fadeOut("medium");
  $(".blackOverLay").fadeOut(1000);
};

//Render Win/Maitre
function winThis(){
  $(".imageContainer").fadeOut("medium");
  $(".holderMaitre").fadeIn("medium");
  $(".blackOverLayTwo").fadeIn("medium");
  $("#backFromWin").show();
  $(".imageHold").fadeOut("medium");
  $(".guideInfoContent").hide("medium");
  $(".firstLine").hide("medium");
  $(".logoImage").hide("medium");
  $(".serviceContainer").hide("medium");
  $(".fillerSpace").hide("medium");
  $(".storeLinks").hide("medium");
  $(".contactUs").fadeOut("medium");
  $(".contactUsX").fadeOut("medium");

};


$(function weDontKnow(){
  $(".contactInfo").hide();
  $(".buttonHolder").hide();
});

$(function contactHit(){
  console.log('what');
  $(".contactUs").on("click", function contactHit(){
    $(".blackOverLay").fadeOut(3000);
    $(".contactInfo").fadeIn(4000);
    $(".contactUs").fadeOut(3000);
    $(".contactContent").fadeIn(3000);
  });
});



//Back Functionality



$(function goBackNow(){
  console.log('hitting');
  $("#backButton").on("click", function goBackNow(){
    $(".contactInfo").fadeOut(2000);
    $(".contactContent").fadeOut(2000);
    //Unresolved
    $("#buttonOne").fadeIn("medium");
    $(".blackOverLay").fadeIn(4000);
    $(".contactUs").fadeIn(4000);

  });
});

$(function goBackFromWin(){
  console.log('operational');
  $("#backFromWin").on("click", function goBackFromWin(){
    //show Main Menu

    //
    $(".blackOverLayTwo").hide(2000);
    $(".holderMaitre").hide(2000);
    $(".imageContainer").fadeIn(4000);
    $(".blackOverLay").fadeIn(4000);
    $(".imageHold").fadeIn(4000);
    $(".serviceContainer").fadeIn(4000);
    $(".contactDiv").fadeIn(4000);
    $(".contactUs").fadeIn(4000);
    $(".firstLine").fadeIn(4000);
    $(".storeLinks").fadeIn(4000);
    $(".item").fadeIn(4000);
    $(".logoImage").fadeIn(4000);
    $(".fillerSpace").fadeIn(4000);
    $("#backFromWin").hide();

  });
});
