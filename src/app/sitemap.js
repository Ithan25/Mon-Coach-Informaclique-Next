export default function sitemap() {
    return [
        {
            url: 'https://www.moncoachinformaclique.fr',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://www.moncoachinformaclique.fr/#services',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.moncoachinformaclique.fr/#pack-vitrine',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.moncoachinformaclique.fr/#contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ]
}
