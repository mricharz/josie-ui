Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Container', {
    meta: {
        fluid: { type: 'boolean', defaultValue: false },
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            if(this.getFluid()) {
                this.addCssClass('container-fluid');
            } else {
                this.addCssClass('container');
            }
            this.getDom().addClass(this.getCssClasses().join(' '));

            this.getDom().css(this.getCssStyles());
        }
        this._super('_renderControl', arguments);
    }

});