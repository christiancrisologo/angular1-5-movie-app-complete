(function () {
   "user strict";
   var _accController=function(){
       var _t = this, 
            panels=[];        
        _t.$onInit=function(){
           
        }
        _t.goTo = function(id){
            
        }
        _t.selectPanel=function(panel){
            for(var i in panels){
                if(panel=== panels[i]){
                    panels[i].turnOn();
                }else{
                    panels[i].turnOff();
                }
                
            }
        }
        _t.addPanel=function(panel){
            panels.push(panel);
            if(panels.length>0){
                panels[0].turnOn();
            }
        }
   };
   var _accPanelController=function(){
       var _t=this;
       _t.selected=false;
       _t.$onInit=function(){
           _t.parent.addPanel(_t);
       }
       _t.turnOn=function(){
           _t.selected = true;
       }
       _t.turnOff=function(){
           _t.selected = false;
       }
       _t.select=function(){
           _t.parent.selectPanel(_t);
       }
   }
   
   angular.module('app')   
   .component('accordion',{   
       bindings:{
         heading:"@"  
       },
       transclude:true,
       templateUrl:"app/accordion.component.html",
       controllerAs:'vm',
       controller:[_accController]
    })
    
    .component("accordionPanel",{
       bindings:{
         heading:"@"  
       },
       require:{
         "parent":"^accordion"  
       },
        transclude:true,
        templateUrl:"app/accordion.panel.component.html",
        controllerAs:'vm',
        controller:[_accPanelController]
    });
}())