const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addFilter("textPreview", function (value) {
        return value.split(' ').slice(0, 30).join(' ');
    })

    // Return your Object options:
    return {
        dir: {
            input: "src"
        },
        htmlTemplateEngine: "njk"
    }
};