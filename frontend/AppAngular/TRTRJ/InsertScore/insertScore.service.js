(function () {
    angular.module('Concurseiros').service('TRTInsertScoreService', TRTInsertScoreService);

    TRTInsertScoreService.$inject = ['$http', '$q'];

    function TRTInsertScoreService($http, $q) {

        //definicao dos metodos do servico
        var service = {
            insertCandidateScore: insertCandidateScore
        };

        return service;

        // implementacao das funcoes do servico
        function insertCandidateScore(candidateData) {
            var deferred = $q.defer();

            $http.post('/api/TRTRJ/insertScore', candidateData).success(successfulCallback).error(errorCallback);

            function successfulCallback(data) {
                deferred.resolve(data);
            }

            function errorCallback(error) {
                deferred.reject(error);
            }

            return deferred.promise;
        };

    }

})();