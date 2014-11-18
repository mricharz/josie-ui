Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Text', {
    meta: {
        lead: { type: 'boolean', defaultValue: false },
        text: 'string',
        alignment: { type: 'string', defaultValue: '' },
        transformation: { type: 'string', defaultValue: '' },
        click: 'function'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var bLead = this.getLead(),
                sAlignment =  this.getAlignment(),
                sTransformation = this.getTransformation(),
                sContent = '<p';

            if(bLead) {
                this.addCssClass('lead');
            }
            if(sAlignment) {
                this.addCssClass('text-'+sAlignment);
            }
            if(sTransformation) {
                this.addCssClass('text-'+sTransformation);
            }
            sContent += this.writeCssClasses();

            sContent += '>';
            sContent += this.getText();
            sContent += '</p>';

            this.replaceDom(sContent);
            this.getDom().click(jQuery.proxy(function(e) {
                this.getClick().call(this, e);
            }, this));
        }
        this._super('_renderControl', arguments);
    },

    setText: function(sText) {
        if(typeof sText == 'string' || sText == null) {
            this.setProperty('text', sText);
            this._renderControl();
        }
    },

    setLead: function(bLead) {
        if(typeof bLead == 'boolean') {
            this.setProperty('lead', bLead);
            this._renderControl();
        }
    },

    setAlignment: function(sAlignment) {
        if(typeof sAlignment == 'string' || sAlignment == null) {
            this.setProperty('alignment', sAlignment);
            this._renderControl();
        }
    },

    setTransformation: function(sTransformation) {
        if(typeof sTransformation == 'string' || sTransformation == null) {
            this.setProperty('transformation', sTransformation);
            this._renderControl();
        }
    }
});