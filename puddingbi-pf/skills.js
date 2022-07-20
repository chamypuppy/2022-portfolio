/* javascript info icon hover */
const infoIcon = document.querySelector(".skill-info-icon");
const jsImg = document.querySelector(".js_certificate");


/* js 인포 아이콘 호버 */

function deleteImg(){
  jsImg.style.display = "none";
}

function infoIconHover(event){
  jsImg.style.display = "block";
  // jsImg.style.opacity = '0.5'
  // jsImg.target.style.transition = "all 0.5s";

  infoIcon.addEventListener("mouseout", deleteImg);
}

// infoIcon.addEventListener("onmouseover", infoIconHover);
infoIcon.addEventListener("mouseover", infoIconHover);


/*  */
function show () {
  document.querySelector(".background").className = "background show";
}

function close () { 
  document.querySelector(".background").className = "background";
}

document.querySelector("#show").addEventListener('click', show);
document.querySelector("#close").addEventListener('click', close);


/* esc로 팝업창 닫기 소스 */
function closekey()
{
        if(event.keyCode==27)
        {
                window.close();
                return false;
        }
}

document.onkeydown=closekey;