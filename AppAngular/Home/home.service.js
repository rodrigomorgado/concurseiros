(function () {
    angular.module('Concurseiros').service('HomeService', HomeService);

    HomeService.$inject = ['$http', '$q'];

    function HomeService($http, $q) {

        //definicao dos metodos do servico
        var service = {
            insertUserScore: insertUserScore
        };

        return service;

        // implementacao das funcoes do servico
        function insertUserScore(candidateData) {
            var deferred = $q.defer();

            $http.post('/api/insertScore', candidateData).success(successfulCallback).error(errorCallback);

            function successfulCallback() {
                deferred.resolve();
            }

            function errorCallback() {
                deferred.reject();
            }

            return deferred.promise;
        };

    }

})();