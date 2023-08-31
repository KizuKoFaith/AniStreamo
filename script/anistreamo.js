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

     
      let img = document.createElement('img');
      img.setAttribute('class','mySlides');
      img.setAttribute('src','');
      img.setAttribute('alt','');
      
      img.src = coverImage.jpg[j].image_url;
      
      maindiv.append(img);
      
    }
   
  }
  
})
.catch(function (err){
  console.log(err);
});

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}