import HomeCtrl from './home.controller.js';

const HomeModule = angular.module('patwisApp.home', [])
    .config(/*@ngInject*/ function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                template: require('./home.html'),
                controller: HomeCtrl,
                contorllerAs: 'home'
            });
    });

export default HomeModule;