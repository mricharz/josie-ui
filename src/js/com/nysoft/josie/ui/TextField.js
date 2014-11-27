Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.TextField.Type');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.TextField', {
    meta: {
        type: { type: 'string', defaultValue: com.nysoft.josie.ui.TextField.Type.Text },
        label: 'string',
        placeholder: 'string',
        disabled: { type: 'boolean', defaultValue: false },
        name: { type: 'string', defaultValue: '' }
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sId = this.getId(),
                sLabel = this.getLabel(),
                bDisabled = this.getDisabled(),
                sType = this.getType(),
                sPlaceholder =  this.getPlaceholder(),
                sName = this.getName(),
                sContent = '';

            if(sLabel) {
                sContent += '<div class="form-group">';
                sContent += '<label for="'+sId+'-input" class="col-sm-2 control-label">'+sLabel+'</label>';
                sContent += '<div class="col-sm-10">';
            }

            sContent += '<input';

            if(sLabel) {
                sContent += ' id="'+sId+'-input"';
            }

            if(sType != com.nysoft.josie.ui.TextField.Type.File || sLabel) {
                this.addCssClass('form-control');
            }
            sContent += this.writeCssClasses();
            sContent += this.writeCssStyles();

            sContent += 'type="'+sType+'" ';
            if(sName) {
                sContent += 'name="' + sName + '" ';
            }
            if(sType != com.nysoft.josie.ui.TextField.Type.File) {
                if (sPlaceholder) {
                    sContent += 'placeholder="' + sPlaceholder + '" ';
                }
            }
            if(bDisabled) {
                sContent += 'disabled="disabled"';
            }

            sContent += '/>';

            if(sLabel) {
                sContent += '</div>';
                sContent += '</div>';
            }

            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});