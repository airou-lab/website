module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("publications");
    // Return your Object options:
    return {
        htmlTemplateEngine: "njk"
    }
};