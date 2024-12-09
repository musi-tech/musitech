const Sitemap = require('react-router-sitemap').default;
const router = require('./src/routes'); // Adjust to your routes file

function generateSitemap() {
    return new Sitemap(router)
        .build('https://www.musitech.in') // Your website's base URL
        .save('./public/sitemap.xml');   // Save in the `public` folder
}

generateSitemap();
