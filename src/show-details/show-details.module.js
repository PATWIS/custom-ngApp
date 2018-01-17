import ShowDetailsCtrl from './show-details.controller.js';
import ShowDetailsService from './show-details.service.js';

const showDetails = angular
.module('patwisApp.showDetails', [])
.service('ShowDetailsService', ShowDetailsService)
.config(function($stateProvider) {
    $stateProvider
        .state('showDetails', {
            url: '/showDetails/:id',
            template: require('./show-details.html'),
            controller: ShowDetailsCtrl,
            controllerAs: 'vm',
            params: {
                item: null
            }
    });
});

export default showDetails;