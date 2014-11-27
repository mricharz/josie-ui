Josie.require('com.nysoft.josie.ui.Container');
Josie.require('com.nysoft.josie.ui.Button');

com.nysoft.josie.ui.Container.extend('com.nysoft.josie.ui.Shell', {
	meta: {
		content: 'string',
		leftContent: 'string',
		rightContent: 'string',
		menubarHeight: 'number'
	},
	
	init: function() {
		//update size of shell
		this.bindEvent('onAfterRenderer', function() {
			this._updateSize();
			//this._updateSize(); //TODO: Call it twice to get the right size! Don't know yet why!!! Not time to analyse this shit!
			window.addEventListener("orientatiolayouting with nchange", jQuery.proxy(this._updateSize, this));
			window.addEventListener("resize", jQuery.proxy(this._updateSize, this));
		});
		
		this.sidebarWidth = 300;
		if(Josie.device.mobile) {
			this.sidebarWidth = 150;
		}
		
		(!this.getMenubarHeight()) && this.setMenubarHeight(42);
	},
	
	_renderControl: function() {
        Josie.log.trace('Shell::renderControl');
		if(this.getDom()) {
			this.getDom().addClass('shell');
			this.mainbar = jQuery(
				'<div class="bar">' +
					'<div class="left-container" />' +
					'<div class="right-container" />' +
				'</div>'
			);
			this.mainbar.css('height', this.getMenubarHeight());
			this.leftBtnContainer = this.mainbar.children('.left-container');
			this.rightBtnContainer = this.mainbar.children('.right-container');
			
			//add default buttons
			this.addLeftButton(new com.nysoft.josie.ui.Button(null, {
				icon: 'img/icon/Settings.png',
				click: jQuery.proxy(function() {
					this.triggerLeftSidebar();
				}, this)
			}));
			this.addLeftButton(new com.nysoft.josie.ui.Button(null, {
				icon: 'img/icon/Home.png',
				click: jQuery.proxy(function() {
					this.goHome();
				}, this)
			}));
			this.addRightButton(new com.nysoft.josie.ui.Button(null, {
				icon: 'img/icon/Chat.png',
				click: jQuery.proxy(function() {
					this.triggerRightSidebar();
				}, this)
			}));
			
			
			this.leftSidebar = jQuery('<div class="sidebar left" />');
			this.rightSidebar = jQuery('<div class="sidebar right" />');
			this.contentContainer = jQuery('<div class="content" />');
			this.getDom().append(this.mainbar);
			this.getDom().append(this.contentContainer);
			this.getDom().append(this.leftSidebar);
			this.getDom().append(this.rightSidebar);
		}
	},
	
	addLeftButton: function(button) {
		button.attachTo(this.leftBtnContainer);
	},
	
	addRightButton: function(button) {
		button.attachTo(this.rightBtnContainer);
	},
	
	setContent: function(object) {
		if(typeof object == 'string') {
			this.setProperty('content', object);
			if(this.contentContainer) {
				this.contentContainer.html(object).children('[data-class]').generateObject();	
			}
		}
	},
	
	setLeftContent: function(object) {
		if(typeof object == 'string') {
			this.setProperty('leftContent', object);
			if(this.leftSidebar) {
				this.leftSidebar.html(object).children('[data-class]').generateObject();	
			}
		}
	},
	
	setRightContent: function(object) {
		if(typeof object == 'string') {
			this.setProperty('rightContent', object);
			if(this.rightSidebar) {
				this.rightSidebar.html(object).children('[data-class]').generateObject();	
			}
		}
	},
	
	openLeftSidebar: function() {
		this.leftSidebar.stop(true, true).animate({'width': this.sidebarWidth}, {duration: 500, queue: false});
		var contentWidth = this.contentContainer.outerWidth();
		this.contentContainer.animate({'width': contentWidth-this.sidebarWidth, 'margin-left': this.sidebarWidth}, {duration: 500, queue: false});
	},
	
	closeLeftSidebar: function() {
		var contentWidth = this.contentContainer.outerWidth();
		this.contentContainer.animate({'width': contentWidth+this.sidebarWidth, 'margin-left': 0}, {duration: 500, queue: false});
		this.leftSidebar.stop(true, true).animate({'width': 0}, {duration: 500, queue: false});
	},
	
	triggerLeftSidebar: function() {
		if(this.leftSidebar.stop(true, true).css('width') == '0px') {
			this.openLeftSidebar();
		} else {
			this.closeLeftSidebar();
		}
	},
	
	openRightSidebar: function() {
		var contentWidth = this.contentContainer.outerWidth();
		this.contentContainer.animate({'width': contentWidth-this.sidebarWidth, 'margin-right': this.sidebarWidth}, {duration: 500, queue: false});
		this.rightSidebar.stop(true, true).animate({'width': this.sidebarWidth}, {duration: 500, queue: false});
	},
	
	closeRightSidebar: function() {
		this.rightSidebar.stop(true, true).animate({'width': 0, 'margin-right': 0}, {duration: 500, queue: false});
		var contentWidth = this.contentContainer.outerWidth();
		this.contentContainer.animate({'width': contentWidth+this.sidebarWidth}, {duration: 500, queue: false});
	},
	
	triggerRightSidebar: function() {
		if(this.rightSidebar.stop(true, true).css('width') == '0px') {
			this.openRightSidebar();
		} else {
			this.closeRightSidebar();
		}
	},
	
	_updateSize: function() {
        Josie.log.trace('Shell::updateSize');
		var parent = this.getDom().parent();
		if(parent && parent.get(0) && parent.get(0).nodeName.toLowerCase() == 'body') {
			parent = jQuery(window);
		}
		var innerHeight = parent.height(), innerWidth = parent.width();
		this.getDom().css('width', innerWidth);
		this.getDom().css('height', innerHeight);
		this.contentContainer.css('width', innerWidth);
		var sidebarHeight = innerHeight-this.getMenubarHeight();
		this.contentContainer.css('height', sidebarHeight);
		this.leftSidebar.css('height', sidebarHeight);
		this.rightSidebar.css('height', sidebarHeight);
	}

});