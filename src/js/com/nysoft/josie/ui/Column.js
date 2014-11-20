Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Column.Size');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Column', {
    meta: {
        size: { type: 'string', defaultValue: com.nysoft.josie.ui.Column.Size.Large[12] },
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            this.getDom().addClass(this.getSize());
        }
        this._super('_renderControl', arguments);
    }

});