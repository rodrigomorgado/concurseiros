describe("Ranking - Service", function () {
    var $rootScope, $httpBackend, InsertScoreService, authRequestHandler;

    beforeEach(module('Concurseiros'));

    describe("Correct returns from server", function () {
        beforeEach(inject(function (_$rootScope_, _$httpBackend_, _RankingService_) {
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            RankingService = _RankingService_;

            authRequestHandler = $httpBackend.whenGET('/api/getRanking').respond(200, [
                { name: 'teste', email: 'teste@teste.com', score: 10 },
                { name: 'teste2', email: 'teste2@teste.com', score: 11 },
                { name: 'teste3', email: 'teste3@teste.com', score: 12 },
                { name: 'teste4', email: 'teste4@teste.com', score: 13 },
            ]);

        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Get Ranking", function () {
            var serverReturn, error;
            $httpBackend.expectGET('/api/getRanking');

            RankingService.getRanking().then(function (result) {
                serverReturn = result;
            }, function (errorMsg) {
                error = errorMsg.data;
            });
            $rootScope.$digest();
            $httpBackend.flush();

            expect(serverReturn.length).toBe(4);
            expect(serverReturn instanceof Array).toBeTruthy();

        });
    });

    describe("Bad Requests", function () {
        beforeEach(inject(function (_$rootScope_, _$httpBackend_, _RankingService_) {
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            RankingService = _RankingService_;

            authRequestHandler = $httpBackend.whenGET('/api/getRanking').respond(500, 'Error');

        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Get Ranking", function () {
            var serverReturn, error;
            $httpBackend.expectGET('/api/getRanking');

            RankingService.getRanking().then(function (result) {
                serverReturn = result;
            }, function (errorMsg) {
                error = errorMsg;
            });

            $rootScope.$digest();
            $httpBackend.flush();
            expect(error).toBe('Error');

        });


    });

});