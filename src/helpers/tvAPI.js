class TvAPI {
    constructor(apiUrl) {
        let _apiUrl = apiUrl;
        this.createApiSearchUrl = ()=> `${_apiUrl}/search/shows`;
    }

    getApiSearchShowUrl() { 
        return this.createApiSearchUrl();  
    } 
}

export default TvAPI