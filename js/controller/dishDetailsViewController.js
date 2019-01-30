// dishDetailsViewController.js
var DishDetailsViewController = function(view, model, app) {
    
    //view.confirmButton.click(function(){
        //app.showConfirmScreen();
    //});
    //--
    //Kata
    /*
    this.update=function(model, changeDetails){
     // redraw just the portion affected by the changeDetails
     // or remove all graphics in the view, read the whole model and redraw 
         model.setNumberOfGuests(changeDetails);
    } 

    
    model.addObserver(this.update);

    view.plusButton.addEventListener("click", 
        () => model.setNumberOfGuests(model.getNumberOfGuests() + 1) );
    view.minusButton.addEventListener("click", 
        () => model.setNumberOfGuests(model.getNumberOfGuests() - 1) );
    

    var updateNumberOfGuests= function(evt){
        model.setNumberOfGuests(changeDetails);
        console.log("update number guests");
        console.log(model.getNumberOfGuests(););
    }

    var plusButton = document.getElementById("plusButton");
    plusButton.addEventListener("click", updateNumberOfGuests, false);

    */
    var plusButton= document.getElementById("plusButton");
    var plusButton = function(){
        model.setNumberOfGuests(mode.getNumberOfGuests()+1);
        console.log("In plus button modifying model");
    }

    //---


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

    /*
    view.btn-number.click(function(){
           model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    });
    */

      
}