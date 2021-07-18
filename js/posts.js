
/**
 * Collection of blog posts. Requires the following keypaths:
 * - id
 * - date.display
 * - links ; which each: contain
 *      - decorator
 *      - text
 *      - url
 *          and optional keypaths:
 *      - attachment
 *          - supported types: url
 */
const interesting_posts = [{
    id: "7-18-2021",
    date: {
        display: "18 july 2021"
    },
    links: [{
        decorator: "→",
        text: "this is Microsoft's new 3D emoji. 1,800 emoji will be updated in Windows, Office, and other Microsoft products with a new visual style. Full details here:",
        attachment: {
            type: "url",
            url: "https://www.theverge.com/2021/7/15/22578352/microsoft-new-3d-emoji-clippy-windows-office"
        },
        url: "https://twitter.com/tomwarren/status/1415675187509432329"
    }, {
        decorator: "→",
        text: "Netflix is planning to add video games to its service in the next year and has hired Facebook’s VR games content head, and former head of mobile games at EA, to run its new gaming division.",
        attachment: {
            type: "url",
            url: "https://www.bloomberg.com/news/articles/2021-07-14/netflix-plans-to-offer-video-games-in-expansion-beyond-films-tv?sref=9hGJlFio"
        },
        url: "https://twitter.com/markgurman/status/1415434620775145477"
    }]
}];