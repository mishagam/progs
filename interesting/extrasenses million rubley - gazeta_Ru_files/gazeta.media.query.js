function GazetaMediaQuery () {
	if (GazetaMediaQuery.__instance) {
		return GazetaMediaQuery.__instance; 
	} else if (this === window) {
		return new GazetaMediaQuery();
	}
	GazetaMediaQuery.__instance = this;	
	
	var self = this;
	
	var mql = window.matchMedia("screen and (max-width: 1260px)"); 
	
	this.matches = [];
	this.unmatches = [];
	
	this.match_listener = function () {
		if (mql.matches) {
			for ( var i in self.matches ) {
				self.matches[i]();
			}
		} else {
			for ( var i in self.unmatches ) {
				self.unmatches[i]();
			}
		}
	}
	mql.addListener( this.match_listener );
	
	this.state = function () {
		return mql.matches ? 'small' : 'large';
	}
	
	this.triggerHandler = function () { this.match_listener () };
	
	this.register = function ( arg1, arg2 ) {
		if ( $.isPlainObject( arg1 ) ) {
			this.registerMatch ( arg1.match );
			this.registerSmall ( arg1.small );
			this.registerUnMatch ( arg1.unmatch );
			this.registerLarge ( arg1.large );
		} else if ( $.isArray ( arg1 ) || $.isFunction ( arg1 ) ) {
			this.registerMatch ( arg1 );
			if ( $.isArray ( arg2 ) || $.isFunction ( arg2 ) ) {
				this.registerUnMatch ( arg2 );
			}
		} 
	}
	
	this.registerSmall = this.registerMatch = function ( arg ) {
		if ( $.isArray ( arg ) ) {
			for (var i in arg) {
				if ( $.isFunction( arg[i] ) ) {
					this.matches.push ( arg[i] );
				}
			}
		} else {
			for(var i=0; i<arguments.length; i++) {
				if ( $.isFunction( arguments[i] ) ) {
					this.matches.push ( arguments[i] );
				}
			}
		}
	}
	
	this.registerLarge = this.registerUnMatch = function ( arg ) {
		if ( $.isArray ( arg ) ) {
			for (var i in arg) {
				if ( $.isFunction( arg[i] ) ) {
					this.unmatches.push ( arg[i] );
				}
			}
		} else {
			for(var i=0; i<arguments.length; i++) {
				if ( $.isFunction( arguments[i] ) ) {
					this.unmatches.push ( arguments[i] );
				}
			}
		}
	}
}