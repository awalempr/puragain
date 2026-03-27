/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://puragainwaterfiltration.com",
  generateRobotsTxt: false, // We already have a manual robots.txt
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  transform: async (config, path) => {
    // Custom priority per page
    const priorities = {
      "/": 1.0,
      "/products/reverse-osmosis": 0.9,
      "/products/alkaline": 0.9,
      "/products/whole-house": 0.9,
      "/reviews": 0.8,
      "/contact": 0.8,
      "/privacy": 0.3,
      "/terms": 0.3,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
