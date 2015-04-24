(function () {
    angular.module('Concurseiros', [
        'ngRoute'
    ]);

    angular.module('Concurseiros').config(config);


    config.$inject = ['$routeProvider']
    function config($routeProvider) {
        $routeProvider
          .when('/', {
              controller: 'HomeController',
              templateUrl: 'AppAngular/Home/home.html',
              controllerAs: 'homeCtrl'
          })
          .when('/ranking', {
              controller: 'RankingController',
              templateUrl: 'AppAngular/Ranking/ranking.html',
              controllerAs: 'rankingCtrl'
          })
          .otherwise({
              redirectTo: '/'
          });
    };

})();