# Twitter Trends 

This [Dexter](http://rundexter.com) module  will fetch the latest 
trends from [Twitter](https://dev.twitter.com/rest/reference/get/trends/place).

# Configuring the Step

## Input parameters

Parameter|Required|Multiple|Details
---------|--------|--------|-------
woeid | No | No | A Yahoo! [WOEID](https://developer.yahoo.com/geo/geoplanet/guide/concepts.html) ([IDs for major metros](https://gist.githubusercontent.com/lukemelia/353493/raw/98749866fce79b591e45fb3325c853b4306a8882/WOEIDs%2520for%2520US%2520Cities%2520with%2520population%2520over%2520100K%2520as%2520of%25202008%2520%28from%2520Wikipedia%29)), set to -1 to get global trends.  Defaults to New York, NY, USA

## Private keys

Parameter|Required|Details
---------|--------|-------
twitter_consumer_key | Yes | Your application's key
twitter_consumer_secret | Yes | Your application's "password"
twitter_access_token | Yes | Your *user's* key
twitter_access_token_secret | Yes | Your *user's* "password"


# Getting Twitter credentials

To use this module, you'll have to create an app and authenticate yourself with it.  There's currently no way to have other
users sign up for your twitter app.

1. Log into https://apps.twitter.com/ and create a project
1. Choose a name - right now no one else will see it, so have fun! 
1. Go to Keys and Access tokens, and generate a token for yourself

You should now have the following:
* **Consumer key**: add to your App's private variables as twitter_consumer_key
* **Consumer secret**: add to your App's private variables as twitter_consumer_secret
* **Access token**: add to your App's private variables as twitter_access_token
* **Access token secret**: add to your App's private variables as twitter_access_token_secret
