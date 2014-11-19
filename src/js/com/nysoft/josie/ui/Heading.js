Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Heading', {
    meta: {
        text: 'string',
        size: { type: 'number', defaultValue: 1 },
        secondaryText: 'string'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var iSize = this.getSize(),
                sSecondaryText = this.getSecondaryText(),
                sContent = '<h'+iSize+'>';
            sContent += this.getText();
            if(sSecondaryText) {
                sContent += ' <small>'+sSecondaryText+'</small>';
            }
            sContent += '</h'+iSize+'>';
            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});