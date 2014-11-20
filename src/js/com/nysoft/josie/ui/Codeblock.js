Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Codeblock', {

    meta: {
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            this.replaceDom('<pre></pre>');
        }
        this._super('_renderControl', arguments);
    }

});