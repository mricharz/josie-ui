Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Container', {
    meta: {
        fluid: { type: 'boolean', defaultValue: false },
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            if(this.getFluid()) {
                this.getDom().addClass('container-fluid');
            } else {
                this.getDom().addClass('container');
            }
        }
        this._super('_renderControl', arguments);
    }

});