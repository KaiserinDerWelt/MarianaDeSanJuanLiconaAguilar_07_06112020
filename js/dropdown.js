// Add new category

function categoryClick(e, category) {
    tags.push({
      category: category,
      name: e.innerText
    })
    addNewCategory(e.innerText)
    e.remove()
    document.getElementById("ingredientsDropdown").classList.remove("show");
    document.getElementById("deviceDropdown").classList.remove("show");
    document.getElementById("ustensilsDropdown").classList.remove("show");
  
      document.querySelector('.dropbtn.blue i').classList.remove('fa-angle-up')
      document.querySelector('.dropbtn.blue i').classList.add('fa-angle-down')
  
      document.querySelector('.dropbtn.green i').classList.remove('fa-angle-up')
      document.querySelector('.dropbtn.green i').classList.add('fa-angle-down')
  
      document.querySelector('.dropbtn.red i').classList.remove('fa-angle-up')
      document.querySelector('.dropbtn.red i').classList.add('fa-angle-down')
  
      /* Add search function here */
  
  
  }
  
  
  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  
  // Ingredient Dropdown Functions
  
  function ingredientsBtn(e) {
    document.getElementById("ingredientsDropdown").classList.toggle("show");
    document.getElementById("deviceDropdown").classList.remove("show");
    document.getElementById("ustensilsDropdown").classList.remove("show");
  
    if(document.querySelector('.dropbtn.blue i').classList.contains('fa-angle-down')) {
      document.querySelector('.dropbtn.blue i').classList.remove('fa-angle-down')
      document.querySelector('.dropbtn.blue i').classList.add('fa-angle-up')
      document.getElementById('ingredientsInput').focus()
    } else {
      document.querySelector('.dropbtn.blue i').classList.remove('fa-angle-up')
      document.querySelector('.dropbtn.blue i').classList.add('fa-angle-down')
    }
  
    document.querySelector('.dropbtn.green i').classList.remove('fa-angle-up')
    document.querySelector('.dropbtn.green i').classList.add('fa-angle-down')
    document.querySelector('.dropbtn.red i').classList.remove('fa-angle-up')
    document.querySelector('.dropbtn.red i').classList.add('fa-angle-down')
  
  }
  
  
  function filterFunctionIngredients() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("ingredientsInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("ingredientsDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        } else {
        a[i].style.display = "none";
        }
    }
  }
  
  
  
  let ingredientsList = []
  const ingredientsDropdown = document.querySelector('#ingredientsDropdown .dropdown-body')
  function collectIngredients() {
      
      for(let i = 0; i < recipes.length; i++) {
          for(let r = 0; r < recipes[i].ingredients.length; r++) {
              if((ingredientsList.includes(recipes[i].ingredients[r].ingredient) === false) && (recipes[i].ingredients[r].ingredient !== ' ')) {
                  ingredientsList.push(recipes[i].ingredients[r].ingredient)
                  // Test
                  ingredientsDropdown.innerHTML += `<a href="#" onclick='categoryClick(this, "ingredient")'>${recipes[i].ingredients[r].ingredient}</a>`
              }
          }
      }
  }
  
  collectIngredients()
  
  
  // Device Dropdown Functions
  
  function deviceBtn() {
    document.getElementById("ingredientsDropdown").classList.remove("show");
    document.getElementById("deviceDropdown").classList.toggle("show");
    document.getElementById("ustensilsDropdown").classList.remove("show");
  
    if(document.querySelector('.dropbtn.green i').classList.contains('fa-angle-down')) {
      document.querySelector('.dropbtn.green i').classList.remove('fa-angle-down')
      document.querySelector('.dropbtn.green i').classList.add('fa-angle-up')
      document.getElementById('deviceInput').focus()
    } else {
      document.querySelector('.dropbtn.green i').classList.remove('fa-angle-up')
      document.querySelector('.dropbtn.green i').classList.add('fa-angle-down')
    }
  
    document.querySelector('.dropbtn.blue i').classList.remove('fa-angle-up')
    document.querySelector('.dropbtn.blue i').classList.add('fa-angle-down')
    document.querySelector('.dropbtn.red i').classList.remove('fa-angle-up')
    document.querySelector('.dropbtn.red i').classList.add('fa-angle-down')
  }
  
  
  function filterFunctionDevice() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("deviceInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("deviceDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        } else {
        a[i].style.display = "none";
        }
    }
  }
  
  
  
  let deviceList = []
  const deviceDropdown = document.querySelector('#deviceDropdown .dropdown-body')
  function collectDevice() {
      
      for(let i = 0; i < recipes.length; i++) {
            if(deviceList.includes(recipes[i].appliance) === false) {
                deviceList.push(recipes[i].appliance)
                // Test
                deviceDropdown.innerHTML += `<a href="#" onclick='categoryClick(this, "appliance")'>${recipes[i].appliance}</a>`
            }
      }
  }
  
  collectDevice()
  
  
  // Ustensils Dropdown Functions
  
  function ustensilsBtn() {
    document.getElementById("ingredientsDropdown").classList.remove("show");
    document.getElementById("deviceDropdown").classList.remove("show");
    document.getElementById("ustensilsDropdown").classList.toggle("show");
  
  
    if(document.querySelector('.dropbtn.red i').classList.contains('fa-angle-down')) {
      document.querySelector('.dropbtn.red i').classList.remove('fa-angle-down')
      document.querySelector('.dropbtn.red i').classList.add('fa-angle-up')
      document.getElementById('ustensilsInput').focus()
    } else {
      document.querySelector('.dropbtn.red i').classList.remove('fa-angle-up')
      document.querySelector('.dropbtn.red i').classList.add('fa-angle-down')
    }
  
    document.querySelector('.dropbtn.green i').classList.remove('fa-angle-up')
    document.querySelector('.dropbtn.green i').classList.add('fa-angle-down')
    document.querySelector('.dropbtn.blue i').classList.remove('fa-angle-up')
    document.querySelector('.dropbtn.blue i').classList.add('fa-angle-down')
  }
  
  
  function filterFunctionUstensils() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("ustensilsInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("ustensilsDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
        } else {
        a[i].style.display = "none";
        }
    }
  }
  
  
  
  let ustensilsList = []
  const ustensilsDropdown = document.querySelector('#ustensilsDropdown .dropdown-body')
  function collectUstensils() {
      
    for(let i = 0; i < recipes.length; i++) {
        for(let r = 0; r < recipes[i].ustensils.length; r++) {
            if((ustensilsList.includes(recipes[i].ustensils[r]) === false) && (recipes[i].ustensils[r] !== ' ')) {
                ustensilsList.push(recipes[i].ustensils[r])
                // Test
                ustensilsDropdown.innerHTML += `<a href="#" onclick='categoryClick(this, "ustensils")'>${recipes[i].ustensils[r]}</a>`
            }
        }
    }
  }
  
  collectUstensils()