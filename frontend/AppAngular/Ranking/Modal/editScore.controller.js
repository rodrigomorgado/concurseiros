(function () {
    angular.module('Concurseiros').controller('EditScoreController', EditScoreController);

    EditScoreController.$inject = ['candidateData', '$modalInstance', 'EditScoreService', 'toastr'];

    function EditScoreController(candidateData, $modalInstance, EditScoreService, toastr) {
        var self = this;

        self.candidateData = candidateData;

        self.editScore = editScore;

        function editScore() {
            EditScoreService.editScore(self.candidateData).then(successfulCallback, errorCallback);

            function successfulCallback(data) {
                toastr.success("Nota alterada com sucesso");
                $modalInstance.close();
            };

            function errorCallback(errorMessage) {
                if (errorMessage.status == 403) {
                    toastr.error("O email inserido não corresponde ao email cadastrado.");
                }
                else{
                    toastr.error("Não foi possível alterar a nota. Tente novamente mais tarde.");
                }
                
            };
        };
    };

})();