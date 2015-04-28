(function () {
    angular.module('Concurseiros').config(config);


    config.$inject = ['$routeProvider']
    function config($routeProvider) {
        $routeProvider
          .when('/concursoXPTO', {
              controller: 'InsertScoreController',
              templateUrl: 'AppAngular/InsertScore/insertScore.html',
              controllerAs: 'insertScoreCtrl'
          })
          .when('/concursoXPTO/ranking', {
              controller: 'RankingController',
              templateUrl: 'AppAngular/Ranking/ranking.html',
              controllerAs: 'rankingCtrl'
          })
          .otherwise({
              redirectTo: '/concursoXPTO'
          });
    };
})();