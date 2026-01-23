export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: 'https://www.moncoachinformaclique.fr/sitemap.xml',
        host: 'https://www.moncoachinformaclique.fr',
    }
}
