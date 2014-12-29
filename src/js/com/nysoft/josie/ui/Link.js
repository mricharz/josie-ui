Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Link', {
    meta: {
        text: 'string',
        href: 'string',
        name: 'string',
        target: 'string',
        title: 'string',
        disabled: { type: 'boolean', defaultValue: false }
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sText = this.getText(),
                sHref =  this.getHref(),
                sName =  this.getName(),
                sTarget = this.getTarget(),
                sTitle = this.getTitle(),
                bDisabled = this.getDisabled(),
                sContent = '<a';

            if(bDisabled) {
                this.addCssClass('disabled');
            }

            sContent += this.writeCssClasses();
            sContent += this.writeCssStyles();

            if(sHref) {
                sContent += 'href="'+sHref+'" ';
            }
            if(sName) {
                sContent += 'name="'+sName+'" ';
            }
            if(sTitle) {
                sContent += 'title="' + sTitle + '" ';
            }
            if(sTarget) {
                sContent += 'target="' + sTarget + '" ';
            }

            sContent += '>';
            if(sText) {
                sContent += sText;
            }
            sContent += '</a>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});