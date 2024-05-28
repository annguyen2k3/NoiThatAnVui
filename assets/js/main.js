const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// TODO Navbar

const btn_sticky = $(".btn-sticky");
btn_sticky.addEventListener("click", () => {
    $("#navbar .content").classList.toggle("show");
});

const btn_Category = $(".nav-category");
btn_Category.addEventListener("click", () => {
    $(".subnav-category").classList.toggle("show");
});
