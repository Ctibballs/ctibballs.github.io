$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
  $('#sign-up-btn').on('click', function(event){
    event.preventDefault();


    var data = {
      FirstName: $('#first-name').val(),
      LastName: $('#last-name').val(),
      Email: $('#email').val(),
      PhoneNumber: $('#phone-number').val(),
      Country: $('#country').val(),
      Company: $('#company').val(),
      UserType: $('#userType').val()
    };

    console.log(data);

    $.ajax({
      url: "https://formspree.io/chris@seev.com.au",
      method: "POST",
      data: data,
      dataType: "json",
      success: function(){
        $('#sign-up-form').hide()
        $('#sign-up-message').hide()
        $('#success-submit').show() 
      },
      error: function(){
        $('#sign-up-form').hide()
        $('#error-message').hide()
        $('#success-submit').show() 
      }
    }
  );
  });

});
