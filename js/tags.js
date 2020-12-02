(function(){
    document.querySelector('#searchFilter').addEventListener('keydown', function(e){
        if(e.keyCode != 13){
            return;
        }

        e.preventDefault()

        var categoryName = this.value
        this.value = ''
        addNewCategory(categoryName)
        updateCategoriesString()
    })

    function addNewCategory(nameCat){
        document.querySelector('#categoriesContainer').insertAdjacentHTML('beforeend',
        `<li class="categoryRecipes">
            <span class="nameCat">${nameCat}</span>
            <span onclick="removeCategory(this)" class="btnRemove bold">X</span>
        </li>`
        )
    }
}) ()

//Add code to fetch categories with search elements

//Remove Category
function removeCategory(e){
    e.parentElement.remove()
    updateCategoriesString()
}