(function(){
    "user strict";
    
    _controller=function(){
        var _t=this;

        _t.$onInit=function(){
            console.dir(_t.menus);        
        }
    }
    
    angular.module("app")
    .component("navComponent",{
        bindings:{
              title:"<",
              menus:"="
        },
        templateUrl:"app/nav.component.html",
        controllerAs:"vm",
        controller:_controller
    })
    
}())