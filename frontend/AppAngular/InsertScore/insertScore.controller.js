(function () {
    angular.module('Concurseiros').controller('InsertScoreController', InsertScoreController);
    
    InsertScoreController.$inject = ['InsertScoreService', '$location', 'toastr', '$routeParams']

    function InsertScoreController(InsertScoreService, $location, toastr, $routeParams) {
        var self = this;

        if ($routeParams.ano) {
            self.ano = $routeParams.ano;
        }

        if ($routeParams.nome) {
            self.nome = $routeParams.nome;
        }

        if ($routeParams.cargo) {
            self.cargo = $routeParams.cargo;
        }
        activate();

        //definicao dos objetos bindados e metodos do controller
        self.candidateData = {};
        self.insertUserScore = insertUserScore;

        function activate() {
            InsertScoreService.getConcursoID({url: self.ano + '/' + self.nome + '/' + self.cargo}).then(successfulCallback, errorCallback);

            function successfulCallback(data) {
                self.candidateData.idconcurso = data;
            };

            function errorCallback(data) {
                toastr.error('Erro ao recuperar concurso.');
            };
        };

        //implementacao dos metodos do controller
        function insertUserScore() {
            InsertScoreService.insertCandidateScore(self.candidateData).then(successCallback, errorCallback);

            function successCallback(data) {
                toastr.success('Nota inserida com sucesso!');
                $location.path('/' + self.ano + '/' + self.nome + '/' + self.cargo + '/ranking');
            };

            function errorCallback(error) {
                toastr.error('Erro ao inserir a nota.');
            };
        };
    }

})();
