Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Image', {
    meta: {
        type: { type: 'string', defaultValue: '' },
        responsive: { type: 'boolean', defaultValue: false },
        src: 'string',
        title: 'string'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sSrc = this.getSrc(),
                sTitle = this.getTitle(),
                sType = this.getType(),
                sContent = '<img';

            if(sType) {
                this.addCssClass('img-'+sType);
            }
            if(this.getResponsive()) {
                this.addCssClass('img-responsive');
            }
            sContent += this.writeCssClasses();
            sContent += this.writeCssStyles();

            sContent += ' alt="'+sTitle+'" title="'+sTitle+'"';
            sContent += ' src="'+sSrc+'"';
            sContent += '/>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }
});