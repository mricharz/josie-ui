Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Row', {
    meta: {
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            this.getDom().addClass('row');
        }
        this._super('_renderControl', arguments);
    }

});