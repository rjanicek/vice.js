mergeInto(LibraryManager.library, {
	vice_blocking_delay: function(delayMS) {
		var target = new Date().getTime() + delayMS;
		while (new Date() < target);
	}
});