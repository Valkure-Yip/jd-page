function shortNavMenuOne () {
    var liArr = $(".shortcut-nav-menu-one li");
    var itemArr = $(".shortcut-nav-menu-one .cate-pop .cate-part");
    for (let i = 0; i < liArr.length; i++) {
        liArr[i].index = i;
        liArr[i].onmouseover = function(){
            for (let j = 0; j < liArr.length; j++) {
                itemArr[j].style.display = "none";
                liArr[j].className = "";
            }
            this.className = "current";
            itemArr[this.index].style.display="block";
        };
        // itemArr[i].onmouseout = function(){
        //     this.style.display = "none";
        //     liArr[i].className = "";
        // }
        liArr[i].onmouseout = function(){
            // this.className = "";
            itemArr[this.index].style.display="none";
        };
    }
}


    
