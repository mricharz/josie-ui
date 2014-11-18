Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Button.Type');
Josie.require('com.nysoft.josie.ui.Button.Size');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Button', {
	meta: {
        type: {type: 'string', defaultValue: com.nysoft.josie.ui.Button.Type.Default },
        size: { type: 'string', defaultValue: com.nysoft.josie.ui.Button.Size.Default },
        block: { type: 'boolean', defaultValue: false },
        disabled: { type: 'boolean', defaultValue: false },
		text: 'string',
		icon: 'string',
		click: 'function'
	},
	
	_renderControl: function() {
		if(this.getDom()) {
            var bDisabled = this.getDisabled(),
                bBlock = this.getBlock(),
                sText = this.getText(),
                sSize = this.getSize(),
                sType = this.getType(),
                sIcon = this.getIcon(),
                sContent = '<div';

            this.addCssClass('btn');
            if(sType) {
                this.addCssClass('btn-'+sType);
            }
            if(sSize) {
                this.addCssClass('btn-'+sSize);
            }
            if(bBlock) {
                this.addCssClass('btn-block');
            }
            sContent += this.writeCssClasses();

            if(bDisabled) {
                sContent += 'disabled="disabled"';
            }

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

    setDisabled: function(bDisabled) {
        if(typeof bDisabled == 'boolean') {
            this.setProperty('disabled', bDisabled);
            this._renderControl();
        }
    },

    setBlock: function(bBlock) {
        if(typeof bBlock == 'boolean') {
            this.setProperty('block', bBlock);
            this._renderControl();
        }
    },
	
	setText: function(sText) {
		if(typeof sText == 'string' || sText == null) {
			this.setProperty('text', sText);
            this._renderControl();
		}
	},

    setType: function(sType) {
        if(typeof sType == 'string' || sType == null) {
            this.setProperty('type', sType);
            this._renderControl();
        }
    },

    setSize: function(sSize) {
        if(typeof sSize == 'string' || sSize == null) {
            this.setProperty('size', sSize);
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