(function(){
    "user strict";
    var _controller = function(){
        
    }
    angular.module("app")
    .component("movieApp",{
        templateUrl:"app/movie.app.component.html",
        $routeConfig:[
            {path:"/home",component:"homePage",name:"Home"},            
            {path:"/list",component:"movieList",name:"List"},
            {path:"/list/:id/...",component:"movieDetails",name:"Details"},
            {path:"/manage",component:"manageMovie",name:"Manage"},
            {path:"/about",component:"aboutPage",name:"About"},
            {path:"/**",redirectTo:["Home"]},
        ],
        controllerAs:"vm",
        controller:_controller
    })
}())