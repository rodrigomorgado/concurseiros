(function () {
    angular.module('Concurseiros').controller('ConcursosController', ConcursosController);
    ConcursosController.$inject = ['ConcursosService', 'toastr', '$anchorScroll', '$location']

    function ConcursosController(ConcursosService, toastr, $anchorScroll, $location, $modal) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.concursos = [];

        activate();

        //implementacao dos metodos do controller
        function activate() {

            $location.hash('concursosDiv');
            $anchorScroll();

            ConcursosService.getConcursos().then(successCallback, errorCallback);

            function successCallback(data) {
                self.concursos = data;
            };

            function errorCallback(error) {
                toastr.error('Não foi possivel carregar os concursos.');
            };
        };


    };

})();
