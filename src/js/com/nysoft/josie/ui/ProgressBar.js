Josie.require('com.nysoft.josie.core.Control');
Josie.require('com.nysoft.josie.ui.ProgressBar.Type');

com.nysoft.josie.core.Control.extend('com.nysoft.josie.ui.ProgressBar', {
    meta: {
        value: { type: 'number' , defaultValue: 0 },
        min: { type: 'number' , defaultValue: 0 },
        max: { type: 'number' , defaultValue: 100 },
        decimals: { type: 'number', defaultValue: 0 },
        type: { type: 'string', defaultValue: com.nysoft.josie.ui.ProgressBar.Type.Default },
        striped: { type: 'boolean', defaultValue: false },
        animate: { type: 'boolean', defaultValue: false },
        withLabel: { type: 'boolean', defaultValue: true }
    },

    _renderControl: function() {
        if(this.getDom()) {
            var sType = this.getType(),
                bWithLabel = this.getWithLabel(),
                bStriped = this.getStriped(),
                bAnimate = this.getAnimate(),
                iDecimals = this.getDecimals(),
                iValue = this.getValue(),
                iMin = this.getMin(),
                iMax = this.getMax(),
                iPercentage = (iValue-iMin)*(100/(iMax-iMin)),
                iPowDecimals = Math.pow(10, iDecimals);
                iRoundedPercentage = Josie.utils.round(iPercentage*iPowDecimals)/iPowDecimals,
                sContent = '<div';

            this.addCssClass('progress');
            sContent += this.writeCssClasses();
            sContent += '>';

            sContent += '<div role="progressbar" ';
            this.addCssClass('progress-bar');
            if(sType) {
                this.addCssClass('progress-bar-'+sType);
            }
            if(bStriped) {
                this.addCssClass('progress-bar-striped');
            }
            if(bAnimate) {
                this.addCssClass('active');
            }
            sContent += this.writeCssClasses();
            sContent += 'aria-valuenow="'+iValue+'" ';
            sContent += 'aria-valuemin="'+iMin+'" ';
            sContent += 'aria-valuemax="'+iMax+'" ';
            sContent += 'style="width: '+iRoundedPercentage+'%;" ';
            sContent += '>';

            if(bWithLabel) {
                sContent += iRoundedPercentage + '%';
            }

            sContent += '</div>';
            this.replaceDom(sContent);
        }
        this._super('_renderControl', arguments);
    }

});