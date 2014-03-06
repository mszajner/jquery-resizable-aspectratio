jQuery Resizable AspectRatio (callback)
=======================================

Simple extension for contextual aspect ratio for JQueryUI Resizable Widget. Extension checks if aspectRatio option is a function and then run it before start resizing to check if resize has to been done with locked or unlocked aspect ratio.

Usage
-----

	$('.target').resizable({
		aspectRatio: function (ev) {
			var target = $(ev.originalEvent.target);
			return target.hasClass('ui-resizable-se') || target.hasClass('ui-resizable-sw') 
				|| target.hasClass('ui-resizable-ne') || target.hasClass('ui-resizable-nw');
		}
	});

