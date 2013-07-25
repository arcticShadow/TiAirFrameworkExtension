view = function (model) {
	
	function tabWidthCalc(numTabs) {
		return Math.floor(Ti.Platform.displayCaps.platformWidth / numTabs);
	}
	
    var tabBar = Ti.UI.createView({
		height:50,
		layout:'horizontal',
		backgroundColor:'#d2932c'
	});
	
	var tabs = [],
		first = true,
		index = 0,
		selectedIndex = 0,
		tabWidth tabWidthCalc(model.tabs.length);
	
	
	for (var key in model.tabs) {
		
		var data = model.tabs[key];
		
		var tab = AirView('TabBar/TabButton', {key:key, text:data.title, icon:data.icon, index:index, selected:first, width:tabWidth } );		
		self.add(tab);
		tabs.push(tab);
		first = false;
		
		(function(i,t) {
			t.addEventListener('click', function() {
				tabBar.selectIndex(i);
				tabBar.fireEvent('selected', {
					index:i
				});
			});
		})(index, tab);
		
		index++;
	}
	
	tabBar.selectIndex = function(idx) {
		for( i in tabs){
			
			if( idx == -1 ){
				tabs[i].toggle(false);
			}
			else if (currentTab.index === idx) {
				tabs[i].toggle(true);
			}
			else {
				tabs[i].toggle(false);
			}
		};
	};
	
	return tabBar;
	
	
};