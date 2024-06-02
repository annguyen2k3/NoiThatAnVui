const btn_readmore = $(".pro-desc .btn-read-more");
const textContent = $(".pro-desc-content");
const proDesc = $(".pro-desc");

let readmore = false;

btn_readmore.addEventListener("click", () => {
    readmore = !readmore;
    proDesc.classList.toggle("show");
    if (readmore) {
        textContent.style.height = `${textContent.scrollHeight}px`;
        $(".pro-decs-opacity").style.display = "none";
        btn_readmore.textContent = "Thu gọn";
    } else {
        textContent.style.height = `75px`;
        $(".pro-decs-opacity").style.display = "block";
        btn_readmore.textContent = "Xem thêm";
    }
});
