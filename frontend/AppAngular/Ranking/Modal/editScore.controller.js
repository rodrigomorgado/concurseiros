(function () {
    angular.module('Concurseiros').controller('EditScoreController', EditScoreController);

    EditScoreController.$inject = ['candidateData', '$modalInstance', 'EditScoreService', 'toastr'];

    function EditScoreController(candidateData, $modalInstance, EditScoreService, toastr) {
        var self = this;

        self.candidateData = candidateData;

        self.updateNota = updateNota;

        function updateNota() {
            EditScoreService.editScore(self.candidateData).then(successfulCallback, errorCallback);

            function successfulCallback(data) {
                toastr.success("Nota alterada com sucesso");
                $modalInstance.close();
            };

            function errorCallback(errorMessage) {
                toastr.error("O email inserido não é válido");
            };
        };
    };

})();