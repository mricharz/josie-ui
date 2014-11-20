Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Text', {
    meta: {
        lead: { type: 'boolean', defaultValue: false },
        text: 'string',
        alignment: { type: 'string', defaultValue: '' },
        transformation: { type: 'string', defaultValue: '' }
    },

    _renderControl: function() {
        if(this.getDom()) {
            var bLead = this.getLead(),
                sText = this.getText(),
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
            if(sText) {
                sContent += sText;
            }
            sContent += '</p>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});