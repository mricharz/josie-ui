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
            this._renderContent();
        }
        this._super('_renderControl', arguments);
    },

    _renderContent: function() {
        var aObjects = this.getContent();
        if(typeof aObjects == 'object' && aObjects) {
            if(aObjects.length > 0) {
                var t = this;
                Josie.utils.each(aObjects, function(oObject) {
                    t._renderItem(oObject);
                });
            } else {
                this._renderItem(aObjects);
            }
        }
    },

    _renderItem: function(oItem) {
        this.getDom().append(oItem.getDom());
        oItem._renderControl();
    }

});