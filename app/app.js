(function () {
    "use strict";
    angular.module("app",["ngComponentRouter","ngAnimate"])
    .value("$routerRootComponent","movieApp")
    .factory('movieService',function($http){
        return{
               get: $http.get("api/movies.json")
                .then(function(response){
                    return response.data;
                })
        } 
   
        }
    );
}());