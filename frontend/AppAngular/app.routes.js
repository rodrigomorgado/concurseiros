(function () {
    angular.module('Concurseiros').config(config);


    config.$inject = ['$routeProvider']
    function config($routeProvider) {
        $routeProvider
          .when('/2015/marinha/fuzileiros', {
              controller: 'InsertScoreController',
              templateUrl: 'AppAngular/InsertScore/insertScore.html',
              controllerAs: 'insertScoreCtrl'
          })
          .when('/2015/marinha/fuzileiros/ranking', {
              controller: 'RankingController',
              templateUrl: 'AppAngular/Ranking/ranking.html',
              controllerAs: 'rankingCtrl'
          })
          .when('/concursos', {
              controller: 'Concursos',
              templateUrl: 'AppAngular/Concursos/concursos.html',
              controllerAs: 'concursosCtrl'
          })
          .otherwise({
            //  redirectTo: '/2015/marinha/fuzileiros'
		  redirectTo: '/concursos'
          });
    };
})();
