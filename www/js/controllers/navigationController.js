app.controller("navigationController", function($scope, $ionicSideMenuDelegate, $state) {
    $scope.menuitems = [
        {
            name: "Etusivu",
            url: "img/Kuvat/home_icon.png"
        },
        {
            name: "Messukartta",
            url: "img/Kuvat/map_icon.png"
        },
        {
            name: "Aikataulu",
            url: "img/Kuvat/schedule_icon.png"
        },
        {
            name: "Lahellasydanta-konsertti",
            url: "img/Kuvat/lahella_sydanta_icon.png"
        },
        {
            name: "Ota yhteyttä",
            url: "img/Kuvat/contact_icon.png"
        },
        {
            name: "Yhteistyökumppanit",
            url: "img/Kuvat/partners_icon.png"
        },
        {
            name: "Projektitiimi",
            url: "img/Kuvat/projektitiimi_icon.png"
        }
    ];
    
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    
    $scope.$watch(function () {
        return $ionicSideMenuDelegate.isOpenLeft();
    },
        function (isOpen) {
            if (isOpen){
              OnMenuOpen();
            }else{
                OnMenuClose();
            }
    });
});