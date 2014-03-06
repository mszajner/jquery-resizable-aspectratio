/*!
 * jQuery Resizable Aspect Ratio
 * 
 * Copyright (c) 2013 Miroslaw Szajner <mszajner@rexoft.pl>
 * Version: 1.0-alpha1
 * 
 * Dual licensed under the MIT license.
 * 
 * Requires: jQuery 1.7.1 or later
 *           jQueryUI 1.10 or later
 */

(function($) {
	
	// Add live AspectRatio getting for resizable
	$(function() {
		$.extend($.ui.resizable.prototype, (function (orig) {
		    return {
		        _mouseStart: function (event) {
		            this._aspectRatio = (typeof (this.options.aspectRatio) == 'function') ? this.options.aspectRatio.call(this, event) : !!(this.options.aspectRatio);
		            return (orig.call(this, event));
		        }
		    };
		})($.ui.resizable.prototype["_mouseStart"]));
	});
	
})(jQuery);