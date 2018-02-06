(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(true);
    } else {
        var JMIS = factory();
        window.JMIS = JMIS;
    }
}(this, function(){

	var JMIS = function(){

	};

	JMIS.prototype = {
		__superTrim : function(input){
			if (typeof input == "number"){
				input = input.toString();
			}

			input = input.replace(/\s\s+/g, "");
			input = input.replace(/(\r\n|\n|\r)/gm,"");
			input = input.trim();
			return input;
		},
		__doubleQuote : function(data){
			var result = data;
			result = result.replace(/\'/g, '"');
			return result;
		},
		__removeTrailingCommas : function(data){
			var result = data;
			result = result.replace(/,+}/g, "}");
			result = result.replace(/,+]/g, "]");
			return result;
		},
		__normalizeJSON : function(data){
			var result = data;

			result = this.__removeComments(result);
			result = this.__superTrim(result);
			result = this.__doubleQuote(result);
			result = this.__removeTrailingCommas(result);

			console.log(result);
			return result;
		},
		__removeComments : function(data){
			var result = data;
			result = result.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, "");
			return result;
		},
		parse : function(data){
			return JSON.parse(this.__normalizeJSON(data));
		},
		stringify : function(data){

		}
	};

	return new JMIS();

}));