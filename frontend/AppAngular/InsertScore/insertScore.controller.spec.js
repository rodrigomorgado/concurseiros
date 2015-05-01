﻿describe('InsertScore controller tests', function () {

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
    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $q = _$q_;
    }));

    

    beforeEach(function () {
        //define um objeto com os métodos da dependencia do controller que serao usados
        $location = {
            path: function (chave) { }
        };

        //spy para ver se o método será chamado
        spyOn($location, "path");

        //define um objeto com os métodos da dependencia do controller que serao usados
        InsertScoreService = {
            insertCandidateScore: function () { }
        };

        toastr = {
            success: function(valor){}
        };

        spyOn(toastr, "success");

        //caso o controller chame um servico que faca uma requisicao http com uma promisse, colocar as linhas abaixo e, no teste desejado,
        //fazer o resolve no deferred e chamar $rootScope.$digest, para mockar o return dele
        defer = $q.defer();
        spyOn(InsertScoreService, "insertCandidateScore").and.returnValue(defer.promise);

        //instancia o controller, com suas dependencias mockadas
        controller = $controller("InsertScoreController", { InsertScoreService: InsertScoreService, $location: $location, toastr: toastr });

    });

    //testes
    describe("Testes de inserir uma nota", function () {

        beforeEach(function () {
            controller.insertUserScore();
        });

        it("Chama o service", function () {
            //verificacao
            expect(InsertScoreService.insertCandidateScore).toHaveBeenCalledWith({});


        });
        it('Chama o toastr', function () {
            //linhas para que ele entre no 'then' do metodo do politicaService chamado no controller
            defer.resolve({});
            $rootScope.$digest();

            //verificacao
            expect(toastr.success).toHaveBeenCalledWith('Nota inserida com sucesso!');
        });
        it('Muda a rota para o ranking', function () {
            //linhas para que ele entre no 'then' do metodo do politicaService chamado no controller
            defer.resolve({});
            $rootScope.$digest();

            //verificacao
            expect($location.path).toHaveBeenCalledWith('/concursoXPTO/ranking');
        });

    });

});