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
                this.addCssClass('col-' + sSize);
            }
            if(sOffset) {
                this.addCssClass('col-' + sOffset);
            }

            this.getDom().addClass(this.getCssClasses().join(' '));
            this.setCssClasses([]);

            this.getDom().css(this.getCssStyles());
            this.setCssStyles({});
        }
        this._super('_renderControl', arguments);
    }

});