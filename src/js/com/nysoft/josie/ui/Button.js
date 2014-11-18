Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Button', {
	meta: {
        type: {type: 'string', defaultValue: 'default' },
		text: 'string',
		icon: 'string',
		click: 'function'
	},
	
	_renderControl: function() {
		if(this.getDom()) {
            var sText = this.getText(),
                sType = this.getType(),
                sIcon = this.getIcon(),
                sContent = '<div';

            this.addCssClass('btn');
            if(sType) {
                this.addCssClass('btn-'+sType);
            }
            sContent += this.writeCssClasses();

            sContent += '>';
            if(sIcon) {
                sContent += '<span class="' + sIcon + '" aria-hidden="true"></span> ';
            }
            if(sText) {
                sContent += sText;
            }
            sContent += '</div>';

            this.replaceDom(sContent);
			this.getDom().click(jQuery.proxy(function(e) {
				this.getClick().call(this, e);
			}, this));
		}
        this._super('_renderControl', arguments);
	},
	
	setText: function(sText) {
		if(typeof sText == 'string' || sText == null) {
			this.setProperty('text', sText);
            this._renderControl();
		}
	},

    setType: function(sType) {
        if(typeof sType == 'string' || sType == null) {
            var sOldType = this.getProperty('type');
            this.setProperty('type', sType);
            this._renderControl();
        }
    },
	
	setIcon: function(sIcon) {
		if(typeof sIcon == 'string' || sIcon == null) {
			this.setProperty('icon', sIcon);
            this._renderControl();
		}
	}
});