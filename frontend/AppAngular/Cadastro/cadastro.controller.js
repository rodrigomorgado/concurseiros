(function () {
    angular.module('Concurseiros').controller('CadastroController', CadastroController);
    
    CadastroController.$inject = ['CadastroService', '$location', 'toastr']

    function CadastroController(LoginService, $location, toastr) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.cadastroData = {};
        self.cadastro = cadastro;

        //implementacao dos metodos do controller
        function cadastro() {
            //LoginService.login(self.loginData).then(successCallback, errorCallback);

            //function successCallback(data) {
            //    toastr.success('Nota inserida com sucesso!');
            //    $location.path('/2015/marinha/fuzileiros/ranking');
            //};

            //function errorCallback(error) {
            //    toastr.error('Erro ao inserir a nota.');
            //};

            console.log(self.cadastroData);
        };
    }

})();
