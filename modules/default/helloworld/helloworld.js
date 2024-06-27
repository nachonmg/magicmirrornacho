Module.register("helloworld", {
	// Default module config.
	defaults: {
		text: "Test 2"
	},

	getTemplate () {
		return "helloworld.njk";
	},

	getTemplateData () {
		return this.config;
	}
});
