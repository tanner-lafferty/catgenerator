let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener('click', fetchPics);

function fetchPics() 
{
  let catsImgDiv = document.querySelector(".catsImgDiv")
  catsImgDiv.innerHTML = ''

  fetch('https://api.thecatapi.com/v1/images/search')
  .then((response) => response.json())
  .then((data) => {
    let catsImgUrl = data[0].url

    let catsImagEl = document.createElement("img")
    catsImagEl.setAttribute('src', `${catsImgUrl}`)
    

    catsImgDiv.appendChild(catsImagEl)

  })
  .catch(err => console.log(err))
}