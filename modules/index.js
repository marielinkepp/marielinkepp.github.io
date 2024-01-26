import {navigateTo} from "./common.js";

selectContent();

function selectContent() {
    const pageId = new URLSearchParams(window.location.search)
        .get('page') || 'index';

    const itemId = new URLSearchParams(window.location.search).get('id');

    console.log(pageId);
    console.log(itemId);

    applyTemplate(pageId);
    navigateTo('?page=' + pageId);

}