(function(){
   "user strict";
   _controller = function(){
        var _t=this;
       // _t.rating=_rating;
        _t.upRating=function(){
            if(_t.data.rating<5){
                _t.data.rating +=1;
            }
        }   
        _t.downRating=function(data){
            if(_t.data.rating>1)
            {
                _t.data.rating -=1;
            }
        }
        
        
   }
   angular.module('app')
   .component("ratingComponent",{
       bindings:{
           data:"=",
           rating:"<"      
       },
       templateUrl:"app/rating.component.html",
       controllerAs:"vm",
       controller:_controller
   }) 
}())