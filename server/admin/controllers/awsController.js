'use strict'

var aws = require('aws-lib');
var util = require(__base + '/lib/util');
var AWSConfig = util.loadAWSConfig();
var awsController;

var getData = function(req, res) {
    var prodAdv = aws.createProdAdvClient(
        AWSConfig.access_key,
        AWSConfig.secret_access_key,
        AWSConfig.associate_id
    );
    var options = {SearchIndex: "Books", Keywords: "html"};

    prodAdv.call("ItemSearch", options, function(err, result) {
        console.log(result);
        res.json(result);
    });
};

awsController = {
    getData: getData
};

module.exports = awsController;