var DishPrintoutView = function (dishPrintoutContainer, model) {

	this.editDinner2 = dishPrintoutContainer.find("#editDinner2");

	var people = dishPrintoutContainer.find("#peoplePrintout");
	document.getElementById("peoplePrintout").innerHTML = model.getNumberOfGuests();

	var menu = model.getFullMenu();

	
	var printOut = function(){

		menu = model.getFullMenu();
		document.getElementById("printOneDish").innerHTML = '<div class="container">'

		menu.forEach(function(menuItem)
		{

			document.getElementById("printOneDish").innerHTML += '<div class="row">'+
			'<div class="col-sm-3" style="padding-bottom:10px">'+
				'<div class="col-item" style="margin:30px">'+'<div class="photo">'+'<img src="images/'+menuItem.image+
				'" class="img-responsive" alt="a" />'+'</div>'+'<div class="info">'+'<div class="row">'+
				'<div class="price col-md-12">'+'<h5>'+menuItem.name+'</h5>'+'<br/>'+'</div>'+
				'</div>'+'<div class="separator clear-left">'+
				'<i class="fa fa-list"></i><h5 class="price-text-color">'//+dishCost+
				+'</h5>'+'</div>'+'<div class="clearfix">'+'</div>'+'</div>'+'</div>'+'</div>' +

				'<div class="col-sm-4" style="padding:10px">'+
				
				'<h2>'+menuItem.name+'</h2>'+'<br/>'+
				'<p>'+ menuItem.description+ '</p>' +
				'</div>' +

				'<div class="col-sm-4" style="padding:10px">'+
				
				'<h4>'+"PREPARATION"+'</h4>'+'<br/>'+
				'<p>'+ menuItem.description+ '</p>' +
				'</div>' +
			'</div>'
		});	
		document.getElementById("printOneDish").innerHTML += '</div>'
	}

	printOut();
	

	this.update=function(){

		document.getElementById("peoplePrintout").innerHTML = model.getNumberOfGuests();
		menu = model.getFullMenu();
		printOut();
	}

  
	model.addObserver(this.update);

}