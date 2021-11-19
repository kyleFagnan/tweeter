
//character counter
$(document).ready(function () {
  $('#tweet-text').keydown (function () {
    const limit = 140;
    const count = $(this).val().length;
    const $counter =  $(this).parentsUntil(".new-tweet").find(".counter");

    $counter.text(limit - count);

    if ($counter.val() < 0) {
      return $counter.addClass('over-limit');
    }

    $counter.removeClass('over-limit');
  })
});

