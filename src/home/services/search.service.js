import TvApi from './../../helpers/tvAPI.js'

class SearchService extends TvApi {
    constructor(apiUrl, $http, $q) {
        // metoda ta wywoła konstruktor na rodzicu
        super(apiUrl)

        angular.extend(this, {
            $http,
            $q
        })
    }

    search(term) {

        if(term === 'titanic') {
            return this.$q.reject("stuff ")
        }

        let configObject = {
            method: 'GET',
            url: this.getApiSearchShowUrl(),
            params: {
                q: terms
            } 
        }
        return this.$http(configObject)
        .then((response)=> response.data )
        .catch((error)=> console.log(error));
    }

}

export default angular
    .module('patwisApp.home.service', [])
    .service('SearchService', SearchService)