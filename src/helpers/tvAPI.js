class TvAPI {
    constructor(apiUrl) {
        let _apiUrl = apiUrl;
        this.createApiSearchUrl = ()=> `${_apiUrl}/search/shows`;
        this.getApiUrl = () => _apiUrl;
    }

    getApiSearchShowUrl() { 
        return this.createApiSearchUrl();  
    } 

    getApiSearchShow(showId) {
        return this.getApiUrl() + `/shows/${showId}`;
    }
}

export default TvAPI