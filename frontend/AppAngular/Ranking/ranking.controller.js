(function () {
    angular.module('Concurseiros').controller('RankingController', RankingController);

    RankingController.$inject = ['RankingService', 'toastr', '$anchorScroll', '$location', '$modal', '$routeParams']

    function RankingController(RankingService, toastr, $anchorScroll, $location, $modal, $routeParams) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.candidateRanking = [];

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

        //implementacao dos metodos do controller
        function activate() {

            $location.hash('rankingDiv');
            $anchorScroll();

            RankingService.getConcursoID({ url: self.ano + '/' + self.nome + '/' + self.cargo }).then(successCallback, errorCallback);

            

            function successCallback(data) {

                self.titulo = data.nome;

                RankingService.getRanking(data.idconcurso).then(successCallbackRanking, errorCallbackRanking);

                function successCallbackRanking(data) {
                    self.candidateRanking = data;
                };

                function errorCallbackRanking() {
                    toastr.error('Não foi possivel carregar o ranking desse concurso.');
                }

                
            };

            function errorCallback(error) {
                toastr.error('Não foi possivel carregar o ranking desse concurso.');
            };
        };

    }

})();