(function () {
    angular.module('Concurseiros').service('InsertScoreService', InsertScoreService);

    InsertScoreService.$inject = ['$http', '$q'];

    function InsertScoreService($http, $q) {

        //definicao dos metodos do servico
        var service = {
            insertCandidateScore: insertCandidateScore,
            getConcursoID: getConcursoID
        };

        return service;

        // implementacao das funcoes do servico
        function insertCandidateScore(candidateData) {
            var deferred = $q.defer();

            $http.post('/api/insertScore', candidateData).success(successfulCallback).error(errorCallback);

            function successfulCallback(data) {
                deferred.resolve(data);
            }

            function errorCallback(error) {
                deferred.reject(error);
            }

            return deferred.promise;
        };

        function getConcursoID(url) {
            var deferred = $q.defer();

            $http.post('/api/getConcursoID', url).success(successfulCallback).error(errorCallback);

            function successfulCallback(data) {
                deferred.resolve(data);
            }

            function errorCallback(error) {
                deferred.reject(error);
            }

            return deferred.promise;
        }

    }

})();