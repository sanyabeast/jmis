"use strict";

require.config({
	paths : {
		"file" : "node_modules/requirejs-text/text"
	}
});

require(["jmis", "file!test.json"], function(JMIS, testJSON){
	window.JMIS = JMIS;
	console.log(JMIS.parse(testJSON));
});