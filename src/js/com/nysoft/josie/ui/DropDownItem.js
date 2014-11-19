Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.DropDownItem.Type');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.DropDownItem', {
    meta: {
        text: 'string',
        type: { type: 'string', defaultValue: com.nysoft.josie.ui.DropDownItem.Type.Default },
        disabled: { type: 'boolean', defaultValue: false },
        click: 'function'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var bDisabled = this.getDisabled(),
                sType =  this.getType(),
                sText = this.getText(),
                sContent = '<li';

            if(bDisabled) {
                this.addCssClass('disabled');
            }
            if(sType) {
                this.addCssClass(sType);
            }
            sContent += this.writeCssClasses();

            sContent += '>';
            sContent += sText;
            sContent += '</li>';

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