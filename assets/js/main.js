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

// TODO Banner

const banner = $(".banner");
const banner_imgs = $$(".banner-img");
const dots = $$(".dots .dot");
const banner_width = banner_imgs[0].offsetWidth;
let index = 0;

for (let i = 0; i < banner_imgs.length; i++) {
    banner_imgs[i].style.height = `${banner_width * 0.35}px`;
}

let SlideShow = () => {
    index++;
    if (index == banner_imgs.length) index = 0;
    $(".dot.active").classList.remove("active");
    banner.style.transform = `translateX(${banner_width * -1 * index}px)`;
    $(".dot-" + index).classList.add("active");
};

let handleSlideShow = setInterval(SlideShow, 3000);

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        clearInterval(handleSlideShow);
        index = i - 1;
        SlideShow();
        handleSlideShow = setInterval(SlideShow, 3000);
    });
}

// TODO PRODUCT DIRECT
const direc_nexts = $$(".list-product-wrap .direc-next");
const direc_backs = $$(".list-product-wrap .direc-back");

let indices = {
    hot: 0,
    cf: 0,
    nh: 0,
    sf: 0,
    vp: 0,
    du: 0,
    xd: 0,
};

direc_nexts.forEach((button) => {
    button.addEventListener("click", (event) => {
        const listType = event.currentTarget.getAttribute("data-list");

        indices[listType]++;

        handelSlideClick(listType);
    });
});

direc_backs.forEach((button) => {
    button.addEventListener("click", (event) => {
        const listType = event.currentTarget.getAttribute("data-list");

        indices[listType]--;

        handelSlideClick(listType);
    });
});

function handelSlideClick(listType) {
    const container = $(`.container[data-list="${listType}"]`);
    const widthTranslate = $(".product-item-wrap").offsetWidth;
    const numItem = container.querySelectorAll(" .product-item-wrap").length;

    if (indices[listType] > numItem - 5) {
        indices[listType] = 0;
    }

    if (indices[listType] < 0) {
        indices[listType] = numItem - 5;
    }

    container.style.transform = `translateX(${
        (widthTranslate + 8) * -1 * indices[listType]
    }px)`;
}
