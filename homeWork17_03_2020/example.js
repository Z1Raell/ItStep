"use strict";

(() => {


    let width = 130;
    let count = 3;

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function () {
        // сдвиг влево
        position += width * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function () {
        // сдвиг вправо
        position -= width * count;
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
}
)();

// Task 2 

(() => {
    function hide() {
        let element = document.querySelectorAll('.text');
        element.forEach(el => {
            el.style.display = 'none';
        });
    }
    let header = document.querySelectorAll('.head');
    header.forEach(el => {
        el.onclick = function () {
            hide();
            el.closest('.info').querySelector('.text').style.display = 'block';
        }
    })
})();

//Task 3 

(() => {
    let arr = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo molestiae officia accusamus at",
        "exercitationem ratione quasi eius voluptatum blanditiis suscipit magni porro impedit, deserunt, voluptatibus",
        "totam aliquid rerum hic quis sint quod libero. Quod vel deserunt pariatur voluptate qui.",
        "totam aliquid rerum hic quis sint quod libero. Quod vel deserunt pariatur voluptate qui.",
        "totam aliquid rerum hic quis sint quod libero. Quod vel deserunt pariatur voluptate qui.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quo molestiae officia accusamus at",
        "exercitationem ratione quasi eius voluptatum blanditiis suscipit magni porro impedit, deserunt, voluptatibus",
        "exercitationem ratione quasi eius voluptatum blanditiis suscipit magni porro impedit, deserunt, voluptatibus",
        "exercitationem ratione quasi eius voluptatum blanditiis suscipit magni porro impedit, deserunt, voluptatibus"
    ];

    let scroll = document.getElementById("infiniti-scroll");
    ((j) => {
        for (let i = 0; i < j; i++) {
            scroll.innerHTML += '<h1>News ' + (i) + '</h1>' + '<p>' + arr[i] + '</p>';
        }
    })(10);

    window.addEventListener("scroll", () => {
        let counterHeight = scroll.offsetHeight;
        let yOffset = window.pageYOffset;
        let wHeight = window.innerHeight;
        let y = yOffset + wHeight;

        if (y >= counterHeight) {
            for (let i = 0; i < arr.length; i++) {
                scroll.innerHTML += "<h1>News" + arr[i] + "</h1>"
            }
        }

    })
})()