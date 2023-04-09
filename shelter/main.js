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

// slider

let pastArr = [];
let currArr = [];
let nextArr = [];
const range = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arrLength = 0;



function checkWindow(){
    if (window.innerWidth > 1290){
        arrLength = 2;
    }
    else if (window.innerWidth >= 768 && window.innerWidth <= 1290){
        arrLength = 1;  
    }
    else {
        arrLength = 0;
    }

    return arrLength;
}
checkWindow();



function init(){
    randomRangeArr = range.sort(() => (Math.random() - 0.5));

    
    for (let i = 0; i <= arrLength; i++){
        nextArr.push(randomRangeArr[i]);
    }

    currArr.push(...nextArr);
    nextArr.splice(0, nextArr.length);

    for (let i = 0; i <= arrLength; i++){
        nextArr.push(randomRangeArr[arrLength + 1 + i]);
    }

    pastArr.push(...currArr);
    currArr.splice(0, currArr.length);
    currArr.push(...nextArr);
    nextArr.splice(0, nextArr.length);


    for (let i = 0; i <= arrLength; i++){
        nextArr.push(randomRangeArr[arrLength * 2 + 2 + i]);
    }

}
init();

function forward(){

    console.log(nextArr);
    console.log(currArr);
    console.log(pastArr);

    pastArr.splice(0, pastArr.length)
    pastArr.push(...currArr);
    currArr.splice(0, currArr.length);
    currArr.push(...nextArr);
    nextArr.splice(0, nextArr.length);
    
    
    randomRangeArr = range.sort(() => (Math.random() - 0.5));

    for (let i = 0; i <= arrLength; i++){
        nextArr.push(randomRangeArr[i]);
    }

    console.log(nextArr);
    console.log(currArr);
    console.log(pastArr);
}
// forward();

function backward(){

    nextArr.splice(0, nextArr.length)
    nextArr.push(...currArr);
    currArr.splice(0, currArr.length);
    currArr.push(...pastArr);
    pastArr.splice(0, nextArr.length);
    
    
    randomRangeArr = range.sort(() => (Math.random() - 0.5));

    for (let i = 0; i <= arrLength; i++){
        pastArr.push(randomRangeArr[i]);
    }

}
backward();



function changeToBackward(){
    let replaceArrCurr = [];
    let replaceArrPast = [];

    replaceArrCurr.push(...currArr);
    currArr.splice(0, currArr.length);

    replaceArrPast.push(...pastArr);
    pastArr.splice(0, pastArr.length)


    currArr.push(...replaceArrPast);
    pastArr.push(...replaceArrCurr);

    nextArr.splice(0, nextArr.length);

    randomRangeArr = range.sort(() => (Math.random() - 0.5));

    for (let i = 0; i <= arrLength; i++){
        nextArr.push(randomRangeArr[i]);
    }
}
// changeToBackward()

function changeToForward(){
    let replaceArrCurr = [];
    let replaceArrNext = [];

    replaceArrCurr.push(...currArr);
    currArr.splice(0, currArr.length);

    replaceArrNext.push(...nextArr);
    nextArr.splice(0, nextArr.length)


    currArr.push(...replaceArrPast);
    pastArr.push(...replaceArrCurr);

    nextArr.splice(0, nextArr.length);

    randomRangeArr = range.sort(() => (Math.random() - 0.5));

    for (let i = 0; i <= arrLength; i++){
        nextArr.push(randomRangeArr[i]);
    }
}
changeToForward();




// console.log(nextArr)



// function generateNextArr(){
//     min = Math.ceil(0);
//     max = Math.floor(7);

//     for (let i = 0; i < arrLength; i++){
//         pushNumber = Math.floor(Math.random() * (max - min + 1)) + min;       
//     }
//     return nextArr;
// }
// console.log(generateNextArr());

// function compareCurrentAndNext (){
//     console.log(nextArr.sort());
//     console.log(currArr.sort());
//     let sortNextArr = nextArr.sort();
//     let sortCurrArr = currArr.sort();
// }
// compareCurrentAndNext();