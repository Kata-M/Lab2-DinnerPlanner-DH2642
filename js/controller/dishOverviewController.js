// dishDetailsViewController.js
var DishOverviewController = function(view, model, app) {
    
    //view.confirmButton.click(function(){
        //app.showConfirmScreen();
    //});

    //selectItem
    var printRecipe= document.getElementById("printRecipe");
    var listener= function(evt){
        
        app.showDishPrintout();
        
        evt.preventDefault();
    }

    printRecipe.addEventListener("mouseup", listener , false);
    printRecipe.addEventListener("click", listener , false);
      
}