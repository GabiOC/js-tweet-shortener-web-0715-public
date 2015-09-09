'use strict';

var words = ["hello", "to", "two","too", "For", "for","four", "be", "you", "at", "and"];
var subs = ["hi", "2", "2", "2", "4", "4", "4", "b", "u", "@", "&"];

var tweetShortener = {

  wordSubstituter: function(tweet){
    var arr = tweet.split(/ /);
    for(var i = 0; i < arr.length; i++) {
    	if (words.indexOf(arr[i]) > 0) {
    	    arr[i] = subs[words.indexOf(arr[i])];
    	}
    }
    return arr.join(" ");
  },

  bulkShortener: function(tweets){
  	var newArr = [];
  	for (var i = 0; i < tweets.length; i++) {
  	  newArr.push(tweetShortener.wordSubstituter(tweets[i]));
  	}
  	return newArr;
  },

  selectiveShortener: function(tweet){
    var chars = tweet.split("").length;
    if (chars > 140){
      tweet = tweetShortener.wordSubstituter(tweet);
    }
    return tweet;
  },

  shortenedTruncator: function(tweet){
	  if (tweet.length > 140) tweet = tweetShortener.wordSubstituter(tweet);
	  if (tweet.length > 140) tweet = tweet.slice(0,137) + "...";
	  return tweet;
  },
};
