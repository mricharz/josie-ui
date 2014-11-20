Josie.require('com.nysoft.josie.ui.Link');

com.nysoft.josie.ui.Link.extend('com.nysoft.josie.ui.NavigationLink', {

    meta: {
        disabled: { type: 'boolean', defaultValue: false }
    },

    _renderControl: function() {
        this._super('_renderControl', arguments);
        if(this.getDom()) {
            var sContent = '<li';
            if(this.getDisabled()) {
                sContent += ' class="disabled"';
            }
            sContent += '></li>';
            this.getDom().wrap(sContent);
        }

    }

});