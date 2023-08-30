fetch('https://api.jikan.moe/v4/seasons/now')
.then(function (response){
  return response.json();
})
.then(function (anime){
  let maindiv = document.getElementsByClassName('carousel-inner');

  // const jsonToString = JSON.stringify(anime.data);
  
  for(let i in anime.data){
    let coverImage = anime[i].images;
    for(let x in coverImage){
      var cover = coverImage[x].image_url;
      console.log(cover);
    }
    // let string = "<div class='carousel-item active'><img class='d-block w-100' src='"+cover alt=""/>"
  }
  
})
.catch(function (err){
  console.log(err);
})