(function(){
    
}) ()


function addNewCategory(nameCat){
    document.querySelector('#categoriesContainer').insertAdjacentHTML('beforeend',
    `<li class="categoryRecipes">
        <span class="nameCat">${nameCat}</span>
        <span onclick="removeCategory(this)" class="btnRemove bold"> <i class="fas fa-times"></i>  </span>
    </li>`
    )
    functionSearch()
}
//Remove Category
function removeCategory(e){
    let tagIndex = tags.findIndex(x => x.name === e.parentElement.querySelector('.nameCat').innerText)
    if(tags[tagIndex].category === 'ingredient') {
        ingredientsDropdown.innerHTML += `<a href="#" onclick='categoryClick(this, "ingredient")'>${tags[tagIndex].name}</a>`
    }
    if(tags[tagIndex].category === "appliance") {
        deviceDropdown.innerHTML += `<a href="#" onclick='categoryClick(this, "appliance")'>${tags[tagIndex].name}</a>`
    }
    if(tags[tagIndex].category === 'ustensils') {
        ustensilsDropdown.innerHTML += `<a href="#" onclick='categoryClick(this, "ustensils")'>${tags[tagIndex].name}</a>`
    }
    tags.splice(tagIndex, 1)
    
    e.parentElement.remove()
    functionSearch()
}