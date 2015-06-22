(function () {
    angular.module('Concurseiros').controller('ConcursosController', ConcursosController);
    
    ConcursosController.$inject = ['InsertScoreService', '$location', 'toastr']

    function ConcursosController(InsertScoreService, $location, toastr) {
        var self = this;


    }

})();
