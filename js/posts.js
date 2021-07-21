
/**
 * Collection of blog posts. Requires the following keypaths:
 * - id
 * - date, which contain:
 *   required keypaths:
 *      - display
 *   optional keypaths:
 *      - timestamp
 * - links, which contain:
 *   required keypaths:
 *      - decorator
 *      - text
 *      - url
 *   optional keypaths:
 *      - attachment
 *          - supported types: url
 */
const interesting_posts = [{
    id: "7-21-2021",
    date: {
        display: "21 july 2021",
        timestamp: "2021-07-21T12:00:00+00:00"
    },
    links: [{
        decorator: "→",
        text: 
`Things to love about Clubhouse:  

✅ Wonderful people  
✅ Fascinating conversations  
✅ Backchannel 
❌ > ✅ Easy to join. 
        
After 16 never-boring months of building, we’re thrilled to share that Clubhouse is now out of beta, open to everyone, and ready to begin the next chapter!`,
        attachment: {
            type: "url",
            url: "https://twitter.com/Clubhouse/status/1417892500224626690/photo/1"
        },
        url: "https://twitter.com/Clubhouse/status/1417892500224626690"
    }, {
        decorator: "→",
        text: "@flargh I'm having trouble getting my head around this. Are you saying that  promulgated some sort of specification and/or set of requirements for a new technology, got people to invest time and resources supporting it, and then just let it die on the vine?",
        attachment: {
            type: "url",
            url: "https://twitter.com/flargh/status/1417892203704299527"
        },
        url: "https://twitter.com/siegel/status/1417894287132532741"
    }]
}, {
    id: "7-20-2021",
    date: {
        display: "20 july 2021",
        timestamp: "2021-07-20T12:00:00+00:00"
    },
    links: [{
        decorator: "→",
        text: 
`When @joshbuckley joined Product Hunt as CEO, he came in with some bold plans.
        
Now we get to talk about them publicly. 😊 

Product Hunt, meet Hyper:`,
        attachment: {
            type: "url",
            url: "https://www.producthunt.com/stories/product-hunt-meet-hyper"
        },
        url: "https://twitter.com/rrhoover/status/1417444301462773764"
    }, {
        decorator: "→",
        text: "A little preview of the tropical region you’ll be tasked with bringing back to life  🐠 @Free_Lives #terranil",
        attachment: {
            type: "url",
            url: "https://twitter.com/Terra_Nil/status/1417425975219007488/photo/1"
        },
        url: "https://twitter.com/Terra_Nil/status/1417425975219007488"
    }]
}, {
    id: "7-19-2021",
    date: {
        display: "19 july 2021",
        timestamp: "2021-07-19T12:00:00+00:00"
    },
    links: [{
        decorator: "→",
        text: "",
        attachment: {
            type: "url",
            url: "https://pic.twitter.com/fR4rDPd35f"
        },
        url: "https://twitter.com/LilNasX/status/1417143704117157889"
    }, {
        decorator: "→",
        text: "Privacy is a fundamental human right. At Apple, it’s also one of our core values.",
        attachment: {
            type: "url",
            url: "https://twitter.com/cherthedev/status/1415798144726671360"
        },
        url: "https://twitter.com/tapbot_paul/status/1415826128443424768"
    }]
}, {
    id: "7-18-2021",
    date: {
        display: "18 july 2021",
        timestamp: "2021-07-18T12:00:00+00:00"
    },
    links: [{
        decorator: "→",
        text: "Netflix is planning to add video games to its service in the next year and has hired Facebook’s VR games content head, and former head of mobile games at EA, to run its new gaming division.",
        attachment: {
            type: "url",
            url: "https://www.bloomberg.com/news/articles/2021-07-14/netflix-plans-to-offer-video-games-in-expansion-beyond-films-tv"
        },
        url: "https://twitter.com/markgurman/status/1415434620775145477"
    }, {
        decorator: "→",
        text: 
`Introducing Steam Deck: powerful, portable PC gaming starting at $399. Designed by Valve, powered by Steam. Shipping December 2021.

Learn more and reserve yours tomorrow. #SteamDeck`,
        attachment: {
            type: "url",
            url: "https://www.steamdeck.com/"
        },
        url: "https://twitter.com/Steam/status/1415718021469925378"
    }]
}, {
    id: "7-15-2021",
    date: {
        display: "15 july 2021",
        timestamp: "2021-07-15T12:00:00+00:00"
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
        text: 
`PS: if you’re curious, I asked*, and these were done by @studiotendril! 
        
*important cultural difference between Microsoft and Apple: Microsoft will gladly tell you who they hired to make the cool thing.`,
        attachment: {
            type: "url",
            url: "https://twitter.com/studiotendril"
        },
        url: "https://twitter.com/cabel/status/1415716203314642947"
    }]
}, {
    id: "7-14-2021",
    date: {
        display: "14 july 2021",
        timestamp: "2021-07-14T12:00:00+00:00"
    },
    links: [{
        decorator: "→",
        text: "Apple using VIPER internally? 🙀🐍",
        attachment: {
            type: "url",
            url: "https://twitter.com/collindonnell/status/1415052296002539525"
        },
        url: "https://twitter.com/steipete/status/1415277085589901312"
    }, {
        decorator: "→",
        text: "Windows in your browser? It's just for businesses right now, but Windows 365 is at the heart of Microsoft's next cloud push which is bound to extend to consumers in the future ",
        attachment: {
            type: "url",
            url: "https://www.theverge.com/2021/7/14/22575064/microsoft-windows-365-cloud-pc-launch-date-price-features"
        },
        url: "https://twitter.com/tomwarren/status/1415328853531271177"
    }]
}, {
    id: "7-12-2021",
    date: {
        display: "12 july 2021",
        timestamp: "2021-07-12T12:00:00+00:00"
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
}, {
    id: "7-10-2021",
    date: {
        display: "10 july 2021",
        timestamp: "2021-07-10T12:00:00+00:00"
    },
    links: [{
        decorator: "→",
        text: "Why is the mouse cursor slightly tilted and not straight? I like the second answer which is illustrated by this picture. ",
        attachment: {
            type: "url",
            url: "https://ux.stackexchange.com/questions/52336/why-is-the-mouse-cursor-slightly-tilted-and-not-straight"
        },
        url: "https://twitter.com/vponamariov/status/1413832466813628423"
    }, {
        decorator: "→",
        text: "boom towns! a list of the fastest growing towns in the united states",
        attachment: {
            type: "url",
            url: "http://boomtowns.app"
        },
        url: "https://twitter.com/swlkr/status/1413590035526422531"
    }]
}, {
    id: "7-9-2021",
    date: {
        display: "9 july 2021",
        timestamp: "2021-07-09T12:00:00+00:00"
    },
    links: [{
        decorator: "→",
        text: "I’m working on a reverse-social media app, where your own ideas and thoughts are presented to you in a social media feed. An app to enrich our information diet with our own private ideas, and allow us to play with them before going public. TestFlight available!",
        attachment: {
            type: "url",
            url: "http://thespellbook.app/"
        },
        url: "https://twitter.com/adam_blvck/status/1413546769099726853"
    }, {
        decorator: "→",
        text: "✨ Updated my collection of Marvel Cinematic Universe album art to contain released Phase 4 albums. Also cleaned up the art on a few others.",
        attachment: {
            type: "url",
            url: "http://louie.world/mediaart/marvel.html"
        },
        url: "https://twitter.com/Mantia/status/1413656347325865986"
    }, ]
}];