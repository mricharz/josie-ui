Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Navigation.Type');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Navigation', {
    meta: {
        type: { type: 'string', defaultValue: com.nysoft.josie.ui.Navigation.Type.Tabs },
        stacked: { type: 'boolean', defaultValue: false },
        justified: { type: 'boolean', defaultValue: false },
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var bStacked = this.getStacked(),
                bJustified =  this.getJustified(),
                sType = this.getType(),
                sContent = '<ul';

            this.addCssClass('nav');
            if(sType) {
                this.addCssClass('nav-'+sType);
            }
            if(bStacked) {
                this.addCssClass('nav-stacked');
            }
            if(bJustified) {
                this.addCssClass('nav-justified');
            }
            sContent += this.writeCssClasses();

            sContent += '></ul>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    },

    _renderContentItem: function(oItem) {
        var sContent = '<li';
        if(oItem.getDisabled && oItem.getDisabled()) {
            sContent += ' class="disabled"';
        }
        sContent += '><li>';
        this.getDom().append(oItem.getDom());
        oItem._renderControl();
        oItem.getDom().wrap(sContent);
    }

});