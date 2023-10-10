const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addFilter("textPreview", function (value) {
        return value.split(' ').slice(0, 30).join(' ');
    })

    // Return your Object options:
    return {
        input: "pages",
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    }
};