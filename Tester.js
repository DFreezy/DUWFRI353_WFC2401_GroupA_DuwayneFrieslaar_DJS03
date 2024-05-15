import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';

const createElement = (tag, attributes, innerHTML) => {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    element.innerHTML = innerHTML;
    return element;
};

const renderOptions = (tag, attributes, innerHTML) => {
const fragment = document.createDocumentfragment();
fragment.appendChild(createElement("option", {value: "any"}, defaultValue));
Object.entries(data).forEach(([id, name]) => fragment.appendChild(createElement("option", {value: id}, name)));
document.querySelector(selector).appendChild(fragment);
}

const renderBooks = (matches, limit) => {
    const fragment = document.createDocumentFragment();
    matches.slice(0, limit).forEach(({ author, id, image, title }) => {
        const element = createElement("button", {class: "preview", "data-preview": id},
        `<img class="preview__image" src="${image}" />
        <div class="preview__info">
          <h3 class="preview__title">${title}</h3>
          <div class="preview__author">${authors[author]}</div>
        </div>
      `);
      fragment.appendChild(element);
    })
    document.querySelector("[data-list-items]").appendChild(fragment);
}
renderBooks(books, BOOKS_PER_PAGE);
renderOptions(genres, "[data_search_genres]", "All genres");
renderOptions(authors, "[data_search_authors]", "All authors");

const handleCancel = (selector) => () => {
    document.querySelector(selector).open = false
}

