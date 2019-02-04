var FindDishViewController = function(view,model,app){	

	view.searchButton.click(function(event){ 
		event.preventDefault();
		view.showThumbnails();
	});


    view.filterButton.on('click', '.dishItem', function(){ 
        
       var id = $(this).attr('id'); 
       //activeType = this.getAttribute("value");
       app.showDishDetails(id);
     
    });


}