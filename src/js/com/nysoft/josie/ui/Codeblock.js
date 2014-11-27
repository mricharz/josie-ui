Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Codeblock', {

    meta: {
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sContent = '<pre';
            sContent += this.writeCssClasses();
            sContent += this.writeCssStyles();
            sContent += '></pre>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});