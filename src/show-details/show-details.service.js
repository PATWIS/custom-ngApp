import TvAPI from './../helpers/tvAPI';

class ShowDetailsService extends TvAPI {
    constructor(apiUrl, $http) {
        super(apiUrl);
        angular.extend(this, {
            $http
        });
    }

    getShowDetailById(showId) {
        return this.$http({
            method: 'GET',
            url: this.getApiSearchShow(showId)
        })
        .then((response) => response.data);
    }
}

export default ShowDetailsService;