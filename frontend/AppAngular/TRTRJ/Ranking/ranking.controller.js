(function () {
    angular.module('Concurseiros').controller('TRTRankingController', TRTRankingController);

    TRTRankingController.$inject = ['TRTRankingService', 'toastr', '$anchorScroll', '$location', '$modal']

    function TRTRankingController(TRTRankingService, toastr, $anchorScroll, $location, $modal) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.candidateRanking = [];

        activate();

        //implementacao dos metodos do controller
        function activate() {

            $location.hash('rankingDiv');
            $anchorScroll();

            TRTRankingService.getRanking().then(successCallback, errorCallback);

            function successCallback(data) {
                self.candidateRanking = data;

            };

            function errorCallback(error) {
                toastr.error('Não foi possivel carregar o ranking desse concurso.');
            };
        };

    }

})();