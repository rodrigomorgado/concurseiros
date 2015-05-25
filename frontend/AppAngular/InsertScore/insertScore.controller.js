(function () {
    angular.module('Concurseiros').controller('InsertScoreController', InsertScoreController);
    
    InsertScoreController.$inject = ['InsertScoreService', '$location', 'toastr']

    function InsertScoreController(InsertScoreService, $location, toastr) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.candidateData = {};
        self.insertUserScore = insertUserScore;

        //implementacao dos metodos do controller
        function insertUserScore() {
            InsertScoreService.insertCandidateScore(self.candidateData).then(successCallback, errorCallback);

            function successCallback(data) {
                toastr.success('Nota inserida com sucesso!');
                $location.path('/2015/marinha/fuzileiros/ranking');
            };

            function errorCallback(error) {
                toastr.error('Erro ao inserir a nota.');
            };
        };
    }

})();
