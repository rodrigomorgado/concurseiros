(function () {
    angular.module('Concurseiros').controller('RankingController', RankingController);

    RankingController.$inject = ['RankingService', 'toastr']

    function RankingController(RankingService, toastr) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.candidateRanking = [];


        activate();

        //implementacao dos metodos do controller
        function activate() {
            RankingService.getRanking().then(successCallback, errorCallback);

            function successCallback(data) {
                self.candidateRanking = data;

            };

            function errorCallback(error) {
                toastr.error('Não foi possivel carregar o ranking desse concurso.');
            };
        };

    }

})();