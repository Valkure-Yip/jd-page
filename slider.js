function slider (){
    var screen = $(".main-slider");
    var imgUl = $(".main-slider .slider-img");
    var pgUl = $(".main-slider .slider-pagenum");
    var imgWidth = screen[0].offsetWidth;

    // deep copy: clone()
    var ulNewLi = imgUl.children()[0].cloneNode(true);
    imgUl.append(ulNewLi);
    for (let i = 0; i < imgUl.children().length-1; i++) {
        pgUl.append("<li></li>");
    }
    var pgUlLi = pgUl.children();
    pgUlLi[0].className = "current";
    // toggle slider img when mouse over page list
    for (let i = 0; i < pgUl.children().length; i++) {
        pgUlLi[i].index = i;
        pgUlLi[i].onmouseover = function(){
            key = this.index;
            for (let j = 0; j < pgUlLi.length; j++) {
                pgUlLi[j].className = "";
            }
            this.className = "current";
            animate(imgUl[0], -this.index * imgWidth);
        };
    }
    // auto slide
    var playTimer = setInterval(autoPlay,3000);
    var key = 0;
    function autoPlay() {
        key++;
        if (key > pgUlLi.length) {
            imgUl[0].style.left = 0;
            key = 1;
        }
        for (let j = 0; j < pgUlLi.length; j++) {
            pgUlLi[j].className = "";
        }
        if (key == pgUlLi.length) {
            pgUlLi[0].className = "current";
        }
        else {
            pgUlLi[key].className = "current";
        }
        animate(imgUl[0], -key * imgWidth);
    }
    //arrow toggle
    $(".arrow-left").click(
        function(){
            key--;
            if (key < 0) {
                imgUl[0].style.left = -imgWidth * (imgUl.children().length-1) + "px";
                key = pgUlLi.length-1;
            }
            for (let j = 0; j < pgUlLi.length; j++) {
                pgUlLi[j].className = "";
            }
            if (key == pgUlLi.length) {
                pgUlLi[0].className = "current";
            }
            else {
                pgUlLi[key].className = "current";
            }
            animate(imgUl[0], -key * imgWidth);
            }
    )
    $(".arrow-right").click(autoPlay);
}

function animate(ele, target) {
    clearInterval(ele.timer);
    var speed = target > ele.offsetLeft ? 10 : -10;
    ele.timer = setInterval(function () {
        var val = target - ele.offsetLeft;
        ele.style.left = ele.offsetLeft + speed + "px";

        if (Math.abs(val) < Math.abs(speed)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    }, 5)
}