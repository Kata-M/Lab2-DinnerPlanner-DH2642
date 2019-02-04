var DishDetailsViewController = function(view, model, app) {
    
  view.backToSearchButton.click(function(){ 
		app.showSelectDishScreen();
	});  

  view.addToMenuButton.click(function(){ 
		model.addDishToMenu(view.id);
	});  
}