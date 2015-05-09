(function () {
    angular.module('Concurseiros').service('EditScoreService', EditScoreService);

    EditScoreService.$inject = ['$q', '$http'];

    function EditScoreService($q, $http) {
        var service = {
            editScore: editScore
        };

        return service;

        function editScore(candidateData) {

            var deferred = $q.defer();

            $http.post("/api/editScore", candidateData).then(successfullCallback, errorCallback);

            function successfullCallback(data) {
                deferred.resolve(data);
            };

            function errorCallback(error) {
                deferred.reject(error);
            };

            return deferred.promise;
        };

    };

})();