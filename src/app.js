require ('./sass/main.scss');

function getModuleName(module) {
    return module.name || module.default.name
}

let appDependencies = [
    'ui.router',
    'ngMaterial'
];

let appModule = [
    require('./home/home.module'),
    require('./navbar/navbar.module')
];

angular.module('patwisApp', appDependencies.concat(appModule.map(getModuleName)))
.config(($urlRouterProvider, $mdThemingProvider ) => {
    $urlRouterProvider.otherwise('/home');

    $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange');
});


