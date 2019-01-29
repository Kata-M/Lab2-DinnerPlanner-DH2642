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
var DishSearchView = function (dishSearchContainer, model) {
	
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
	this.plusButton = dishSearchContainer.find("#plusGuest");
	this.minusButton = dishSearchContainer.find("#minusGuest");
	
	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */

	 //for testing

	var numGuests = model.getNumberOfGuests();
	numberOfGuests.append($("<p> Number of guests"+ numGuests +"</p>"));
	console.log(numGuests);
	document.getElementById("numberOfGuests").innerHTML = numGuests;
	


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
	Search Types
	*/

	var types = model.getAllTypes();
	//totalPrice.append($(total));
	console.log("types : ",types);
	var n = 0;
	types.forEach(function(type)
		{
			document.getElementById("type"+n).innerHTML = type;
			n++;
		});
	

		/*
		* Add dish for loop to display all dishes
		*/
}