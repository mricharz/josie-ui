Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Link', {
    meta: {
        text: 'string',
        href: 'string',
        name: 'string',
        target: 'string',
        title: 'string'
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sText = this.getText(),
                sHref =  this.getHref(),
                sName =  this.getName(),
                sTarget = this.getTarget(),
                sTitle = this.getTitle(),
                sContent = '<a';

            sContent += this.writeCssClasses();

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
            sContent += sText;
            sContent += '</a>';

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});