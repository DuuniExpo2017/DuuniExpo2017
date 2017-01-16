app.controller("scheduleController", function($scope,$ionicLoading) {
    $ionicLoading.show();
    $scope.name = "Aikataulu";
    $scope.timetable= [];
    var schedule = [];
    
    getSheet("1rMdz5phRbrjo-uKCBEn8XyijEC3jjFVPNBKw4tKwpjs", function (data) {
        for (var i = 0; i < data.length; i++) {
            schedule.push({
		time: data[i][0],
                performer: data[i][1]             
            });          
        }
        $scope.timetable = schedule;
        $ionicLoading.hide();
    });
});