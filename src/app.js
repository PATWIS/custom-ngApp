import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import angular from 'angular';

require ('./sass/main.scss');

function getModuleName(module) {
    return module.name || module.default.name
}

let appDependencies = [
    'ui.router',
    'ngMaterial'
];

let appModule = [
    //Views
    require('./home/home.module.js'),
    require('./show-details/show-details.module.js'),
    // Directives
    require('./navbar/navbar.module.js'),
    // Services
    require('./home/services/search.service.js')
];

angular.module('patwisApp', appDependencies.concat(appModule.map(getModuleName)))
.constant('apiUrl', '//api.tvmaze.com')
.config(/*@ngInject*/ ($urlRouterProvider, $mdThemingProvider ) => {
    $urlRouterProvider.otherwise('/home');

    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
});


