$(document).ready(function(){
  //what we do//
  $(".design-icon").click(function(){
    $("#design-image").toggle();
    $('#design').toggle();
  });
  $(".development-icon").click(function(){
    $("#development-image").toggle();
    $('#development').toggle();
  });
  $(".product-management-icon").click(function(){
    $("#product-image").toggle();
    $('#product-management').toggle();
  });
  //portfolio//
  $("div.image-frame").hover(function(){
    $(".overlay1").show().addClass("mask flex-center rgba-red-strong");
    }); 
  //contact us//
  $("#btn").click(function(){
    var name= $("#name").val();
    var email=$("#email").val();
    var message=$("#comment").val();
    alert("Thank you " + name + " for your feedback.You will receive an email shortly via " + email);
  });
});


