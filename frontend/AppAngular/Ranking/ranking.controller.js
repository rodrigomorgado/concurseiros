(function () {
    angular.module('Concurseiros').controller('RankingController', RankingController);

    RankingController.$inject = ['RankingService', 'toastr', '$anchorScroll', '$location', '$modal']

    function RankingController(RankingService, toastr, $anchorScroll, $location, $modal) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.candidateRanking = [];

        self.editScore = editScore;

        activate();

        //implementacao dos metodos do controller
        function activate() {

            $location.hash('rankingDiv');
            $anchorScroll();

            RankingService.getRanking().then(successCallback, errorCallback);

            function successCallback(data) {
                self.candidateRanking = data;

            };

            function errorCallback(error) {
                toastr.error('Não foi possivel carregar o ranking desse concurso.');
            };
        };

        function editScore(candidateData) {

            var modalOptions = {
                templateUrl: 'AppAngular/Ranking/Modal/editScore.html',
                controller: 'EditScoreController',
                controllerAs: 'EditScoreCtrl',
                resolve: {
                    candidateData: getCandidateData,
                }
            };

            var modalInstance = $modal.open(modalOptions);

            modalInstance.result.then(editScoreCallback, closeModalCallback);

            function editScoreCallback() {
                activate();
            };

            function closeModalCallback() {
                //do nothing
            };

            function getCandidateData() {
                return candidateData;
            };


        };

    }

})();