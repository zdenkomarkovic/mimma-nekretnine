/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.nekretninemimma.rs",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/studio', '/studio/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://www.nekretninemimma.rs/sitemap.xml',
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
  transform: async (config, path) => {
    // Prilagodi prioritete za različite stranice
    let priority = 0.7
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.startsWith('/nekretnine')) {
      priority = 0.9
      changefreq = 'daily'
    } else if (path === '/kontakt') {
      priority = 0.8
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
};
