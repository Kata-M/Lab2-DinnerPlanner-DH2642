$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	//var container = $("#exampleView");

	//welcomeView
	var welcomeContainer = $("#welcomeView");

	//sidebarView
	var sidebarContainer = $("#sidebarView");

	//dishSearchView
	var dishSearchContainer = $("#dishSearchView");

	//dishItemView
	//var dishItemContainer = $("#dishItemView");

	//dishOverviewView
	var dishOverviewContainer = $("#dishOverviewView");

	//dishDetailsView
	var dishDetailsContainer = $("#dishDetailsView");

	//dishPrintoutView
	var dishPrintoutContainer = $("#dishPrintoutView");
	
	//And create the instance of ExampleView
	//var exampleView = new ExampleView(container,model);

	// And create the instance of welcomeView
	//var welcomeView = new WelcomeView(welcomeContainer,model);

	// And create the instance of sidebarView
	var sidebarView = new SidebarView(sidebarContainer,model);

	// And create the instance of dishSearchView
	var dishSearchView = new DishSearchView(dishSearchContainer,model);

	// And create the instance of dishesItemView
	//var dishItemView = new DishesItemView(dishItemContainer,model);

	// And create the instance of dishDetailsView
	var dishDetailsView = new DishDetailsView(dishDetailsContainer,model);

	// And create the instance of dishOverviewView
	var dishOverviewView = new DishOverviewView(dishOverviewContainer,model);

	// And create the instance of dishesPrintoutView
	//var dishPrintoutView = new DishPrintoutView(dishPrintoutContainer,model);

	// Instantiate the controller and pass it the view and model
	var welcomeController = new WelcomeController($("#welcomeView"), model, this);

	// Instantiate the controller and pass it the view and model
	var dishSearchController = new DishSearchController(dishSearchView, model, this);

	// Instantiate the controller and pass it the view and model
	var dishDetailsController = new DishDetailsController(dishDetailsView, model, this);

	// Instantiate the controller and pass it the view and model
	var dishOverviewController = new DishOverviewController(dishOverviewView, model, this);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see dishDetailsView.js).
	 */


	 /*
	 * Show and hide views
	 */

	$(function() {

		/*var generalController = new GeneralController();

		var dishDetailsView = new DishDetailsView(dishDetailsContainer,model);

		generalController.addView(dishDetailsView);
		var dishDetailsViewController = new DishDetailsViewController(dishDetailsView, model, generalController)
		
		// ...
	
		generalController.addScreen('CONFIRM',[confirmView]);
		*/
		
		// ...

		
		//show select dish
		var hideViewsSelectDish = function(){
			$('#welcomeView').hide();
			$('#dishDetailsView').hide();
			$('#dishOverviewView').hide();
			$('#dishPrintoutView').hide();
			//...
		}

		this.showSelectDish = function(){
			hideViewsSelectDish();
			$('#sidebarView').show();
			$('#dishSearchView').show();
			
		}				
		
		//show dish details
		var hideViewsDishDetails = function(){
			$('#welcomeView').hide();
			$('#sidebarView').hide();
			$('#dishSearchView').hide();
			$('#dishOverviewView').hide();
			$('#dishPrintoutView').hide();
			//...
		}
	
		this.showDishDetails = function(){
			hideViewsDishDetails();
			$('#dishDetailsView').show();
		}

		//show dish overview
		var hideViewsDishOverview = function(){
			$('#welcomeView').hide();
			$('#sidebarView').hide();
			$('#dishSearchView').hide();
			$('#dishDetailsView').hide();
			$('#dishPrintoutView').hide();
			//...
		}

		this.showDishOverview = function(){
			hideViewsDishOverview();
			$('#dishOverviewView').show();
			
		}

		//show dish print out
		var hideViewsDishPrintout = function(){
			$('#welcomeView').hide();
			$('#sidebarView').hide();
			$('#dishSearchView').hide();
			$('#dishDetailsView').hide();
			$('#dishOverviewView').hide();
			//...
		}

		this.showDishPrintout = function(){
			hideViewsDishPrintout();
			$('#dishPrintoutView').show();
			
		}
	
	});

	//dishDetailsView.confirmButton.click(function(){
		//alert( "Handler for .click() called." );
     //   this.showConfirmScreen();
	//});
	 
	/*$('confirmButton').click(function(){
			
			$('#welcomeView').hide();
			$('#sidebarView').hide();
			$('#dishSearchView').hide();
		
			$('#dishDetailsView').show();

		
	});*/

});