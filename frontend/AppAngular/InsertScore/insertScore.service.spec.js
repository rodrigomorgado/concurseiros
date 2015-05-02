describe("InsertScore - Service", function () {
    var $rootScope, $httpBackend, InsertScoreService, authRequestHandler;

    beforeEach(module('Concurseiros'));

    describe("Correct returns from server", function () {
        beforeEach(inject(function (_$rootScope_, _$httpBackend_, _InsertScoreService_) {
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            InsertScoreService = _InsertScoreService_;

            authRequestHandler = $httpBackend.whenPOST('/api/insertScore').respond(200, 'ok');

        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Insert Score", function () {
            var serverReturn, error;
            $httpBackend.expectPOST('/api/insertScore');

            InsertScoreService.insertCandidateScore({name: 'teste', email: 'teste@teste.com', score: 10}).then(function (result) {
                serverReturn = result;
            }, function (errorMsg) {
                error = errorMsg.data;
            });
            $rootScope.$digest();
            $httpBackend.flush();

            expect(serverReturn).toBe('ok');

        });
    });

    describe("Bad Requests", function () {
        beforeEach(inject(function (_$rootScope_, _$httpBackend_, _InsertScoreService_) {
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
            InsertScoreService = _InsertScoreService_;

            authRequestHandler = $httpBackend.whenPOST('/api/insertScore').respond(500, 'Error');

        }));

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it("Insert Score", function () {
            var serverReturn, error;
            $httpBackend.expectPOST('/api/insertScore');

            InsertScoreService.insertCandidateScore({ name: 'teste', email: 'teste@teste.com', score: 10 }).then(function (result) {
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