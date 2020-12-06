//Trial Button to test API
document.getElementById("magButton"),addEventListener('click', loadJSON);


function loadJSON(){ //Hosted JSON in Github
  fetch('https://kaiserinderwelt.github.io/MarianaDeSanJuanLiconaAguilar_07_06112020/recipes.json')
  .then(function (response) {
    return response.json();//Getting Json set as parameter
  })
  .then(function (data) {
    appendData(data); //It will append the data to HTML
  })
    .catch(function (err) {
      console.log(err);
  });
}



