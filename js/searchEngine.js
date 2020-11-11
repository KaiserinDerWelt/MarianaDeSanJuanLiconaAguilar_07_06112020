function functionSearch() {
    var inputSearch, filterSearch, cardsSearch, cardContainer, mySearch, i;
    inputSearch = document.getElementById("searchFilter"); //Input search
    filterSearch = inputSearch.value.toUpperCase();
    cardContainer = document.getElementById("items");//Container d
    cardsSearch = cardContainer.getElementsByClassName("card");//Targeting Card
    for (i = 0; i < cardsSearch.length; i++) {
        mySearch = cardsSearch[i].querySelector(".card-body");
        if (mySearch.innerText.toUpperCase().indexOf(inputSearch) > -1) {
            cardsSearch[i].style.display = "";
        } else {
            cardsSearch[i].style.display = "none";
        }
    }
}