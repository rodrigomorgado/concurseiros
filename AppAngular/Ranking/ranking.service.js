(function () {
    angular.module('Concurseiros').service('RankingService', RankingService);

    RankingService.$inject = ['$http', '$q']

    function RankingService($http, $q) {

        //definicao dos metodos do servico
        var service = {
            getRanking: getRanking
        };

        return service;

        

        // implementacao das funcoes do servico
        function getRanking() {

            var deferred = $q.defer();

            
            $http.get('/api/getRanking', {}).success(successCallback).error(errorCallback);

            function successCallback(data) {
                deferred.resolve(data);
            };

            function errorCallback(error) {
                deferred.reject(error);
            };

            return deferred.promise;

        };


    };

})();