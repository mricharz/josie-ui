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
    },

    setSize: function(iSize) {
        if(typeof iSize == 'number' || iSize == null) {
            this.setProperty('size', iSize);
            this._renderControl();
        }
    },

    setText: function(sText) {
        if(typeof sText == 'string' || sText == null) {
            this.setProperty('text', sText);
            this._renderControl();
        }
    },

    setSecondaryText: function(sSecondaryText) {
        if(typeof sSecondaryText == 'string' || sSecondaryText == null) {
            this.setProperty('secondaryText', sSecondaryText);
            this._renderControl();
        }
    }

});