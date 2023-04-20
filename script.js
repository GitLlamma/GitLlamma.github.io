var isSecret = false;

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');

  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

  if(el_autohide){
    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if

});
// DOMContentLoaded  end

$(function() {
  var navMain = $("#navbarNav");
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse('hide');
  });
});

function secretClick() {
  isSecret = true;
  document.getElementById("profile").src = "images/beardman.png";
  document.querySelector("body").style.backgroundColor = "black";
  document.getElementById("myNavbar").style.backgroundColor = "black";
}

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.getElementById("myName").onmouseover = event => {
  if (!isSecret) {
    return;
  }
    let i = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index === 4) {
                return " ";
            }
            if(index < i) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 52)];
        })
        .join("");

    if (i >= event.target.dataset.value.length){
        clearInterval(interval);
    }

    i += 1 / 3;
    }, 40);
}
