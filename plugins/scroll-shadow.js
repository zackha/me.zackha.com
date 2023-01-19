var pane = document.querySelector(".pane");
var scroller = document.querySelector(".pane .scrollable");
var outer = document.querySelector(".scrollable-pane");

if (pane && scroller && outer) {
  pane.addEventListener("scroll", function(){
    var scroll =  pane.scrollTop;
    if (scroll < 10) {
      outer.classList.add('top');
      outer.classList.remove('middle');
      outer.classList.remove('bottom');
    } else if (scroll >= 10 && scroll < (scroller.scrollHeight - pane.offsetHeight) - 10) {
      outer.classList.remove('top');
      outer.classList.add('middle');
      outer.classList.remove('bottom');
    } else {
      outer.classList.remove('top');
      outer.classList.remove('middle');
      outer.classList.add('bottom');
    }
  });
}
