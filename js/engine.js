/**
 * interesting // engine.js
 * Requires interactions.js to be available before importing.
 */

/**
 * Convert JSON into HTML element
 * @param {*} post Post JSON corresponding to posts.js structure
 * @returns HTML element from post JSON
 */
function renderPost(post) {
    // step 1: extract required data
    const id = post.id;
    const displayDate = post.date.display;

    // step 2: build elements and assign data
    const postElement = document.createElement("div");
    postElement.className = "blog-post";
    postElement.id = id;
    postElement.onclick = function () {
        permalinkClick(id);
    }
    
    const dateElement = document.createElement("div");
    dateElement.className = "blog-date";

    if (post.date.timestamp) {
        const parsedDate = new DateX(post.date.timestamp); //new Date(Date.parse(post.date.timestamp));
        const parsedDateString = parsedDate.format('j F Y').toLowerCase();
        
        // parsedDate.toLocaleDateString('default', {
        //     year: 'numeric', 
        //     month: 'long', 
        //     day: 'numeric'
        // }).toLowerCase();

        dateElement.textContent = parsedDateString;

        const parsedWeekdayString = parsedDate.format('l').toLowerCase();
        
        // parsedDate.toLocaleDateString('default', {
        //     weekday: 'long'
        // }).toLowerCase();

        const weekdayElement = document.createElement("div");
        weekdayElement.className = "blog-date-weekday";
        weekdayElement.textContent = parsedWeekdayString;
        dateElement.appendChild(weekdayElement);
    } else {
        dateElement.textContent = displayDate;
    }

    postElement.appendChild(dateElement);

    for (let link of post.links) {

        const linkDecorator = link.decorator;
        const linkBody = link.text;
        const linkURL = link.url;

        const linkElement = document.createElement("div");
        linkElement.className = "blog-link";
        postElement.appendChild(linkElement);

        const linkFlexElement = document.createElement("div");
        linkFlexElement.className = "blog-link-flex";
        linkElement.appendChild(linkFlexElement);

        const bulletElement = document.createElement("div");
        bulletElement.className = "blog-link-bullet";
        bulletElement.textContent = linkDecorator;
        linkFlexElement.appendChild(bulletElement);

        const bodyElement = document.createElement("div");
        bodyElement.className = "blog-link-left";
        bodyElement.textContent = linkBody;
        linkFlexElement.appendChild(bodyElement);

        const openElement = document.createElement("div");
        openElement.className = "blog-link-right";
        linkFlexElement.appendChild(openElement);

        const openLinkElement = document.createElement("a");
        openLinkElement.href = linkURL;
        openLinkElement.target = "_blank";
        openLinkElement.textContent = "↗ Open";
        openElement.appendChild(openLinkElement);

        // step 3: handle optional keypaths

        if (link.attachment) {
            if (link.attachment.type === "url") {
                const bodyURLElement = document.createElement("a");
                bodyURLElement.href = link.attachment.url;
                bodyURLElement.textContent = link.attachment.url;
                bodyURLElement.target = "_blank";
                bodyElement.appendChild(bodyURLElement);
            }
        }
    }

    return postElement;
}


/**
 * Convert JSON posts into container HTML element which holds a child for each post as per posts.js structure
 * @param {*} posts Posts JSON array
 * @returns HTML container element with children handled by -renderPost
 */
function render(posts) {
    // const postElements = posts.map(post => renderPost(post));
    const postContainer = document.createElement("div");
    postContainer.id = "blog";

    for (const post of posts) {
        const postEl = renderPost(post);
        postContainer.appendChild(postEl);
    }

    return postContainer;
}

window.addEventListener('load', function() {

    if (!interesting_posts) {
        // uh oh! posts.js is not properly imported
        console.error("posts.js not found and/or imported correctly. please check this in engine.js");
        return;
    }

    const existingBlog = document.getElementById("blog");
    if (existingBlog) {
        console.warn("engine.js found existing blog element; ideally this is a placeholder, removing now and replacing with js-generated result");
        existingBlog.parentElement.removeChild(existingBlog);
    }

    const blog = render(interesting_posts);

    const container = document.getElementById("container");
    container.appendChild(blog);

    /**
     * Tiny, easily debugged or optimized wrapper to generate a "last edited" hover text on the page title.
     */
    const buildLastEditedHoverTitle = function () {
        const lastEditedYear = "2021", lastEditedMonth = "07", lastEditedDay = "19";
        const lastEditedHour = "20", lastEditedMinute = "45";

        const lastEditedDateString = `${lastEditedYear}-${lastEditedMonth}-${lastEditedDay}T${lastEditedHour}:${lastEditedMinute}:00-04:00`;
        const lastEditedDate = new DateX(lastEditedDateString);
        const lastEditedFormattedString = lastEditedDate.format("h:iA m/d/y").toLowerCase();
        const titleHoverString = `last updated @ ${lastEditedFormattedString}`;
        return titleHoverString;
    }

    document.getElementById("title").setAttribute("title", buildLastEditedHoverTitle());
});
