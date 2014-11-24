Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Alert.Type');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Alert', {
    meta: {
        text: 'string',
        type: { type: 'string', defaultValue: com.nysoft.josie.ui.Alert.Type.Info }
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sType = this.getType(),
                sContent = '<div';

            this.addCssClass('alert');
            if(sType) {
                this.addCssClass('alert-'+sType);
            }
            sContent += this.writeCssClasses();

            sContent += '>';
            sContent += '</div>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});