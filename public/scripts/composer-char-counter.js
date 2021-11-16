$(document).ready(function() {
  console.log('it worked!');
});

$(document).ready(function () {
  $('#tweet-text').keydown (function () {
    const value = $(this).val().length;
    const charLeft = 140;
    const newCount = charLeft - value;

    $(this).parentsUntil(".new-tweet").find(".counter").text(newCount);

    if (newCount < 0) {
      $('.counter').css('color', 'red');
    }
  })
});

