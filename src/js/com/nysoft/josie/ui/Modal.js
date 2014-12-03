Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.Modal.Size');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.Modal', {
    meta: {
        header: { type: 'object[]', defaultValue: [] },
        footer: { type: 'object[]', defaultValue: [] },
        fade: { type: 'boolean', defaultValue: true },
        size: { type: 'string', defaultValue: com.nysoft.josie.ui.Modal.Size.Default }
    },

    _renderControl: function() {
        if(this.getDom()) {
            this.replaceDom(this._renderModal());
            this.jqModalHeader = this.getDom().find('.modal-header');
            this.jqModalContent = this.getDom().find('.modal-body');
            this.jqModalFooter = this.getDom().find('.modal-footer');
            this.getDom().on('show.bs.modal', jQuery.proxy(function(){
                this.trigger('onOpen');
            }, this));
            this.getDom().on('shown.bs.modal', jQuery.proxy(function(){
                this._opened = true;
                this.trigger('onOpened');
            }, this));
            this.getDom().on('hide.bs.modal', jQuery.proxy(function(){
                this.trigger('onClose');
            }, this));
            this.getDom().on('hidden.bs.modal', jQuery.proxy(function(){
                this._opened = false;
                this.trigger('onClosed');
            }, this));

            this._renderHeader();
            this._renderFooter();
        }
        this._super('_renderControl', arguments);
    },

    open: function() {
        this.getDom().modal('show');
    },

    close: function() {
        this.getDom().modal('hide');
    },

    toggle: function() {
        this.getDom().modal('toggle');
    },

    isOpen: function() {
        return this._opened;
    },

    _renderModal: function() {
        var aContent = this.getContent(),
            aHeader = this.getHeader(),
            aFooter = this.getFooter(),
            bFade = this.getFade(),
            sSize = this.getSize(),
            sId = this.getId(),
            sContent = '<div';

        //modal-div
        this.addCssClass('modal');
        if(bFade) {
            this.addCssClass('fade');
        }
        sContent += this.writeCssClasses();
        sContent += this.writeCssStyles();
        sContent += 'role="dialog" ';
        sContent += 'aria-hidden="true" ';
        sContent += 'id="'+sId+'"';
        sContent += '>';

        //modal-dialog-div
        sContent += '<div';
        this.addCssClass('modal-dialog');
        if(sSize) {
            this.addCssClass('modal-'+sSize);
        }
        sContent += this.writeCssClasses();
        sContent += '>';

        //modal-content-div
        sContent += '<div';
        this.addCssClass('modal-content');
        sContent += this.writeCssClasses();
        sContent += '>';

        //header
        if(aHeader && aHeader.length) {
            sContent += '<div';
            this.addCssClass('modal-header');
            sContent += this.writeCssClasses();
            sContent += '></div>';
        }

        //content
        if(aContent && aContent.length) {
            sContent += '<div';
            this.addCssClass('modal-body');
            sContent += this.writeCssClasses();
            sContent += '></div>';
        }

        //footer
        if(aFooter && aFooter.length) {
            sContent += '<div';
            this.addCssClass('modal-footer');
            sContent += this.writeCssClasses();
            sContent += '></div>';
        }

        sContent += '</div>'; //end modal-content-div
        sContent += '</div>'; //end modal-dialog-div
        sContent += '</div>'; //end modal-div

        return sContent;
    },

    _renderHeader: function() {
        var aObjects = this.getHeader();
        if(typeof aObjects == 'object' && aObjects) {
            if(aObjects.length > 0) {
                var t = this;
                Josie.utils.each(aObjects, function(oObject) {
                    t._renderHeaderItem(oObject);
                });
            } else {
                this._renderHeaderItem(aObjects);
            }
        }
    },

    _renderHeaderItem: function(oItem) {
        if(oItem instanceof com.nysoft.josie.core.Control) {
            this.jqModalHeader.append(oItem.getDom());
            oItem.invalidate();
        }
    },

    //overwrites core.Control::_renderContent
    _renderContent: function() {
        var aObjects = this.getContent();
        if(typeof aObjects == 'object' && aObjects) {
            if(aObjects.length > 0) {
                var t = this;
                Josie.utils.each(aObjects, function(oObject) {
                    t._renderContentItem(oObject);
                });
            } else {
                this._renderContentItem(aObjects);
            }
        }
    },

    _renderContentItem: function(oItem) {
        if(oItem instanceof com.nysoft.josie.core.Control) {
            this.jqModalContent.append(oItem.getDom());
            oItem.invalidate();
        }
    },

    _renderFooter: function() {
        var aObjects = this.getFooter();
        if(typeof aObjects == 'object' && aObjects) {
            if(aObjects.length > 0) {
                var t = this;
                Josie.utils.each(aObjects, function(oObject) {
                    t._renderFooterItem(oObject);
                });
            } else {
                this._renderFooterItem(aObjects);
            }
        }
    },

    _renderFooterItem: function(oItem) {
        if(oItem instanceof com.nysoft.josie.core.Control) {
            this.jqModalFooter.append(oItem.getDom());
            oItem.invalidate();
        }
    }

});