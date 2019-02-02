var SidebarView = function(sidebarContainer,model){

	
	this.numberOfGuests = sidebarContainer.find("#numberOfGuests");
	this.confirmDinner = sidebarContainer.find("#confirmDinner");
	this.plusButton = sidebarContainer.find("#plus");
	this.minusButton = sidebarContainer.find("#minus");

	var numGuests = model.getNumberOfGuests();
  	document.getElementById("guests").innerHTML = numGuests; 

  	var totalCost = model.getTotalMenuPrice();
  	//document.getElementById("total_cost").innerHTML = totalCost;

  	
  	//-----
  	var populateMenuView = function(){
		 	var allMenu = model.getFullMenu();
			
            /*
            document.getElementById("menu").innerHTML = '<tr id="menuItem'+"test"+'">'+
					'<th scope="row" id="1dish">'+"test"+'</th>' +
					'<td id="1price"><span id="1dish_price">'+ "test" + ' kr </span></td>' +
				'</tr>'
			*/
			document.getElementById("menu").innerHTML = 
			'<thead>'+ 
                      '<tr>' +  
                        '<th>Dish Name</th>' + 
                        '<th align="left">Cost</th>' + 
                      '</tr>' + 
            '</thead>' +
            '<tbody>'



			allMenu.forEach(function(menuItem){

				var menuItemName = menuItem.name;
				console.log("menuItemName", menuItemName);
				var menuItemCost = model.getDishCost(menuItem)*model.getNumberOfGuests();
				

				
				document.getElementById("menu").innerHTML += 
				'<tr id="menuItem'+menuItemName+'">'+
					'<th scope="row" id="1dish">'+menuItemName+'</th>' +
					'<td id="1price"><span id="1dish_price">'+ menuItemCost + ' kr </span></td>' +
				'</tr>'
			});
			

			totalCost = model.getTotalMenuPrice();
			
			document.getElementById("menu").innerHTML += 
			'<tr id="menuCost">'+
				'<th scope="row" id="1dish">'+"TOTAL COST"+'</th>' +
				'<td id="1price"><span id="1dish_price">'+ totalCost + ' kr </span></td>' +
			'</tr>'

			document.getElementById("menu").innerHTML += '</tbody>'
	}
  	//-----
  	populateMenuView();

  	this.update=function(model){
	    // redraw just the portion affected by the changeDetails
	    // or remove all graphics in the view, read the whole model and redraw 
	    numGuests = model.getNumberOfGuests();
	  	document.getElementById("guests").innerHTML = numGuests;

	  	//totalCost = model.getTotalMenuPrice();
  		//document.getElementById("total_cost").innerHTML = totalCost;

  		populateMenuView();
	}

	model.addObserver(this.update);
}