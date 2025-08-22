export default function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
    },
  };
}
