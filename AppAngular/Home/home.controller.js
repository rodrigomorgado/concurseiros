(function () {
    angular.module('Concurseiros').controller('HomeController', HomeController);
    
    HomeController.$inject = ['HomeService', '$location']

    function HomeController(HomeService, $location) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.candidateData = {};
        self.insertUserScore = insertUserScore;

        //implementacao dos metodos do controller
        function insertUserScore() {
            HomeService.insertUserScore(self.candidateData).then(successCallback, errorCallback);

            function successCallback(data) {

            };

            function errorCallback(error) {

            };
        };
    }

})();