Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.ButtonGroup', {

    meta: {
        content: 'object',
        vertical: { type: 'boolean', defaultValue: false },
        toolbar: { type: 'boolean', defaultValue: false },
        justified: { type: 'boolean', defaultValue: false }
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sGroupClass = 'btn-';
                sContent = '<div';

            if(this.getToolbar()) {
                sGroupClass += 'toolbar';
            } else {
                sGroupClass += 'group';
            }
            if(this.getVertical()) {
                sGroupClass += '-vertical';
            }
            this.addCssClass(sGroupClass);

            if(this.getJustified()) {
                this.addCssClass('btn-group-justified');
            }
            sContent += this.writeCssClasses();

            sContent += 'role="group"';
            sContent += '></div>';
            this.replaceDom(sContent);
            this._renderContent();
        }
        this._super('_renderControl', arguments);
    },

    _renderContent: function() {
        var aObjects = this.getContent();
        if(typeof aObjects == 'object') {
            var dom = this.getDom();
            if(aObjects.length > 0) {
                Josie.utils.each(aObjects, function(oObject) {
                    dom.append(oObject.getDom());
                    oObject._renderControl();
                });
            } else {
                dom.append(aObjects.getDom());
                aObjects._renderControl();
            }
        }
    }

});