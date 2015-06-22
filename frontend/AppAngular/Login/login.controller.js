(function () {
    angular.module('Concurseiros').controller('LoginController', LoginController);
    
    LoginController.$inject = ['LoginService', '$location', 'toastr']

    function LoginController(LoginService, $location, toastr) {
        var self = this;

        //definicao dos objetos bindados e metodos do controller
        self.loginData = {};
        self.login = login;

        //implementacao dos metodos do controller
        function login() {
            //LoginService.login(self.loginData).then(successCallback, errorCallback);

            //function successCallback(data) {
            //    toastr.success('Nota inserida com sucesso!');
            //    $location.path('/2015/marinha/fuzileiros/ranking');
            //};

            //function errorCallback(error) {
            //    toastr.error('Erro ao inserir a nota.');
            //};

            console.log(self.loginData);
        };
    }

})();
