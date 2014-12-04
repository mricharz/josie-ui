Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Text.Alignment');
Josie.require('com.nysoft.josie.ui.Text.Transformation');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Text', {
    meta: {
        lead: { type: 'boolean', defaultValue: false },
        text: 'string',
        htmlEncode: { type: 'boolean', defaultValue: false },
        alignment: { type: 'string', defaultValue: '' },
        transformation: { type: 'string', defaultValue: '' }
    },

    _renderControl: function() {
        if(this.getDom()) {
            var bLead = this.getLead(),
                bHtmlEncode = this.getHtmlEncode(),
                sText = this.getText(),
                sAlignment =  this.getAlignment(),
                sTransformation = this.getTransformation(),
                sContent = '<p';

            if(bLead) {
                this.addCssClass('lead');
            }
            if(sAlignment) {
                this.addCssClass(sAlignment);
            }
            if(sTransformation) {
                this.addCssClass(sTransformation);
            }
            sContent += this.writeCssClasses();
            sContent += this.writeCssStyles();

            sContent += '>';
            if(sText && !bHtmlEncode) {
                sContent += sText;
            }
            sContent += '</p>';

            this.replaceDom(sContent);
            if(sText && bHtmlEncode) {
                this.getDom().text(sText);
            }
        }
        this._super('_renderControl', arguments);
    }

});