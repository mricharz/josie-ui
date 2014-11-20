Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Button.Type');
Josie.require('com.nysoft.josie.ui.Button.Size');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.DropDown', {
    meta: {
        type: {type: 'string', defaultValue: com.nysoft.josie.ui.Button.Type.Default },
        size: { type: 'string', defaultValue: com.nysoft.josie.ui.Button.Size.Default },
        block: { type: 'boolean', defaultValue: false },
        disabled: { type: 'boolean', defaultValue: false },
        text: 'string',
        icon: 'string',
        content: 'object'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sId = this.getId(),
                bDisabled = this.getDisabled(),
                bBlock = this.getBlock(),
                sText = this.getText(),
                sSize = this.getSize(),
                sType = this.getType(),
                sIcon = this.getIcon(),
                sContent = '<div class="dropdown">';

            sContent += '<div id="'+sId+'-btn"';

            this.addCssClass('btn');
            this.addCssClass('dropdown-toggle');
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

            sContent += ' data-toggle="dropdown">';
            if(sIcon) {
                sContent += '<span class="' + sIcon + '" aria-hidden="true"></span> ';
            }
            if(sText) {
                sContent += sText;
            }
            sContent += ' <span class="caret"></span></div>';

            sContent += '<ul class="dropdown-menu" role="menu" aria-labelledby="'+sId+'-btn"></ul>';

            sContent += '</div>';

            this.replaceDom(sContent);
            this._bindEvents();
        }
        this._super('_renderControl', arguments);
    },

    _bindEvents: function() {
        //bind global control events
        var jqDom = this.getDom();
        jqDom.on('show.bs.dropdown', jQuery.proxy(function(){
            this.trigger('onShow');
        }, this));
        jqDom.on('hide.bs.dropdown', jQuery.proxy(function(){
            this.trigger('onHide');
        }, this));
        jqDom.click(jQuery.proxy(function(){
            this.trigger('onClick');
        }, this));
        jqDom.dblclick(jQuery.proxy(function(){
            this.trigger('onDblClick');
        }, this));
    },

    _renderContentItem: function(oItem) {
        this.getDom().children('ul').append(oItem.getDom());
        oItem._renderControl();
    }

});