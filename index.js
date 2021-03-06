var Twit = require('twit')
    , assert = require('assert')
    , _ = require('lodash')
    ;
module.exports = {
    /**
     * The main entry point for the Dexter module
     *
     * @param {AppStep} step Accessor for the configuration for the step using this module.  Use step.input('{key}') to retrieve input data.
     * @param {AppData} dexter Container for all data used in this workflow.
     */
    run: function(step, dexter) {
        var consumerKey = dexter.environment('twitter_consumer_key')
            , consumerSecret = dexter.environment('twitter_consumer_secret')
            , accessToken = dexter.environment('twitter_access_token')
            , accessTokenSecret = dexter.environment('twitter_access_token_secret')
            , woeId = step.input('woeid', 2459115).first()
            , T
            , self = this;
        assert(consumerKey, 'environment.twitter_consumer_key required');
        assert(consumerSecret, 'environment.twitter_consumer_secret required');
        assert(accessToken, 'environment.twitter_access_token required');
        assert(accessTokenSecret, 'environment.twitter_access_token_secret required');
        assert(woeId, 'A Yahoo! WOEID, if included, must be a valid positive integer, or -1');
        T = new Twit({
            consumer_key: consumerKey
            , consumer_secret: consumerSecret
            , access_token: accessToken
            , access_token_secret: accessTokenSecret
        });
        T.get('trends/place', { id: woeId }, function(err, data, response) {
            if(err) {
                return self.fail(err);
            }
            self.complete(data[0].trends);
        });
    }
};
