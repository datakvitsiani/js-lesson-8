'use strict'; 

let dataSlider = [
    {
      id: 1,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      title: "title1",
    },
    {
      id: 2,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/Cinque_Terre_.jpg ",    
      title: "title2",
    },
    {
      id: 3,
      imageUrl:
        "https://www.w3schools.com/w3images/lights.jpg",
      title: "title3",
    },
    {
      id: 4,
      imageUrl:
        "http://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg",
      title: "title4",
    },
];

const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const sliderContent = document.getElementById('slider-content')
const dotItem = document.getElementsByClassName('dot');
let sliderIndex = 0;


function createDivTag(item) {
    const div = document.createElement("div");
    div.classList.add("slide");
    return div;
  }
  

  function createImgTag(item) {
    const img = document.createElement("img");
    img.setAttribute("src", item.imageUrl);
    img.setAttribute("alt", item.title);
    return img;
  }
  

  function createh2Tag(item) {
    const title = document.createElement("h2");
    title.textContent = item.title;
    return title;
  }
  
  function createDots(item) {
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dotsWraper");
  
    dataSlider.forEach((element) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.setAttribute("data-id", element.id - 1);
  
      dot.addEventListener("click", function (event) {
        let id = event.target.getAttribute("data-id");
        sliderIndex = id;
        setSlide();
      });
      dotsParent.appendChild(dot);
    });
  
    return dotsParent;
  }
  
  function setSlide() {
    sliderContent.innerHTML = " ";
    const slideDiv = createDivTag(dataSlider[sliderIndex]);
    const imgTag = createImgTag(dataSlider[sliderIndex]);
    const h2Tag = createh2Tag(dataSlider[sliderIndex]);
    const dots = createDots();
  
    slideDiv.appendChild(imgTag);
    slideDiv.appendChild(h2Tag);
    sliderContent.appendChild(slideDiv);
    sliderContent.appendChild(dots);
    currentDotActive();
  }
  
  function currentDotActive() {
      dotItem[sliderIndex].classList.add('active');
  }
  
  function arrowLeftClick() {
    if (sliderIndex == 0) {
      sliderIndex = dataSlider.length - 1;
      setSlide();
      return;
    }
    
    sliderIndex--;
    setSlide();
  }
  function arrowRightClick() {
    if (sliderIndex == dataSlider.length - 1) {
      sliderIndex = 0;
      setSlide();
      return;
    }
    sliderIndex++;
    setSlide();
  }
  
  arrowLeft.addEventListener("click", arrowLeftClick);
  arrowRight.addEventListener("click", arrowRightClick);

  setInterval(() => {
  arrowRightClick();
}, 2500);
  
  
  setSlide();