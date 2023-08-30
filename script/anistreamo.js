fetch('https://api.jikan.moe/v4/seasons/now')
.then(function (response){
  let maindiv = document.getElementsByClassName('carousel-inner');
  var parseJSON = JSON.parse(this.data);
  
  for(let item in parseJSON){
    
    alert(parseJSON[item].title);
    
  }
  
})
.catch(function (err){
  console.log(err);
})