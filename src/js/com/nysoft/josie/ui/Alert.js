Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Alert.Type');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Alert', {
    meta: {
        text: 'string',
        dismissible: { type: 'boolean', defaultValue: false },
        type: { type: 'string', defaultValue: com.nysoft.josie.ui.Alert.Type.Info }
    },

    _renderControl: function() {
        if(this.getDom()) {
            var bDismissible = this.getDismissible(),
                sType = this.getType(),
                sContent = '<div';

            this.addCssClass('alert');
            if(bDismissible) {
                this.addCssClass('alert-dismissible');
            }
            if(sType) {
                this.addCssClass('alert-'+sType);
            }
            sContent += this.writeCssClasses();

            sContent += '>';
            if(bDismissible) {
                sContent += '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>';
            }
            sContent += '</div>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});