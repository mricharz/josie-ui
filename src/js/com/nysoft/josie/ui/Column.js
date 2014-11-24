Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Column.Size');
Josie.require('com.nysoft.josie.ui.Column.Offset');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Column', {
    meta: {
        size: { type: 'string', defaultValue: com.nysoft.josie.ui.Column.Size.Large[12] },
        offset: { type: 'string', defaultValue: '' },
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sSize = this.getSize(),
                sOffset = this.getOffset();

            if(sSize) {
                this.getDom().addClass('col-' + sSize);
            }
            if(sOffset) {
                this.getDom().addClass('col-' + sOffset);
            }
        }
        this._super('_renderControl', arguments);
    }

});