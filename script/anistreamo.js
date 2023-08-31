fetch('https://api.jikan.moe/v4/seasons/now')
.then(function (response){
  return response.json();
})
.then(function (anime){
  let maindiv = document.getElementsByClassName('carousel-inner');

  // const jsonToString = JSON.stringify(anime.data);
  
  for(let i in anime.data){
    let coverImage = anime.data[i].images;
    //console.log(coverImage.jpg)
    for(let j in coverImage.jpg){
      // console.log(coverImage.jpg[j]);
      let string = "<div class='carousel-item active'><img class='d-block w-100' src='"+coverImage.jpg[j]+"'alt=''/>";
      
      maindiv.appendChild(string);
      
    }
   
  }
  
})
.catch(function (err){
  console.log(err);
})