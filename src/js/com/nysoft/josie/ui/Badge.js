Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Badge', {
    meta: {
        text: 'string',
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sText = this.getText(),
                sContent = '<span';

            this.addCssClass('badge');
            sContent += this.writeCssClasses();

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