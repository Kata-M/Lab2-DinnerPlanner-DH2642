
var DishSearchView = function (dishSearchContainer, model) {
	
	var numberOfGuests = dishSearchContainer.find("#numberOfGuests");
	this.plusButton = dishSearchContainer.find("#plusGuest");
	this.minusButton = dishSearchContainer.find("#minusGuest");
	


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
	 * Search Types
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
	

		
}