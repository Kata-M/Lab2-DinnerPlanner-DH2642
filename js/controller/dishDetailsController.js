// dishDetailsViewController.js
var DishDetailsController = function(view, model, id) {
    
    view.addToMenu.click(function(id){
        model.addDishToMenu(id);
    });

    //selectItem
    // var addToMenu= document.getElementById("addToMenu");
    // var listener= function(evt){
        
    //     app.showDishOverview();
        
    //     evt.preventDefault();
    // }

    // addToMenu.addEventListener("mouseup", listener , false);
    // addToMenu.addEventListener("click", listener , false);

    
    // view.btnNumber.click(function(){
    //        var num = model.setNumberOfGuests(model.getNumberOfGuests() + 1);
    //        console.log(num);
    // });
    
      
}