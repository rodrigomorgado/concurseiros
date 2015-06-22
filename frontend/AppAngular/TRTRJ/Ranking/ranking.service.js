(function () {
    angular.module('Concurseiros').service('TRTRankingService', TRTRankingService);

    TRTRankingService.$inject = ['$http', '$q']

    function TRTRankingService($http, $q) {

        //definicao dos metodos do servico
        var service = {
            getRanking: getRanking
        };

        return service;

        

        // implementacao das funcoes do servico
        function getRanking() {

            //var mockRanking = [
            //{ name: 'Candidato 1', score: 40 },
            //{ name: 'Candidato 2', score: 35 },
            //{ name: 'Candidato 3', score: 55 },
            //{ name: 'Candidato 4', score: 37 }
            //];

            var deferred = $q.defer();

            
            $http.get('/api/TRTRJ/getRanking').success(successCallback).error(errorCallback);

            function successCallback(data) {
                deferred.resolve(data);
            };

            function errorCallback(error) {
                deferred.reject(error);
            };

            //deferred.resolve(mockRanking);

            return deferred.promise;

        };


    };

})();