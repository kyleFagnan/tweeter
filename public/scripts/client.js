/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/




$(document).ready(function() {


  //loop through array of tweets and append to the tweets container
  const renderTweets = function(tweets) {
  $.each(tweets, (key) => {
   const tweet = createTweetElement(tweets[key]);
    $('#tweets-container').append(tweet);
    });
  };
  
//ajax get request received as JSON
  const loadTweets = function() {
    $.ajax('/tweets', {method: 'GET'})  
    .then(function(arrTweets) {
      $('#tweets-container').empty(); 
      renderTweets(arrTweets);
    });
  };
  loadTweets();
  
  
  
  $("form").submit(function(event) {
    event.preventDefault(); //prevent default action of submit button.

    const url = $(this).attr("action"); //sets url to first action attribute which = '/tweets'
    let qStr = $(this).serialize() //turns data in query string
    $.post(url, qStr, function() { //post request to send data to server
      $('#tweet-text').val(''); //clear text from tweet textbox after tweet
      $('.counter').val(140); // reset counter back to 140 after tweet
      loadTweets();
    });
  });

  
//create new tweet html
  const createTweetElement = function(tweetData) {

    //constructed html for tweets
    let $tweet = $(`      
      <article class = "tweet">
      <header>
        <div class= "tweet-name">
        <img class="i-avatar" src="${tweetData.user.avatars}" alt="avatar-icon">
        <div id="userName">${tweetData.user.name}</div>
      </div>
      <div id="handle">${tweetData.user.handle}</div>
      </header>

      <div class="tweet-content">
        ${tweetData.content.text}
      </div>
      <footer>
      <div class="time-passed">${timeago.format(Number(`${tweetData.created_at}`))}</div>
        <div class='icons'>
          <i id='i-flag' class="fas fa-flag"></i>
          <i id='i-retweet' class="fas fa-retweet"></i>
          <i id='i-heart' class="fas fa-heart"></i>
        </div>
      </footer>
    </article>
    `);
    return $tweet;
  };


});
    


