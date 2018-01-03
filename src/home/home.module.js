import HomeCtrl from './home.controller';

const HomeModule = angular.module('patwisApp.home', [])
    .config(($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                template: require('./home.html'),
                controller: HomeCtrl,
                contorllerAs: 'home'
            });
    });

export default HomeModule;