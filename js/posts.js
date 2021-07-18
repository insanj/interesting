
/**
 * Collection of blog posts. Requires the following keypaths:
 * - id
 * - date.display
 * - body.decorator
 * - body.text
 * - body.url
 * 
 * And optional keypaths:
 * - post.body.attachment
 *      - supported types: url
 */
const interesting_posts = [
    {
        id: "7-18-2021",
        date: {
            display: "18 july 2021"
        },
        body: {
            decorator: "→",
            text: "this is Microsoft's new 3D emoji. 1,800 emoji will be updated in Windows, Office, and other Microsoft products with a new visual style. Full details here:",
            attachment: {
                type: "url",
                url: "https://www.theverge.com/2021/7/15/22578352/microsoft-new-3d-emoji-clippy-windows-office"
            },
            url: "https://twitter.com/tomwarren/status/1415675187509432329"
        }
    }
];