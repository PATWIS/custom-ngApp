class HomeCtrl {
    constructor ($state, $scope, SearchService) {
        // this.$state = $state;
        // this.$scope = $scope;
        angular.extend(this, {
            $state, $scope, SearchService
        });
    }

}

export default HomeCtrl;