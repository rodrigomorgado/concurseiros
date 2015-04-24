(function () {
    angular.module('Concurseiros').service('InsertScoreService', InsertScoreService);

    InsertScoreService.$inject = ['$http', '$q'];

    function InsertScoreService($http, $q) {

        //definicao dos metodos do servico
        var service = {
            insertCandidateScore: insertCandidateScore
        };

        return service;

        // implementacao das funcoes do servico
        function insertCandidateScore(candidateData) {
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