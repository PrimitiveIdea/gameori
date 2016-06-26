angular.module('sharedService', [])
    .service('sharedGameID', function () {
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