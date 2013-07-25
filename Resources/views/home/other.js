/**
 * Create the home list view.
 * @param model A dictionary with a list of items.
 */
view = function (model) {
    var win = Ti.UI.createWindow({
        backgroundColor: 'purple',
        modal:true,
    });
    
    win.add(AirView('shared/label',{title:model.param} ));
    win.add(AirView('shared/button','Back', {click:function(){
    	win.close();
    }}));
    return win;
};