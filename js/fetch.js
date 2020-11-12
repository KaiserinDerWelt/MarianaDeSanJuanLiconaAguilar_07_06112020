document.getElementById("magButton"),addEventListener('click', loadJSON);


function loadJSON(){
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

function appendData(data){
  var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].name + ' ' + data[i].servings;
                mainContainer.appendChild(div);
}
}


