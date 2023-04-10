const listOfDogs = `[
    {
      "name": "Jennifer",
      "img": "assets/png/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "assets/png/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "assets/png/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "assets/png/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "assets/png/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "assets/png/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "assets/png/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "assets/png/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
]`

const parsedData = JSON.parse(listOfDogs);



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

// pagination

let sliderLeft = document.querySelector('.circle_left');
let sliderRight = document.querySelector('.circle_right');
let doubleSliderLeft = document.querySelector('.circle_left_double');
let doubleSliderRight = document.querySelector('.circle_rigth_double');
let listOfPets = document.querySelectorAll('.pet');
let counterOfPage = document.querySelector('.circle_number_page');

sliderRight.addEventListener('click', function (){
    counterIncremetClick();
    forward();
    if(arrLength == 7){
        if (counterVal === 6){
            sliderRight.classList.remove('active_circle');
            sliderRight.classList.add('inactive_circle');
            doubleSliderRight.classList.remove('active_circle')
            doubleSliderRight.classList.add('inactive_circle')
        }
        else if (counterVal > 1){
            sliderLeft.classList.remove('inactive_circle');
            sliderLeft.classList.add('active_circle');
            doubleSliderLeft.classList.remove('inactive_circle');
            doubleSliderLeft.classList.add('active_circle');
        }
    }
    else if (arrLength == 5){
        if (counterVal === 8){
            sliderRight.classList.remove('active_circle');
            sliderRight.classList.add('inactive_circle');
            doubleSliderRight.classList.remove('active_circle')
            doubleSliderRight.classList.add('inactive_circle')
        }
        else if (counterVal > 1){
            sliderLeft.classList.remove('inactive_circle');
            sliderLeft.classList.add('active_circle');
            doubleSliderLeft.classList.remove('inactive_circle');
            doubleSliderLeft.classList.add('active_circle');
        }
    }
    else if (arrLength == 3){
        if (counterVal === 16){
            sliderRight.classList.remove('active_circle');
            sliderRight.classList.add('inactive_circle');
            doubleSliderRight.classList.remove('active_circle')
            doubleSliderRight.classList.add('inactive_circle')
        }
        else if (counterVal > 1){
            sliderLeft.classList.remove('inactive_circle');
            sliderLeft.classList.add('active_circle');
            doubleSliderLeft.classList.remove('inactive_circle');
            doubleSliderLeft.classList.add('active_circle');
        }
    }
})
sliderLeft.addEventListener('click', function(){
    counterDecrimentClick();
    forward();
    if(arrLength == 7){
        if (counterVal == 1){
            sliderLeft.classList.remove('active_circle');
            sliderLeft.classList.add('inactive_circle');
            
            doubleSliderLeft.classList.remove('active_circle');
            doubleSliderLeft.classList.add('inactive_circle');   
        }
        else if (counterVal <= 6){

            sliderRight.classList.remove('inactive_circle');
            sliderRight.classList.add('active_circle');

            doubleSliderRight.classList.remove('inactive_circle')
            doubleSliderRight.classList.add('active_circle')
        }
    }
    else if (arrLength == 5){
        if (counterVal === 1){
            sliderLeft.classList.remove('active_circle');
            sliderLeft.classList.add('inactive_circle');
            
            doubleSliderLeft.classList.remove('active_circle');
            doubleSliderLeft.classList.add('inactive_circle'); 
        }
        else if (counterVal <= 8){
            sliderRight.classList.remove('inactive_circle');
            sliderRight.classList.add('active_circle');

            doubleSliderRight.classList.remove('inactive_circle')
            doubleSliderRight.classList.add('active_circle')
        }
    }
    else if (arrLength == 3){
        if (counterVal === 1){
            sliderLeft.classList.remove('active_circle');
            sliderLeft.classList.add('inactive_circle');
            
            doubleSliderLeft.classList.remove('active_circle');
            doubleSliderLeft.classList.add('inactive_circle');
        }
        else if (counterVal <= 16){
            sliderRight.classList.remove('inactive_circle');
            sliderRight.classList.add('active_circle');

            doubleSliderRight.classList.remove('inactive_circle')
            doubleSliderRight.classList.add('active_circle')
        }
    }
})

doubleSliderRight.addEventListener('click', function(){
    forward();
    if(arrLength == 7){
        updateCounter(counterVal = 6)
        sliderRight.classList.remove('active_circle');
        sliderRight.classList.add('inactive_circle');
        doubleSliderRight.classList.remove('active_circle')
        doubleSliderRight.classList.add('inactive_circle')

        sliderLeft.classList.remove('inactive_circle');
        sliderLeft.classList.add('active_circle');
        doubleSliderLeft.classList.remove('inactive_circle');
        doubleSliderLeft.classList.add('active_circle');
    }
    else if(arrLength == 5){
        updateCounter(counterVal = 8)
        sliderRight.classList.remove('active_circle');
        sliderRight.classList.add('inactive_circle');
        doubleSliderRight.classList.remove('active_circle')
        doubleSliderRight.classList.add('inactive_circle')

        sliderLeft.classList.remove('inactive_circle');
        sliderLeft.classList.add('active_circle');
        doubleSliderLeft.classList.remove('inactive_circle');
        doubleSliderLeft.classList.add('active_circle');
    }
    else if(arrLength == 3){
        updateCounter(counterVal = 16)
        sliderRight.classList.remove('active_circle');
        sliderRight.classList.add('inactive_circle');
        doubleSliderRight.classList.remove('active_circle')
        doubleSliderRight.classList.add('inactive_circle')

        sliderLeft.classList.remove('inactive_circle');
        sliderLeft.classList.add('active_circle');
        doubleSliderLeft.classList.remove('inactive_circle');
        doubleSliderLeft.classList.add('active_circle');
    }
})

doubleSliderLeft.addEventListener('click', function(){
    forward();
    if(arrLength == 7){
        updateCounter(counterVal = 1)
        sliderLeft.classList.remove('active_circle');
        sliderLeft.classList.add('inactive_circle');
        doubleSliderLeft.classList.remove('active_circle')
        doubleSliderLeft.classList.add('inactive_circle')

        sliderRight.classList.remove('inactive_circle');
        sliderRight.classList.add('active_circle');
        doubleSliderRight.classList.remove('inactive_circle');
        doubleSliderRight.classList.add('active_circle');
    }
    else if(arrLength == 5){
        updateCounter(counterVal = 1)
        sliderLeft.classList.remove('active_circle');
        sliderLeft.classList.add('inactive_circle');
        doubleSliderLeft.classList.remove('active_circle')
        doubleSliderLeft.classList.add('inactive_circle')

        sliderRight.classList.remove('inactive_circle');
        sliderRight.classList.add('active_circle');
        doubleSliderRight.classList.remove('inactive_circle');
        doubleSliderRight.classList.add('active_circle');
    }
    else if(arrLength == 3){
        updateCounter(counterVal = 1)
        sliderLeft.classList.remove('active_circle');
        sliderLeft.classList.add('inactive_circle');
        doubleSliderLeft.classList.remove('active_circle')
        doubleSliderLeft.classList.add('inactive_circle')

        sliderRight.classList.remove('inactive_circle');
        sliderRight.classList.add('active_circle');
        doubleSliderRight.classList.remove('inactive_circle');
        doubleSliderRight.classList.add('active_circle');
    }
})

let pastArr = [];
let currArr = [];
let nextArr = [];
const range = parsedData;
let arrLength = 0;


let counterVal = 1;

function counterIncremetClick(){
    updateCounter(++counterVal);
}

function counterDecrimentClick(){
    updateCounter(--counterVal)
}
function updateCounter(counterVal){
    counterOfPage.innerHTML = counterVal;
}
updateCounter(counterVal);

function checkWindow(){
    if (window.innerWidth > 1290){
        arrLength = 7;
    }
    else if (window.innerWidth >= 768 && window.innerWidth <= 1290){
        arrLength = 5;  
    }
    else {
        arrLength = 3;
    }

    return arrLength;
}
checkWindow();



function init(){


    for (let i = 0; i <= arrLength; i++){
        let random = Math.floor(Math.random()*range.length);
        nextArr.push(range[random]);
    }


    currArr.push(...nextArr);
    nextArr.splice(0, nextArr.length);

    for (let i = 0; i <= arrLength; i++){
        let random = Math.floor(Math.random()*range.length);
        nextArr.push(range[random]);
    }

    pastArr.push(...currArr);
    currArr.splice(0, currArr.length);
    currArr.push(...nextArr);
    nextArr.splice(0, nextArr.length);


    for (let i = 0; i <= arrLength; i++){
        let random = Math.floor(Math.random()*range.length);
        nextArr.push(range[random]);
    }

    console.log(nextArr);
    console.log(currArr);
    console.log(pastArr);
    
    pushToHtml();
}
init();

function forward(){

    pastArr.splice(0, pastArr.length)
    pastArr.push(...currArr);
    currArr.splice(0, currArr.length);
    currArr.push(...nextArr);
    nextArr.splice(0, nextArr.length); 
    randomRangeArr = range.sort(() => (Math.random() - 0.5));

    for (let i = 0; i <= arrLength; i++){
        let random = Math.floor(Math.random()*range.length);
        nextArr.push(range[random]);
    }

    let removePets = document.querySelectorAll('.pet');
    removePets.forEach(element => element.remove());
    

    pushToHtml();
}


// wtf i dont know 
// function backward(){

//     nextArr.splice(0, nextArr.length)
//     nextArr.push(...currArr);
//     currArr.splice(0, currArr.length);
//     currArr.push(...pastArr);
//     pastArr.splice(0, nextArr.length);
    
    
//     randomRangeArr = range.sort(() => (Math.random() - 0.5));

//     for (let i = 0; i <= arrLength; i++){
//         let random = Math.floor(Math.random()*range.length);
//         nextArr.push(range[random]);
//     }

//     let removePets = document.querySelectorAll('.pet');
//     removePets.forEach(element => element.remove());
    

//     console.log(nextArr);
//     console.log(currArr);
//     console.log(pastArr);
//     pushToHtml();
// }

function pushToHtml(){
    const containerOfPets = document.querySelector('.collection_of_pets');

    let imgPet = '';
    let namePet = '';
    for (let pet of currArr){
        namePet = pet.name;
        imgPet = pet.img
        
        let html = `
        <div class="pet">
            <img class="img_pet" src="${imgPet}" alt="katrine">
            <div class="pet_name">${namePet}</div>
            <button class="light_button button_learn_more">Learn more</button>
        </div>
    `;
    containerOfPets.insertAdjacentHTML('afterbegin', html);
    }
}