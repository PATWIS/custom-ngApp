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
    require('./home/home.module'),
    // Directives
    require('./navbar/navbar.module'),
    // Services
    require('./home/services/search.service')
];

angular.module('patwisApp', appDependencies.concat(appModule.map(getModuleName)))
.constant('apiUrl', '//api.tvmaze.com')
.config(($urlRouterProvider, $mdThemingProvider ) => {
    $urlRouterProvider.otherwise('/home');

    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
});


