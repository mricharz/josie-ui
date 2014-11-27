Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Row', {
    meta: {
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            this.addCssClass('row');
            this.getDom().addClass(this.getCssClasses().join(' '));
            this.setCssClasses([]);

            this.getDom().css(this.getCssStyles());
            this.setCssStyles({});
        }
        this._super('_renderControl', arguments);
    }

});