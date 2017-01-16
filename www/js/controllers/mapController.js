app.controller("mapController", function($scope, $ionicPopup, $ionicLoading) {

    $ionicLoading.show();
    
    GetGoogleSheet('1zhn8LYeDTidzmE7FHVFWPma08Q7Jr7rochxRjyMOi4o', function(data) {
        
        $scope.count = data.length;
        
        for(var i=0; i< $scope.count; i++){
            data[i].gsx$koordinaatit.$t = CountCoords(data[i].gsx$koordinaatit.$t);
        }
        
        $scope.stands = data;
        
        $ionicLoading.hide();
    });
    
    $scope.MakeStandInfo = function(standId) {
        var fixedId = standId - 1;
        
        $ionicPopup.show({
            title: $scope.stands[fixedId].gsx$id.$t + ". " +$scope.stands[fixedId].gsx$standi.$t,
            template:
                    '<br/><img src="' + $scope.stands[fixedId].gsx$logolinkki.$t + '" style="display:block;margin:auto;max-width:80%;"/><br/>' +
                    '<div class="row" style="max-width:80%;display:block;margin:auto;text-align:center;color:white;">' + $scope.stands[fixedId].gsx$lisätietoa.$t + '</div><br>' +
                    '<div class="row"><a href="' + $scope.stands[fixedId].gsx$facebook.$t + '" target="_blank" style="width:80%;display:block;height:40px;line-height:40px;background:white;margin:auto;text-align:center;text-decoration:none;"><div class="btn" style="color:#199cd8;">Facebook</div></a></div><br/><br/>' +
                    '<div class="row"><a href="' + $scope.stands[fixedId].gsx$kotisivu.$t + '" target="_blank" style="width:80%;display:block;height:40px;line-height:40px;background:white;margin:auto;text-align:center;text-decoration:none;"><div class="btn" style="color:#199cd8;">Kotisivut</div></a></div><br/><br/>',
            buttons: [
                {
                    text: 'Sulje ikkuna'
                }
            ]
        });
    };



});
