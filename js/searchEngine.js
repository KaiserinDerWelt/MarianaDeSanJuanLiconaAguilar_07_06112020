/*function functionSearch() {
    var inputSearch, filterSearch, cardsSearch, cardContainer, mySearch, i;//OK
    inputSearch = document.getElementById("searchFilter"); //Input search //OK
    filterSearch = inputSearch.value.toUpperCase();
    cardContainer = document.getElementById("items");//Container d//OK
    cardsSearch = cardContainer.getElementsByClassName("card");//Targeting Card //
    for (i = 0; i < cardsSearch.length; i++) {
        mySearch = cardsSearch[i].querySelector(".card-body"); //Modify lenght
        if (mySearch.innerText.toUpperCase().indexOf(filterSearch) > -1) {
            cardsSearch[i].style.display = "";
        } else {
            cardsSearch[i].style.display = "none";
        }
    }
}
*/ // Try this algorithm in the other branch
let tags = []


function functionSearch() {
    var inputSearch, filterSearch, cardsSearch, cardContainer, mySearch, i;//OK
    inputSearch = document.getElementById("searchFilter"); //Input search //OK
    filterSearch = inputSearch.value.toUpperCase();
    cardContainer = document.getElementById("items");//Container d//OK
    cardsSearch = cardContainer.getElementsByClassName("card");//Targeting Card //
    for(let i = 0; i < cardsSearch.length; i++) {
        cardsSearch[i].classList.remove('hide')
    }
    if(inputSearch.value.length > 2) { //Defined lenght
        for (i = 0; i < cardsSearch.length; i++) {
            mySearch = cardsSearch[i].querySelector(".card-body"); //Modify lenght
            if (mySearch.innerText.toUpperCase().indexOf(filterSearch) > -1) {
                cardsSearch[i].classList.remove('hide')
            } else {
                cardsSearch[i].classList.add('hide')
            }
        }
    } else if (inputSearch.value.length === 0) {
        for (i = 0; i < cardsSearch.length; i++) {
            cardsSearch[i].classList.remove('hide')
        }
    }


    //filter ingredients
    let ingredientsArray = tags.filter(tag => tag.category === 'ingredient').map(r => r.name)
    for(let i = 0; i < recipes.length; i++) {
        if(cardsSearch[i].classList.contains('hide') === false) {
            let ingredientsMatchs = []
            for(let m = 0; m < ingredientsArray.length; m++) {
                ingredientsMatchs.push(recipes[i].ingredients.map(x => x.ingredient).includes(ingredientsArray[m]))
            }
            if(ingredientsMatchs.includes(false)) {
                cardsSearch[i].classList.add('hide')
            }
        }
    }



    // filter device
    let deviceArray = tags.filter(tag => tag.category === 'appliance').map(r => r.name)
    for(let i = 0; i < recipes.length; i++) {
        if(cardsSearch[i].classList.contains('hide') === false) {
            if(deviceArray.includes(recipes[i].appliance) === false && deviceArray.length !== 0) {
                cardsSearch[i].classList.add('hide')
            }
        }
    }

    // filter ustensils
    let ustensilsArray = tags.filter(tag => tag.category === 'ustensils').map(r => r.name)
    for(let i = 0; i < recipes.length; i++) {
        if(cardsSearch[i].classList.contains('hide') === false) {
            let ustensilsMatchs = []
            for(let m = 0; m < ustensilsArray.length; m++) {
                ustensilsMatchs.push(recipes[i].ustensils.includes(ustensilsArray[m]))
            }
            if(ustensilsMatchs.includes(false)) {
                cardsSearch[i].classList.add('hide')
            }
        }
    }
}
