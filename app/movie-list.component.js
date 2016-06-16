(function () {
   "user strict";
   _controller=function(movieService){
       var _t = this;        
        _t.$onInit=function(){
           movieService.get.then(function(response){
               _t.movies=response;
           })
        }
        _t.goTo = function(id){
            _t.$router.navigate(["Details",{id:id},"Overview"]); //dynamic routing
        }
        _t.setRating=function(movie,newRating){
            movie.rating = newRating;
        }
   } 
   
   angular.module('app')   
   .component('movieList',{   
       bindings:{
         "$router":"<"  
       },
       templateUrl:"app/movie-list.component.html",
       controllerAs:'vm',
       controller:["movieService",_controller]
    })
}())