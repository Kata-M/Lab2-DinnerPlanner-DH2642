// dishDetailsViewController.js
var DishDetailsViewController = function(view, model, app) {
    
    //view.confirmButton.click(function(){
        //app.showConfirmScreen();
    //});

    //createNewDinner
    var createNewDinner= document.getElementById("createNewDinner");
    var listener= function(evt){
        
        app.showSelectDish();
        
        evt.preventDefault();
    }

    createNewDinner.addEventListener("mouseup", listener , false);
    createNewDinner.addEventListener("click", listener , false);

    //selectItem
    var selectItem= document.getElementById("selectItem");
    var listener= function(evt){
        
        app.showDishDetails();
        
        evt.preventDefault();
    }

    selectItem.addEventListener("mouseup", listener , false);
    selectItem.addEventListener("click", listener , false);

    //selectItem
    var addToMenu= document.getElementById("addToMenu");
    var listener= function(evt){
        
        app.showDishOverview();
        
        evt.preventDefault();
    }

    addToMenu.addEventListener("mouseup", listener , false);
    addToMenu.addEventListener("click", listener , false);

    
    /*view.btn-number.click(function(){
           model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });*/
      
}