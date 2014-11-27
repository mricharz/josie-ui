Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Blockquote', {

    meta: {
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sContent = '<blockquote';
            sContent += this.writeCssClasses();
            sContent += this.writeCssStyles();
            sContent += '></blockquote>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});