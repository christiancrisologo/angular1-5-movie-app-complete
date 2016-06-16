(function(){
   "user strict";
   

   
   _controller = function(movieService){
       var _t=this;
       _t.$onInit=function(){
           _t.data={};
       }
       _t.$routerOnActivate=function(next,previous){           
           _t.id = next.params.id;
           movieService.get.then(function(response){
               var lt = response.length;  
               while(lt--){
                    var o = response[lt];
                    if(_t.id===o.id){
                        _t.data = o;
                        break;
                    }
               };
           })
       }
   }
   angular.module('app') 
   .component("movieDetails",{       
       templateUrl:"app/movie-details.component.html",
       $routeConfig:[
           {path:"/overview",component:"movieOverview",name:"Overview"},
           {path:"/cast",component:"movieCast",name:"Cast"},
           {path:"/director",component:"movieDirector",name:"Director"}
       ],
    //    $canActivate:function($timeout){
    //        return $timeout(function(){
    //            return true; // create a promise to validate the route activation (dummy call with timeout)
    //        },300);
    //    },
       controllerAs:"vm",
       controller:["movieService",_controller]
   })
   
   .component("movieOverview",{
       template:"<h3>Movie Overview</h3>"
   })
   .component("movieDirector",{
       template:"<h3>Movie Director</h3>"
   })
   .component("movieCast",{
       template:"<h3>Movie Cast </h3>"
   })
   
}())