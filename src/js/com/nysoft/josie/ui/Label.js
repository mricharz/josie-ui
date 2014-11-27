Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Label.Type');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Label', {
    meta: {
        text: 'string',
        type: { type: 'string', defaultValue: com.nysoft.josie.ui.Label.Type.Default }
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sText = this.getText(),
                sType = this.getType(),
                sContent = '<span';

            this.addCssClass('label');
            if(sType) {
                this.addCssClass('label-'+sType);
            }
            sContent += this.writeCssClasses();
            sContent += this.writeCssStyles();

            sContent += '>';
            if(sText) {
                sContent += sText;
            }
            sContent += '</span>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});