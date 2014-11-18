Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.TextField.Type');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.TextField', {
    meta: {
        type: { type: 'string', defaultValue: com.nysoft.josie.ui.TextField.Type.Text },
        placeholder: 'string',
        disabled: { type: 'boolean', defaultValue: false },
        name: { type: 'string', defaultValue: '' },
        click: 'function'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var bDisabled = this.getDisabled(),
                sType = this.getType(),
                sPlaceholder =  this.getPlaceholder(),
                sName = this.getName(),
                sContent = '<input';

            if(sType != com.nysoft.josie.ui.TextField.Type.File) {
                this.addCssClass('form-control');
            }
            sContent += this.writeCssClasses();

            sContent += 'type="'+sType+'" ';
            if(sName) {
                sContent += 'name="' + sName + '" ';
            }
            if(sType != com.nysoft.josie.ui.TextField.Type.File) {
                if (sPlaceholder) {
                    sContent += 'placeholder="' + sPlaceholder + '" ';
                }
            }
            if(bDisabled) {
                sContent += 'disabled="disabled"';
            }

            sContent += '/>';

            this.replaceDom(sContent);
            this.getDom().click(jQuery.proxy(function(e) {
                this.getClick().call(this, e);
            }, this));
        }
        this._super('_renderControl', arguments);
    },

    setDisabled: function(bDisabled) {
        if(typeof bDisabled == 'boolean') {
            this.setProperty('disabled', bDisabled);
            this._renderControl();
        }
    },

    setType: function(sType) {
        if(typeof sType == 'string' || sType == null) {
            this.setProperty('type', sType);
            this._renderControl();
        }
    },

    setPlaceholder: function(sPlaceholder) {
        if(typeof sPlaceholder == 'string' || sPlaceholder == null) {
            this.setProperty('placeholder', sPlaceholder);
            this._renderControl();
        }
    },

    setName: function(sName) {
        if(typeof sName == 'string' || sName == null) {
            this.setProperty('name', sName);
            this._renderControl();
        }
    }
});