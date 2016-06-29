'use strict'
var OperationHelper = require('apac').OperationHelper;
var util = require(__base + '/lib/util');
var AWSConfig = util.loadAWSConfig();
var awsController;

var getData = function(req, res) {
    var keywords = req;
    var opHelper = new OperationHelper({
        awsId:     AWSConfig.access_key,
        awsSecret: AWSConfig.secret_access_key,
        assocId:   AWSConfig.associate_id
    });
    opHelper.execute('ItemSearch', {
      'SearchIndex': 'VideoGames',
      'Keywords': keywords,
      'ResponseGroup': 'ItemAttributes,Offers'
    }).then((response) => {
        var obj = {
            'link' : response.result.ItemSearchResponse.Items.Item[0].DetailPageURL,
            'lowestPrice' : response.result.ItemSearchResponse.Items.Item[0].OfferSummary.LowestNewPrice.FormattedPrice
        };
        res.json(obj);
    }).catch((err) => {
        console.error("Something went wrong! ", err);
    });
};

awsController = {
    getData: getData
};

module.exports = awsController;