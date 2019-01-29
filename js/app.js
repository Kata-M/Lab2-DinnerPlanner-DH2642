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
	var dishItemContainer = $("#dishItemView");

	//dishOverviewView
	var dishOverviewContainer = $("#dishOverviewView");

	//dishDetailsView
	var dishDetailsContainer = $("#dishDetailsView");

	//dishPrintoutView
	//var dishPrintoutContainer = $("#dishPrintoutView");
	
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
	//var dishDetailsView = new DishDetailsView(dishDetailsContainer,model);

	// And create the instance of dishOverviewView
	//var dishOverviewView = new DishOverviewView(dishOverviewContainer,model);

	// And create the instance of dishesPrintoutView
	//var dishPrintoutView = new DishPrintoutView(dishPrintoutContainer,model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see dishDetailsView.js).
	 */

});