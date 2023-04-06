// burger

let burger = document.querySelector('.burger_menu');
let navigationPanel = document.querySelector('.list_of_navigation');
let transparentBackground = document.querySelector('.transparent_background_none');
let link = document.querySelectorAll('.elemet_of_navigation');

function moveBurger(){
    if (navigationPanel.classList.contains('list_of_navigation')){
        navigationPanel.classList.remove('list_of_navigation');
        navigationPanel.classList.add('list_of_navigation_show');

        burger.classList.remove('burger_menu');
        burger.classList.add('burger_menu_rotate');

        transparentBackground.classList.remove('transparent_background_none');
        transparentBackground.classList.add('transparent_background_show');

        document.body.style.overflow = 'hidden';
    }
    else{
        navigationPanel.classList.remove('list_of_navigation_show');
        navigationPanel.classList.add('list_of_navigation');

        burger.classList.remove('burger_menu_rotate');
        burger.classList.add('burger_menu');

        transparentBackground.classList.remove('transparent_background_show');
        transparentBackground.classList.add('transparent_background_none');

        document.body.style.overflow = 'visible';
    }
}

function closeBurgerByBackground(){
    navigationPanel.classList.remove('list_of_navigation_show');
    navigationPanel.classList.add('list_of_navigation');

    burger.classList.remove('burger_menu_rotate');
    burger.classList.add('burger_menu');

    transparentBackground.classList.remove('transparent_background_show');
    transparentBackground.classList.add('transparent_background_none');

    document.body.style.overflow = 'visible';
}



burger.addEventListener('click', moveBurger);
transparentBackground.addEventListener('click', closeBurgerByBackground);
link.forEach(element => element.addEventListener('click', closeBurgerByBackground));

