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
    const decorator = post.body.decorator;
    const postBody = post.body.text;
    const postURL = post.body.url;

    // step 2: build elements and assign data
    const postElement = document.createElement("div");
    postElement.className = "blog-post";
    postElement.id = id;
    postElement.onclick = permalinkClick(id);
    
    const dateElement = document.createElement("div");
    dateElement.className = "blog-date";
    dateElement.textContent = displayDate;
    postElement.appendChild(dateElement);

    const linkElement = document.createElement("div");
    linkElement.className = "blog-link";
    postElement.appendChild(linkElement);

    const linkFlexElement = document.createElement("div");
    linkFlexElement.className = "blog-link-flex";
    linkElement.appendChild(linkFlexElement);

    const bulletElement = document.createElement("div");
    bulletElement.className = "blog-link-bullet";
    bulletElement.textContent = decorator;
    linkFlexElement.appendChild(bulletElement);

    const bodyElement = document.createElement("div");
    bodyElement.className = "blog-link-left";
    bodyElement.textContent = postBody;
    linkFlexElement.appendChild(bodyElement);

    const openElement = document.createElement("div");
    openElement.className = "blog-link-right";
    linkFlexElement.appendChild(openElement);

    const openLinkElement = document.createElement("a");
    openLinkElement.href = postURL;
    openLinkElement.target = "_blank";
    openLinkElement.textContent = "↗ Open";
    openElement.appendChild(openLinkElement);

    // step 3: handle optional keypaths

    if (post.body.attachment) {
        if (post.body.attachment.type === "url") {
            const bodyURLElement = document.createElement("a");
            bodyURLElement.href = post.body.attachment.url;
            bodyURLElement.textContent = post.body.attachment.url;
            bodyURLElement.target = "_blank";
            bodyElement.appendChild(bodyURLElement);
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

});
