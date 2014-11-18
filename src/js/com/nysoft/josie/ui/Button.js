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
			this.getDom().addClass('btn');
			this.getDom().click(jQuery.proxy(function(e) {
				this.getClick().call(this, e);
			}, this));
		}
        this._super('_renderControl', arguments);
	},
	
	setText: function(sText) {
		if(typeof sText == 'string' || sText == null) {
			this.setProperty('text', sText);
            if(!sText)
                sText = '';
			this.getDom().text(sText);
		}
	},

    setType: function(sType) {
        if(typeof sType == 'string' || sType == null) {
            var sOldType = this.getProperty('type');
            this.setProperty('type', sType);
            this.getDom().removeClass('btn-'+sOldType).addClass('btn-'+sType);
        }
    },
	
	setIcon: function(sIcon) {
		if(typeof sIcon == 'string' || sIcon == null) {
			this.setProperty('icon', sIcon);
            if(this.jqIcon) {
                this.jqIcon.remove();
            }
            this.jqIcon = jQuery('<span class="'+sIcon+'" aria-hidden="true"></span>');
            this.getDom().prepend(this.jqIcon);
		}
	}
});