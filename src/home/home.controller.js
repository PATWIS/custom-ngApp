class HomeCtrl {
    /*@ngInject*/
    constructor($state, $scope, SearchService) {
        angular.extend(this, {
            $state,
            $scope,
            SearchService,
            itemList: [],
            searchValue: ''
        });
    }

    onSearchChange(searchText) {
        this.SearchService.search(searchText)
            .then(response => {
                this.itemList = response.map((item) => item.show);
            })
            .catch(() =>
                this.Notifications
                    .showToastNotification('Server error occured, try again later'));
    }

}
export default HomeCtrl;

