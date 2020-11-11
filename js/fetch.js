fetch('#')
.then(function (response) {
  return response.json();//Getting Json set as parameter
})
.then(function (data) {
  console.log(data); //It will append the data to HTML
});


//I'm experimenting some browser security restrictions to run the API
