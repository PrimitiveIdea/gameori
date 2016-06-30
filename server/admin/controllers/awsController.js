'use strict'
var aws = require('aws-lib');
var util = require(__base + '/lib/util');
var AWSConfig = util.loadAWSConfig();
var awsController;

var getData = function(req, res) {
    var keywords = req;

    var awsId=     AWSConfig.access_key,
        awsSecret= AWSConfig.secret_access_key,
        assocId=   AWSConfig.associate_id;
    var prodAdv = aws.createProdAdvClient(awsId,awsSecret,assocId);
    var options = {SearchIndex:"VideoGames", Keywords:keywords,'ResponseGroup': 'ItemAttributes,Offers'};

    prodAdv.call("ItemSearch", options, function(err,result){
        var obj = {
            'link' : result.Items.Item[0].DetailPageURL,
            'lowestPrice' : result.Items.Item[0].OfferSummary.LowestNewPrice.FormattedPrice
        };
        res.send(obj);
    });
    
};

awsController = {
    getData: getData
};

module.exports = awsController;