$(document).ready(function () {

      $("#birthDate").persianDatepicker({
        format: 'YYYY/MM/DD',
        calendar: {
          persian: {
            locale: 'fa',
            leapYearMode: "algorithmic"
          }
        }
      });

  $("#nextPage").click(function (e) { 
    e.preventDefault();
    document.location.href = "/HTML/SendCode.html";
  });
  
});
