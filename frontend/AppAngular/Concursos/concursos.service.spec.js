describe("Concursos - Service", function () {
    var $rootScope, $httpBackend, ConcursosService, authRequestHandler;

    beforeEach(module('Concurseiros'));

    describe("Correct returns from server", function () {
        beforeEach(inject(function (_$rootScope_, _$httpBackend_, _RankingService_) {
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            RankingService = _RankingService_;

            authRequestHandler = $httpBackend.whenGET('/api/getConcursos').respond(200, []);

        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Get Concursos", function () {
            var serverReturn, error;
            $httpBackend.expectGET('/api/getConcursos');

            ConcursosService.getConcursos().then(function (result) {
                serverReturn = result;
            }, function (errorMsg) {
                error = errorMsg.data;
            });
            $rootScope.$digest();
            $httpBackend.flush();

            //expect(serverReturn.length).toBe(4);
            //expect(serverReturn instanceof Array).toBeTruthy();

        });
    });

    describe("Bad Requests", function () {
        beforeEach(inject(function (_$rootScope_, _$httpBackend_, _RankingService_) {
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            RankingService = _RankingService_;

            authRequestHandler = $httpBackend.whenGET('/api/getConcursos').respond(500, 'Error');

        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Get Concursos", function () {
            var serverReturn, error;
            $httpBackend.expectGET('/api/getConcursos');

            ConcursosService.getConcursos().then(function (result) {
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
