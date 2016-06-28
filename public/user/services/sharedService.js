angular.module('sharedService', [])
    .service('shared', function () {
        var gameID;

        return {
            getGameID: function () {
                return gameID;
            },
            setGameID: function(value) {
                gameID = value;
            }
        };
    });