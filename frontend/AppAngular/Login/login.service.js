(function () {
    angular.module('Concurseiros').service('LoginService', LoginService);

    LoginService.$inject = ['$http', '$q'];

    function LoginService($http, $q) {

        //definicao dos metodos do servico
        var service = {
            login: login
        };

        return service;

        // implementacao das funcoes do servico
        function login(loginData) {
            var deferred = $q.defer();

            $http.post('/api/login', loginData).success(successfulCallback).error(errorCallback);

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