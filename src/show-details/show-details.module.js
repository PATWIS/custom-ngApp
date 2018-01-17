import ShowDetailsCtrl from './show-details.controller.js'

const showDetails = angular
.module('patwisApp.showDetails', [])
.config(function($stateProvider) {
    $stateProvider
        .state('showDetails', {
            url: '/showDetails/:id',
            template: require('./show-details.html'),
            controller: ShowDetailsCtrl,
            controllerAs: 'showDetails',
            params: {
                item: null
            }
    });
});

export default showDetails;