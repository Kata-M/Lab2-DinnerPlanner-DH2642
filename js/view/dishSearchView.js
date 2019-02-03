/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var DishSearchView = function (dishSearchContainer, model, app) {
	

	// Set the public elements that will be accessible from the controller
	this.container = dishSearchContainer;

	/**
	 * We use the @method find() on @var {jQuery object} container to look for various elements 
	 * inside the view in orther to use them later on. For instance:
	 * 
	 * @var {jQuery object} numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now 
	 * only 'Hello world', but you should change this by end of Lab 1).
	 * 
	 * We use variables when we want to make the reference private (only available within) the
	 * ExampleView.
	 * 
	 * IMPORTANT: Never use $('someSelector') directly in the views. Always use container.find
	 * or some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 * 
	 */
	var numberOfGuests = dishSearchContainer.find("#numberOfGuests");

	/**
	 * When we want references to some view elements to be available from outside of view, we 
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it 
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 * 
	 * We can then, in some other code, use exampleView.plusButton to reference the 
	 * this button and do something with it (see Lab 2).
	 * 
	 */
	//this.plusButton = dishSearchContainer.find("#plusGuest");
	//this.minusButton = dishSearchContainer.find("#minusGuest");
	

	/*
	Total Price 
	*/

	var totalPrice = dishSearchContainer.find("#totalPrice");
	var total = model.getTotalMenuPrice();
	//totalPrice.append($(total));
	totalPrice.html("199");
	console.log("total price ",total);

	var privacy_string = total;
	//document.getElementById("total_price").value = total;
	document.getElementById("total_price").innerHTML = total;


	/*
	 * Search Types
	*/
	this.searchType = dishSearchContainer.find("#searchType");
	
	var selectType = dishSearchContainer.find("#selectType");
	var types = model.getAllTypes();
	//totalPrice.append($(total));
	//var n = 0;
	// types.forEach(function(type)
	// 	{
	// 		document.getElementById("type"+n).innerHTML = type;
	// 		n++;
	// 	});

	//document.getElementById("selectType").innerHTML += '<select>'
	document.getElementById("selectType").innerHTML += '<option value= "all"> all </option>'
	types.forEach(function(type){
		document.getElementById("selectType").innerHTML += '<option value="'+type+'">'+ type +'</option>'	
	});
	//document.getElementById("selectType").innerHTML += '</select>'
	
	/*
	* Add dish for loop to display all dishes
	*/	
	var showDishes = dishSearchContainer.find("#showDishes");
	var dishCost = 0;

	 	var allDishes = model.getAllDishes("all"); 
		
		document.getElementById("showDishes").innerHTML = '<div class="container">'+'<div class="row" style="margin-top:30px">'
		allDishes.forEach(function(dish){
			
			dishCost = model.getDishCost(dish);
			
			document.getElementById("showDishes").innerHTML += 
			'<div id="'+dish.id+'" class="col-sm-3 dishItem" style="padding-bottom:10px">'+
			'<div class="col-item">'+'<div class="photo">'+
			'<img src="images/'+dish.image+'" class="img-responsive" alt="a" />'+
			'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+
			'<h5>'+dish.name+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+
			'<i class="fa fa-list"></i><h5 class="price-text-color">$'+dishCost+'</h5>'+'</div>'+
			'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		
		});
		document.getElementById("showDishes").innerHTML += '</div>'+'</div>'


	/*
	* function called from controller to load dishes
	*/
	this.loadDishes = function(){

		var showDishes = dishSearchContainer.find("#showDishes");
		var dishCost = 0;
		this.dishItems = [];

		var selectedType = document.getElementById("selectType").value;
	 	var allDishes = model.getAllDishes(selectedType);
	 	console.log(selectedType);
		
		document.getElementById("showDishes").innerHTML = '<div class="container">'+'<div class="row" style="margin-top:30px">'
		allDishes.forEach(function(dish){
			
			dishCost = model.getDishCost(dish);
			
			var item = document.getElementById("showDishes").innerHTML += '<div id="'+dish.id+'" class="col-sm-3 dishItem" style="padding-bottom:10px">'+'<div class="col-item">'+'<div class="photo">'+'<img src="images/'+dish.image+'" class="img-responsive" alt="a" />'+'</div>'+'<div class="info">'+'<div class="row">'+'<div class="price col-md-12">'+'<h5>'+dish.name+'</h5>'+'<br/>'+'</div>'+'</div>'+'<div class="separator clear-left">'+'<i class="fa fa-list"></i><h5 class="price-text-color">$'+dishCost+'</h5>'+'</div>'+'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>'		

			//new DishItemController(item, dish, app);
		});
		document.getElementById("showDishes").innerHTML += '</div>'+'</div>'

	}

	

	// The observer update function, triggered by the model when there are changes
	// this.update = function(args) {

	// 	if(args == 'numberOfGuest'){
			
	// 		numberOfGuest = args[0];
	// 	}
	// 	if(args == 'menu'){
						
	// 		// update menu
	// 	}
		
	// 	loadDishes();

	// 	 // redraw just the portion affected by the changeDetails
    // 	 // or remove all graphics in the view, read the whole model and redraw 
	// }

    //this.setDishes = function() {
	// 	loadDishes();
	// 	//container.find(oldType).removeClass("active");
	// 	//container.find(selectedType).addClass("active");
	// }

	//model.addObserver(this);

	//model.addObserver(this.update);

	//load all the dishes on initialization
	//loadDishes();

	this.showDishes = dishSearchContainer.find("#showDishes");

}