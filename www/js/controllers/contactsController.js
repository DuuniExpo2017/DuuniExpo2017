app.controller("contactsController", function($scope) {
    $scope.name = "Yhteystiedot";
    var projektitiimi = [];
    getSheet("1rOoS5AIEkX0dleygQ8ABX2xZXOAeiUCqUJ-ErQLBMHM", function (data) {
        for (var i = 0; i < data.length; i++) {
            projektitiimi.push({
                name: data[i][0],
                title: data[i][1]
            });
        }
        scope.people = projektitiimi;
    });
    //1rOoS5AIEkX0dleygQ8ABX2xZXOAeiUCqUJ-ErQLBMHM
    
});

/*app.controller("contactsController", function($scope, $ionicLoading) {
    $scope.name = "Yhteystiedot";
    //1rOoS5AIEkX0dleygQ8ABX2xZXOAeiUCqUJ-ErQLBMHM
});*/