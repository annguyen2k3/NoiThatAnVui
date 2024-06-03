const img_show = $(".pro-img-show");
const list_img = $$(".pro-item-img");

list_img.forEach((item) => {
    item.addEventListener("click", () => {
        list_img.forEach((img) => {
            img.classList.remove("show");
        });

        item.classList.add("show");

        const bgImg = item.style.backgroundImage;
        img_show.style.backgroundImage = bgImg;
    });
});

const btn_direc_back = $(".pro-img-show-direc .back");
const btn_direc_next = $(".pro-img-show-direc .next");

btn_direc_back.addEventListener("click", () => {
    for (let i = 0; i < list_img.length; i++) {
        if (list_img[i].classList.contains("show")) {
            list_img[i].classList.remove("show");

            let indexShow;
            if (i - 1 < 0) indexShow = list_img.length - 1;
            else indexShow = i - 1;
            list_img[indexShow].classList.add("show");

            const bgImg = list_img[indexShow].style.backgroundImage;
            img_show.style.backgroundImage = bgImg;
            break;
        }
    }
});

btn_direc_next.addEventListener("click", () => {
    for (let i = 0; i < list_img.length; i++) {
        if (list_img[i].classList.contains("show")) {
            list_img[i].classList.remove("show");

            let indexShow;
            if (i + 1 >= list_img.length) indexShow = 0;
            else indexShow = i + 1;
            list_img[indexShow].classList.add("show");

            const bgImg = list_img[indexShow].style.backgroundImage;
            img_show.style.backgroundImage = bgImg;
            break;
        }
    }
});
