require ('./sass/main.scss');

function getModuleName(module) {
    return module.name || module.default.name
}

let appDependencies = [
    'ui.router'
];

let appModule = [
    require('./home/home.module')
];

angular.module('patwisApp', appDependencies.concat(appModule.map(getModuleName)))
.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
});


