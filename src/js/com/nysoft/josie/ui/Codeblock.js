Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Codeblock', {

    meta: {
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            this.replaceDom('<pre></pre>');
            this._renderContent();
        }
        this._super('_renderControl', arguments);
    },

    setContent: function(aObjects) {
        if(typeof aObjects == 'object') {
            this.setProperty('content', aObjects);
            this._renderContent();
        }
    },

    _renderContent: function() {
        var aObjects = this.getContent();
        if(typeof aObjects == 'object') {
            var dom = this.getDom();
            if(aObjects.length > 0) {
                Josie.utils.each(aObjects, function(oObject) {
                    dom.append(oObject.getDom());
                    oObject._renderControl();
                });
            } else {
                dom.append(aObjects.getDom());
                aObjects._renderControl();
            }
        }
    }

});