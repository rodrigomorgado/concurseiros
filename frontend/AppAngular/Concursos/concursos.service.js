(function () {
    angular.module('Concurseiros').service('ConcursosService', ConcursosService);

    ConcursosService.$inject = ['$http', '$q'];

    function ConcursosService($http, $q) {

        var service = {
            getConcursos: getConcursos
        };

        return service;


        // implementacao das funcoes do servico
        function getConcursos() {
            var deferred = $q.defer();

            $http.get('/api/getConcursos').success(successfulCallback).error(errorCallback);

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
