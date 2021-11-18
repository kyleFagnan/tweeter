$(document).ready(function () {
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



//hard coded tweet data object

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1637007777660
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1637094177660
  }
];

const renderTweets = function(tweets) {
  
  
  // loops through tweets
  $.each(tweets, (key) => {
   
    const tweet = createTweetElement(tweets[key]);
    
    $('#tweets-container').append(tweet);
  });

  // takes return value and appends it to the tweets container
  // $tweet.append($allTweets); // use once we have a dynamic var
}

  const createTweetElement = function (tweetData) {

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
    
    
    
  renderTweets(data);
   
  });
