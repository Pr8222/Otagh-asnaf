$(document).ready(function () {
  $(".menu-item").click(function () {
    $(".menu-item").removeClass("active");
    $(this).addClass("active");
  });

  $("#progress-status").click(function (e) { 
    e.preventDefault();
    document.location.href = "/HTML/Panel.html";
  });

  $("#personal-info").click(function (e) { 
    e.preventDefault();
    document.location.href = "/HTML/PersonalInfo.html";
  });

  $("#business-info").click(function (e) { 
    e.preventDefault();
    document.location.href = "/HTML/BusinessInfo.html"
  });

  $("#send-card").click(function (e) { 
    e.preventDefault();
    document.location.href = "/HTML/SendCard.html"
  });

  $("#support").click(function (e) { 
    e.preventDefault();
    
  });

  $("#guide").click(function (e) {
    e.preventDefault();
  });

  $("#faq").click(function (e) { 
    e.preventDefault();
    
  });
});
