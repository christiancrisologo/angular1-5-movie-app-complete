(function(){
   "user strict";
    var createStars = function(value,max){
       var entries=[],ctr=0;       
       while(ctr<max){           
           var icon = ctr<=value ? "glyphicon-star"  : "glyphicon-star-empty";
           entries.push(icon);
           ctr++;
       }
       return entries;
   }
   var _controller = function(){
        var _t=this;
        _t.$onInit=function(){
             _t.stars=createStars(_t.rating, _t.max);
             
        }
        _t.$onChanges=function(v){
            _t.stars=createStars(_t.rating, _t.max);
            console.log('changes ' + _t.rating);
        }
        // _t.setRating=function(){
            
        // }
   }
   angular.module('app')
   .component("starComponent",{
       bindings:{
           rating:"<",
           max:"<" ,
           setRating:"&"     
       },
       transclude:true,
       templateUrl:"app/star.component.html",
       controllerAs:"vm",
       controller:_controller
   }) 
}())