const search_bar = document.querySelector('.search-bar');
const left_side = document.querySelector('.left-side');
const search_btn = document.querySelector('.main-click');
const search_bar_close = document.querySelector('.search-bar-close');


search_btn.addEventListener('click',displaySearchBar);
search_bar_close.addEventListener('click',hideSearchBar)

function displaySearchBar() {
    left_side.classList.add('hidden');
    search_bar.classList.remove('hidden');
}
function hideSearchBar() {
    search_bar.classList.add('hidden');
    left_side.classList.remove('hidden');
}