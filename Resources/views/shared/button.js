view = function (text, events) {
    
    var button = Ti.UI.createButton({
        title: text, 
    });
    
    //ensure valid obj
    events = events||{};
    
    if(events.click != undefined){
    	button.addEventListener('click',function(){
    		events.click();
    	});
    }
    
    return button;
};