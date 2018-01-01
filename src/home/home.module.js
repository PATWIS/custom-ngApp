import HomeCtrl from './home.controller';

const HomeModule = angular.module('patwisApp.home', [])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                template: 'hello !!!',
                controller: HomeCtrl,
                contorllerAs: 'home'
            });
    });

export default HomeModule;