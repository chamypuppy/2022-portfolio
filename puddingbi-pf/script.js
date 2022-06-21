window.onscroll = function () {
  progressBar()
};

function progressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
}