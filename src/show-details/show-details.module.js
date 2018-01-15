const showDetails = angular
.module('patwisApp.showDetails', [])
.config(function($stateProvider) {
    $stateProvider
        .state('showDetails', {
            url: '/showDetails/:id',
            template: require('./show-details.html'),
            controller: showDetailsCtrl,
            controllerAs: 'showDetails',
            params: {
                item: null
            }
    });
});

export default showDetails;