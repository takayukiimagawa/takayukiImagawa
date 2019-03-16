let i = 0;
let images = [];
let time = 1500;

images[0] = "Images/D01.png";
images[1] = "Images/D02.png";
images[2] = "Images/D03.png";
images[3] = "Images/D04.png";
images[4] = "Images/D05.png";
images[5] = "Images/D06.png";
images[5] = "Images/D07.png";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
