app.controller("frontpageController", function ($scope, $ionicLoading, $ionicSideMenuDelegate) {
    
    $ionicLoading.show();
    
    $scope.name = "Etusivu";
    
    getSheet("19jFMRHmhdivZYEihA37QSqMbeANr4GekI2Mr_S-vyeI", function (data) {
        var arr = [];
        for(var i=0; i<data.length; i++){
            arr.push({
                style: data[i][0],
                content: data[i][1]
            });
        }
        
        $scope.textContent = arr;
        
        $ionicLoading.hide();
    });
    
});
