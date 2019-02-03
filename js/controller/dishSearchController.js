// dishDetailsViewController.js
var DishSearchController = function(view, model, app) {
    
    //view.confirmButton.click(function(){
        //app.showConfirmScreen();
    //});

    //selectItem
    // var searchType= document.getElementById("searchType");
    // var listener= function(evt){

    //     //var type = document.getElementById("selectType").value;  
    //     //model.getAllDishes(view.selectedType);
    //     //console.log(type);
    //     view.showDishesbyType();
    //     evt.preventDefault(); 
    // }

    // searchType.addEventListener("mouseup", listener , false);
    // searchType.addEventListener("click", listener , false);


    view.searchType.click( function(evt) {
        
        evt.preventDefault();
        view.loadDishes();
        //activeType = this.getAttribute("value");
       
    });

    view.showDishes.on('click', '.dishItem', function(){ 
        
       var id = $(this).attr('id'); 
       //activeType = this.getAttribute("value");
       app.showDishDetails(id);
     
    });


    //view.showDishes.on('click', '.dishItem', function(){ 
    //        var id = $(this).attr('id'); 
    //       //app.showDishDetails(id);
    //       app.showDishDetails(id);
    //  });
    
    // view.dishItem.click( function() {

    //     app.showDishDetails();
    // });
  
    // view.dishItem.click( function(){
    //   app.showDishDetails();
    // });
    
}