controller = {
    def: 'list',
    actions: {
        list: function() {
        	var win = Ti.UI.createWindow({ });
        	win.AirView(AirModel('fruitList'));
            return win;
        },
        other:function(param){
        	param = param||'default string';
        	return AirView({param:param});
        }
    }
};