(function () {
    angular.module('Concurseiros').service('CadastroService', CadastroService);

    CadastroService.$inject = ['$http', '$q'];

    function CadastroService($http, $q) {

        //definicao dos metodos do servico
        var service = {
            cadastro: cadastro
        };

        return service;

        // implementacao das funcoes do servico
        function cadastro(cadastroData) {
            var deferred = $q.defer();

            $http.post('/api/login', cadastroData).success(successfulCallback).error(errorCallback);

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