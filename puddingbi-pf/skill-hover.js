const infoIcon = document.querySelector(".skill-info-icon");
const jsImg = document.querySelector(".js_certificate");

function deleteImg(){
  jsImg.style.display = "none";
}

function infoIconHover(){
  jsImg.style.display = "block";

  infoIcon.addEventListener("mouseout", deleteImg);
}

// infoIcon.addEventListener("onmouseover", infoIconHover);
infoIcon.addEventListener("mouseover", infoIconHover);