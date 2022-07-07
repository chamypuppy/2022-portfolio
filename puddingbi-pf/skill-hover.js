/* javascript info icon hover */
const infoIcon = document.querySelector(".skill-info-icon");
const jsImg = document.querySelector(".js_certificate");


/* js 인포 아이콘 호버 */

function deleteImg(){
  jsImg.style.display = "none";
}

function infoIconHover(){
  jsImg.style.display = "block";

  infoIcon.addEventListener("mouseout", deleteImg);
}

// infoIcon.addEventListener("onmouseover", infoIconHover);
infoIcon.addEventListener("mouseover", infoIconHover);


/*  */
const acc = document.getElementsByClassName("accordion");

	for (const i = 0; i < acc.length; i++) {

		  acc[i].onclick = function() {	 
             // 클릭이 일어났을 때 기존에 열려 있던 아코디언을 접는다. (1개의 아코디언만 열리게)
			 for (var j = 0 ; j<acc.length; j++){
                // 버튼 상태에 입혀진 active 라는 클래스를 지운다.
				 acc[j].classList.remove("active");
                // 버튼 다음에 있는 div 콘텐츠 높이를 0으로 만든다. == 아코디언을 접는다.
				 if (this!==acc[j]) {
					 acc[j].nextElementSibling.style.maxHeight = null;
				 }
			 }

			this.classList.toggle("active");
			const panel = this.nextElementSibling;
			if (panel.style.maxHeight){
				this.classList.remove("active");
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
	 
		  }
	}

