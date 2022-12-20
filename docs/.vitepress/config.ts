export default {
    description: 'Just playing around',
    themeConfig: {
        siteTitle: 'Jikan-ts',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/tutkli/jikan-ts' },
            { icon: {
                svg: `
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
                    <title>npm</title>
                    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
                </svg>
                `
                }, link: 'https://www.npmjs.com/package/@tutkli/jikan-ts' },
        ],
        nav: [
            { text: 'Guide', link: '/getting-started'},
        ],
        sidebar: [
            { text: 'Introduction', items: [
                    { text: 'Getting Started', link: '/getting-started' }
                ]
            },
            { text: 'Guides', items: [
                    { text: 'Client', link: 'guides/client' },
                    { text: 'Cache', link: '/guides/cache' },
                    { text: 'Logging', link: '/guides/logging' },
                ]
            },
            { text: 'Clients', items: [
                    { text: 'JikanClient', link: '/clients/jikan-client' },
                    { text: 'AnimeClient', link: '/clients/anime-client' },
                    { text: 'MangaClient', link: '/clients/manga-client' },
                    { text: 'TopClient', link: '/clients/top-client' },
                ]
            }
        ],
        footer: {
            message: 'Released under the <a href="https://github.com/tutkli/jikan-ts/blob/main/LICENSE">MIT License</a>.',
            copyright: '2023 © Jikan-ts by <a href="https://github.com/tutkli">Clara Castillo</a>'
        }
    }
}
