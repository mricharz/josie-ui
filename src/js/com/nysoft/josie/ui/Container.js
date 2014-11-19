Josie.require('com.nysoft.josie.core.Control');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Container', {
    meta: {
        fluid: { type: 'boolean', defaultValue: false },
        content: 'object'
    },

    _renderControl: function() {
        this._super('_renderControl', arguments);
    },

    setFluid: function(bFluid) {
        if(typeof bFluid == 'boolean') {
            this.setProperty('fluid', bFluid);
            this.getDom().removeClass('container-fluid');
            this.getDom().removeClass('container');
            if(bFluid) {
                this.getDom().addClass('container-fluid');
            } else {
                this.getDom().addClass('container');
            }
        }
    },

    setContent: function(aObjects) {
        if(typeof aObjects == 'object') {
            var dom = this.getDom();
            if(aObjects.length > 0) {
                Josie.utils.each(aObjects, function(oObject) {
                    dom.append(oObject.getDom());
                    oObject.invalidate();
                });
            } else {
                dom.append(aObjects.getDom());
                aObjects.invalidate();
            }
        }
    }
});