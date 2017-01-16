app.controller("collaboratorsController", function($scope, $ionicLoading) {
    
    $ionicLoading.show();
    
    $scope.name = "Yhteistyökumppanit";
    
    
    GetGoogleSheet('1ndw9TeExMTkYr3QaTXBh4MHku_SPj3H7yoND75ypIFE', function(data) {
        
        $scope.objectList = data;
        console.log($scope.objectList);
        
        $ionicLoading.hide();
    });
});