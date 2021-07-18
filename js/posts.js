
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
            url: "https://www.bloomberg.com/news/articles/2021-07-14/netflix-plans-to-offer-video-games-in-expansion-beyond-films-tv"
        },
        url: "https://twitter.com/markgurman/status/1415434620775145477"
    }]
}, {
    id: "7-14-2021",
    date: {
        display: "14 july 2021"
    },
    links: [{
        decorator: "→",
        text: "Apple using VIPER internally? 🙀🐍",
        attachment: {
            type: "url",
            url: "https://twitter.com/collindonnell/status/1415052296002539525"
        },
        url: "https://twitter.com/steipete/status/1415277085589901312"
    }]
}, {
    id: "7-12-2021",
    date: {
        display: "12 july 2021"
    },
    links: [{
        decorator: "→",
        text: "no other company inspires me more than @mschf — yet again they have outdone themselves with",
        attachment: {
            type: "url",
            url: "https://deadstartuptoys.com"
        },
        url: "https://twitter.com/mikedemarais/status/1414699498115371014"
    }, {
        decorator: "→",
        text: "Geoff’s Adaptivity app has been great for quickly seeing and playing with what’s new with iOS versions each year. and it looks like he’s keeping it going with iOS 15 this year. Highly recommend trying it out!",
        attachment: {
            type: "url",
            url: "https://twitter.com/geoffhackworth/status/1414607873506750472"
        },
        url: "https://twitter.com/_chuckyc/status/1414740922093481986"
    }]
}];