Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Image', {
    meta: {
        type: { type: 'string', defaultValue: '' },
        responsive: { type: 'boolean', defaultValue: false },
        src: 'string',
        title: 'string',
        click: 'function'
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

            sContent += ' alt="'+sTitle+'" title="'+sTitle+'"';
            sContent += ' src="'+sSrc+'"';
            sContent += '/>';

            this.replaceDom(sContent);
            this.getDom().click(jQuery.proxy(function(e) {
                this.getClick().call(this, e);
            }, this));
        }
        this._super('_renderControl', arguments);
    },

    setTitle: function(sTitle) {
        if(typeof sTitle == 'string' || sTitle == null) {
            this.setProperty('title', sTitle);
            this._renderControl();
        }
    },

    setType: function(sType) {
        if(typeof sType == 'string' || sType == null) {
            this.setProperty('type', sType);
            this._renderControl();
        }
    },

    setSrc: function(sSrc) {
        if(typeof sSrc == 'string' || sSrc == null) {
            this.setProperty('src', sSrc);
            this._renderControl();
        }
    },

    setResponsive: function(bResponsive) {
        if(typeof bResponsive == 'boolean') {
            this.setProperty('responsive', bResponsive);
            this._renderControl();
        }
    }
});