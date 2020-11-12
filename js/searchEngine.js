function functionSearch() {
    var inputSearch, filterSearch, cardsSearch, cardContainer, mySearch, i;//OK
    inputSearch = document.getElementById("searchFilter"); //Input search //OK
    filterSearch = inputSearch.value.toUpperCase();
    cardContainer = document.getElementById("items");//Container d//OK
    cardsSearch = cardContainer.getElementsByClassName("card");//Targeting Card //OK
    for (i = 0; i < cardsSearch.length; i++) {
        mySearch = cardsSearch[i].querySelector(".row");
        if (mySearch.innerText.toUpperCase().indexOf(inputSearch) > -1) {
            cardsSearch[i].style.display = "";
        } else {
            cardsSearch[i].style.display = "none";
        }
    }
}
