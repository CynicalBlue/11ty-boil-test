
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("user", function(realName, userName) {
    return `<div class="user">
  <div class="real_name">Made by: ${realName}   </div>
  <div class="user_name">Also known as: ${userName}</div>
</div>`;
  });
};