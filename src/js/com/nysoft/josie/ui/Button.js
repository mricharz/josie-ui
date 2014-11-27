Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Button.Type');
Josie.require('com.nysoft.josie.ui.Button.Size');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Button', {
	meta: {
        type: { type: 'string', defaultValue: com.nysoft.josie.ui.Button.Type.Default },
        size: { type: 'string', defaultValue: com.nysoft.josie.ui.Button.Size.Default },
        block: { type: 'boolean', defaultValue: false },
        disabled: { type: 'boolean', defaultValue: false },
		text: 'string',
		icon: 'string'
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
            sContent += this.writeCssStyles();

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
            this._bindEvents();
		}
        this._super('_renderControl', arguments);
	},

    _bindEvents: function() {
        //bind global control events
        var jqDom = this.getDom();
        jqDom.click(jQuery.proxy(function(){
            this.trigger('onClick');
        }, this));
        jqDom.dblclick(jQuery.proxy(function(){
            this.trigger('onDblClick');
        }, this));
    }

});