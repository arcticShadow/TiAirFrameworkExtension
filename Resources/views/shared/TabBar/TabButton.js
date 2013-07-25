view = function (model) {	
	var button = Ti.UI.createView({
		opacity:0.8,
		backgroundColor:(selected) ? '#dba03a' : 'transparent',
		width:model.width
	});
	
	button.id = model.id;
	button.index = model.index;
	button.selected = model.selected;
	
	button.add(Ti.UI.createImageView({
		image:model.img,
		height:'auto',
		width:'auto'
	}));
	
	button.add( AirView('elements/label', { 
		text:model.text,
		color:'#ffffff',
		bottom:3,
		font: {
			fontSize:12
		}  
	}) );
		
		
	button.toggle = function(on) {
		(on) ? button.set('backgroundColor', '#dba03a') : self.set('backgroundColor', 'transparent');
	};
	
	return button;
};