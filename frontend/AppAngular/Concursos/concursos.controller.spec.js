describe('InsertScore - Controller', function () {

    //carrega o modulo do projeto
    beforeEach(module('Concurseiros'));

    //variaveis que vao armazenar as dependencias
    var InsertScoreService, $location, toastr;

    //variaveis que vao armazenar os servicos do angular usados nos testes, que serao injetados
    var $controller, $rootScope, $q;

    //variavel que vai armazenar o controller instanciado, para acessar suas variaveis
    var controller;

    //objeto que vai armazenar a promisse da requisicao http
    var defer;

    //injeta os servicos que serao usados nos testes
    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _$location_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $q = _$q_;
        $location = _$location_;
    }));

    

    beforeEach(function () {

        //spy para ver se o método será chamado
        spyOn($location, "path");


        //instancia o controller, com suas dependencias mockadas
        controller = $controller("ConcursosController", { ConcursosService: ConcursosService, $location: $location, toastr: toastr });

    });


});
