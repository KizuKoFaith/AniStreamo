fetch('https://api.jikan.moe/v4/seasons/now')
.then(function (response){
  return response.json();
})
.then(function (anime){
  var maindiv = document.querySelector('#slideshow');

  // const jsonToString = JSON.stringify(anime.data);
  
  for(let i in anime.data){
    let coverImage = anime.data[i].images;
    //console.log(coverImage.jpg)
    for(let j in coverImage.jpg){
      // console.log(coverImage.jpg[j]);
      // let string = "<div class='carousel-item active'><img class='d-block w-100' src='"+coverImage.jpg[j]+"'alt=''/>";
//       
//       maindiv.append(string);

      let div = document.createElement('div').setAttribute('class','carousel-item active');
      let img = document.createElement('img');
      img.setAttribute('class','d-block w-100');
      img.setAttribute('src','');
      img.setAttribute('alt','');
      
      img.src = coverImage.jpg[j];
      
      div.append(img);
      maindiv.append(div);
      
    }
   
  }
  
})
.catch(function (err){
  console.log(err);
})