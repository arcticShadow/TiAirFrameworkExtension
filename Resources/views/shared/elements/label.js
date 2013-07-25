view = function (model) {
    
    if (typeof(model) == 'string') {
        model = { title: model };
    }
    
    //TODO: Merge in some defaults
    var label = Ti.UI.createLabel({
        text: model.title, width: 'auto', height: 'auto'
    });
    
    return label;
};