Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Blockquote', {

    meta: {
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            this.replaceDom('<blockquote></blockquote>');
        }
        this._super('_renderControl', arguments);
    }

});