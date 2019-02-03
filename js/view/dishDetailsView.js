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
var DishDetailsView = function (dishDetailsContainer, model, id) {



	//for testing
	var numGuests = model.getNumberOfGuests();
	
	var dishDetails = dishDetailsContainer.find("#dishDetails");	

	/**
	 * Here we use @var {jQuery object} fetchIngredients that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */
	var fetchIngredients = dishDetailsContainer.find("#fetchIngredients");	
	//var fetchIngredients = document.getElementById('fetchIngredients');

	this.addToMenu = dishDetailsContainer.find("#addToMenu");

	var loadIngredientsTable =function(){

		//var currentDish = model.getCurrentDish();
		//var ingredients = model.getIngredientsforDish(currentDish.id);

		var dish = model.getDish(id);

		document.getElementById("dishDetails").innerHTML = '<h2 style="text-align: left">'+dish.name+'</h2><br/>'+'<img src="images\\'+dish.image+'" alt="food" style="width:50%; margin-bottom:20px"/>'+'<p>'+dish.description+'</p>'+'<button class="btn center-block buttonclr">Back to search</button>'+'<br/><br/>'+'<h2 style="text-align: left">PREPARATION</h2>'+'<p>'+dish.description+'</p>'
		

		var ingredients = model.getIngredientsforDish(id);
		console.log(ingredients);

		fetchIngredients.append($("<table id='ingredientTable' class='table table-sm'></table>"));
		var ingredientTable = fetchIngredients.find("#ingredientTable");
		
		ingredientTable.append($("<tr id='totalGuests'></tr>"));
		var totalGuestRow = ingredientTable.find("#totalGuests");
		totalGuestRow.append($("<td style=' font-weight: bold '> INGREDIENTS FOR "+numGuests+"</td>"));

		var i = 0;	
		var totalPrice = 0;
		ingredients.forEach(function(ingredient)
		{
			ingredientTable.append($("<tr id='"+i+"'></tr>"));
			var row = ingredientTable.find("#"+i);

			row.append($("<td>"+ingredient.quantity+ingredient.unit+ "</td>"));
			row.append($("<td>"+ingredient.name+"</td>"));
			row.append($("<td>SEK</td>"));
			row.append($("<td>"+ingredient.price*numGuests+"</td>"));
			totalPrice += ingredient.price*numGuests;
			i++;							
		});	
		ingredientTable.append($("<tr id='totalPrice'></tr>"));
		var totalPriceRow = ingredientTable.find("#totalPrice");
		totalPriceRow.append($("<td style=' font-weight: bold '> Total Price "+totalPrice+"</td>"));
	}	
	//model.addObserver(this.update);

	loadIngredientsTable();

	this.update=function(){

		numGuests = model.getNumberOfGuests();
		
		var parentTable = document.getElementById("fetchIngredients");
		var childTable = document.getElementById("ingredientTable");
		parentTable.removeChild(childTable);

		loadIngredientsTable();
	}

	model.addObserver(this.update);

}
 
