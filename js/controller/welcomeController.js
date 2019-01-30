// dishDetailsViewController.js
var WelcomeController = function(view, model, app) {
    
    //view.createNewDinner.click(function(){
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
}