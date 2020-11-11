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