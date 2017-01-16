app.controller("projectTeamController", function($scope, $ionicLoading) {
    $ionicLoading.show();
    $scope.name = "Projektitiimi";
    var projektitiimi = [];
    getSheet("1rOoS5AIEkX0dleygQ8ABX2xZXOAeiUCqUJ-ErQLBMHM", function (data) {
        for (var i = 0; i < data.length; i++) {
            projektitiimi.push({
                name: data[i][0],
                title: data[i][1],
                email: data[i][2],              
                photo: data[i][3],
                linkedin: data[i][4]
            });          
        }
        $scope.people = projektitiimi;
        $ionicLoading.hide();
    });
    //1rOoS5AIEkX0dleygQ8ABX2xZXOAeiUCqUJ-ErQLBMHM  
});