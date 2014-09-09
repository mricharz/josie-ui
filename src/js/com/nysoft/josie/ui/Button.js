jQuery.require('com.nysoft.josie.core.Control');
jQuery.require('css/com/nysoft/josie/ui.css', {dataType: 'stylesheet'});

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Button', {
	meta: {
		text: 'string',
		icon: 'string',
		click: 'function'
	},
	
	_renderControl: function() {
		this._super('_renderControl', arguments);
		if(this.getDom()) {
			this.getDom().addClass('button');
			this.getDom().html('<span class="icon" /><span class="text" />');
			this.getDom().click(jQuery.proxy(function(e) {
				this.getClick().call(this, e);
			}, this));
		}
	},
	
	setText: function(text) {
		if(typeof text == 'string' || text == null) {
			this.setProperty('text', text);
			var oText = this.getDom().children('.text');
			if(text) {
				oText.show().text(text);
			} else {
				oText.hide();
			}
		}
	},
	
	setIcon: function(icon) {
		if(typeof icon == 'string' || icon == null) {
			this.setProperty('icon', icon);
			var oIcon = this.getDom().children('.icon');
			if(icon) {
				oIcon.show().html('<img src="'+icon+'" />');
			} else {
				oIcon.hide();
			}
		}
	}
});