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
    //     //view.showDishesbyType();
    //     evt.preventDefault(); 
    // }

    // searchType.addEventListener("mouseup", listener , false);
    // searchType.addEventListener("click", listener , false);


    view.container.find("searchType").click( function(e) {
		view.loadDishes();
		//activeType = this.getAttribute("value");
	});
    
}