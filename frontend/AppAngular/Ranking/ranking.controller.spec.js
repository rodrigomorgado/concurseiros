describe('Ranking - Controller', function () {

    beforeEach(module('Concurseiros'));

    var RankingService, $location, toastr, $anchorScroll;

    var $controller, $rootScope, $q;

    var controller;

    var defer;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$q_, _$location_, _$anchorScroll_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $q = _$q_;
        $location = _$location_;
        $anchorScroll = jasmine.createSpy('anchorScroll');
    }));

    beforeEach(function () {

        spyOn($location, "path");

        spyOn($location, 'hash');

        RankingService = {
            getRanking: function () { }
        };

        defer = $q.defer();
        spyOn(RankingService, "getRanking").and.returnValue(defer.promise);

        controller = $controller("RankingController", { RankingService: RankingService, toastr: toastr, $anchorScroll: $anchorScroll, $location: $location });

    });

    describe("Get ranking tests", function () {

        it("Call ranking service", function () {
            expect(RankingService.getRanking).toHaveBeenCalled();
        });

        it('check url hash', function () {
            expect($location.hash).toHaveBeenCalledWith('rankingDiv');
        });

        it('check anchor scroll have been called', function () {
            expect($anchorScroll).toHaveBeenCalled();
        });

        it('bind ranking model', function () {
            defer.resolve([
                { name: 'teste', email: 'teste@teste.com', score: 10 },
                { name: 'teste2', email: 'teste2@teste.com', score: 11 },
                { name: 'teste3', email: 'teste3@teste.com', score: 12 },
                { name: 'teste4', email: 'teste4@teste.com', score: 13 },
            ]);
            $rootScope.$digest();
            expect(controller.candidateRanking.length).toEqual(4);
            expect(controller.candidateRanking instanceof Array).toBeTruthy();
        });

    });
    
});