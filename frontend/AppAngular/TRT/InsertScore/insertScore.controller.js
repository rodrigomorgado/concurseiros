(function () {
    angular.module('Concurseiros').controller('TRTInsertScoreController', TRTInsertScoreController);
    
    TRTInsertScoreController.$inject = ['TRTInsertScoreService', '$location', 'toastr']

    function TRTInsertScoreController(TRTInsertScoreService, $location, toastr) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.candidateData = {};
        self.insertUserScore = insertUserScore;

        //implementacao dos metodos do controller
        function insertUserScore() {
            TRTInsertScoreService.insertCandidateScore(self.candidateData).then(successCallback, errorCallback);

            function successCallback(data) {
                toastr.success('Nota inserida com sucesso!');
                $location.path('/2015/TRTRJ/juizSubstituto/ranking');
            };

            function errorCallback(error) {
                toastr.error('Erro ao inserir a nota.');
            };

        };
    }

})();
