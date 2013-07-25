/**
 * Create the home list view.
 * @param model A dictionary with a list of items.
 */
view = function (model) {
    var self = Ti.UI.createView({});
    var rows = [];
    for (var i = 0; i < model.list.length; i++) {
    	(function(r){
	    	var row = AirView('shared/row', model.list[i]);
	    
	    	row.addEventListener('click',function(){ 
	    		var other = AirAction('home/other', 'Non Default String'); 
	    		other.open();
	    	});
	        r.push(row);
        })(rows);
    }
    self.add(AirView('table', rows));
    return win;
};