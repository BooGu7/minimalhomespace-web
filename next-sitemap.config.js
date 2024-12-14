/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://www.boospace.blog",
  generateRobotsTxt: true // (optional)
  // ...other options
};
