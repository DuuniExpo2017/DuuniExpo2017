app.controller("lahellaSydantaController", function($scope, $ionicLoading, $ionicSideMenuDelegate) {

    $ionicLoading.show();
    
    $scope.name = "Lahella Sydänta";
    
    GetGoogleSheet("1QyPWcA0dylzaOP98gUiuaOIT8igBht_lZwicftoyzQ8", function (data) {
        $scope.textContent = data;
    });
    
    GetGoogleSheet('1HMdaFVkcbhneHJEsAylAKggEW4IJkY0NzNTcnB5Wmuw', function(data){
        $scope.welcomeText = data;
        $ionicLoading.hide();
    });
    
});