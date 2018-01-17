class ShowDetailsCtrl {
  constructor($stateParams) {
    angular.extend(this, {
        $stateParams,
        $q
    });
  }  

getShow() {
    let promise = !!this.$stateParams.item ? this.$q.when(this.$stateParams.item) : this.$q.when({});

    promise.then( (show) => this.show = show)
};

}

export default ShowDetailsCtrl;