//jangan lupa tambahin dependencies nya yg ini "apac": "^2.0.0"
var util = require('util'),
    OperationHelper = require('apac').OperationHelper,
    express = require('express'),
    app = express();

var opHelper = new OperationHelper({
    awsId:     'AKIAIC3ESSYALPKXYESA',
    awsSecret: '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',
    assocId:   'mustafasalim-20'
});

//nanti get nya tinggal buat api baru aja buat handle request, nanti jadi /api/game/amazon/:game_id
//game_id nya nanti masukin ke keywords nya
var keywords = 'Starcraft II: Legacy of the Void - Standard Edition';
app.get('/get',function(req,res){
    opHelper.execute('ItemSearch', {
      'SearchIndex': 'VideoGames',
      'Keywords': keywords,
      'ResponseGroup': 'ItemAttributes,Offers'
    }).then((response) => {
        /*console.log("Results object: ", response.results);
        console.log("Raw response body: ", response.responseBody);*/
        var obj = {
            'link' : response.result.ItemSearchResponse.Items.Item.DetailPageURL,
            'lowestPrice' : response.result.ItemSearchResponse.Items.Item.OfferSummary.LowestNewPrice.FormattedPrice
        };
        res.json(obj);
    }).catch((err) => {
        console.error("Something went wrong! ", err);
    });
});
app.listen(8080);
console.log("Application start at port 8080");
