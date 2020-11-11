fetch('recipes.json')
  .then(function (response) {
    return response.json();//Getting Json sata as parameter
  })
  .then(function (data) {
    appendData(data); //It will append the data to HTML
  })
  .catch(function (err) {
    console.log(err); //Display console error
  });


  function appendData(data) {
    var mainContainer = document.getElementsByName("name");
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
      mainContainer.appendChild(div);
    }
  }