function functionSearch() {
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

//This is my second algorithm 