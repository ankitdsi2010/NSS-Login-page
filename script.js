function f1(){
  var element = document.getElementById("box1");
  element.classList.add("transit");
  f2();
}

function f2(){
  var element = document.getElementById("box3");
  element.classList.add("appear");
}

$(function(){
  $(".button1").click(function(){
    $('#form1').fadeIn(5000);
    $('#text1').fadeOut(1000, function() {
      $(this).replaceWith($('#text2').fadeIn(1000));
    });
  });
});

$(function(){
  $(".button2").click(function(){
    $('#form2').fadeIn(5000);
    $('#text1').fadeOut(1000, function() {
      $(this).replaceWith($('#text2').fadeIn(1000));
    });
  });
});
