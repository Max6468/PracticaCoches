window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("titulo").style.fontSize = "40px";
    document.getElementById("header").style.padding = "0px 10px";
    document.getElementById("left-sidebar").style.marginTop = "99px";
    document.getElementById("right-sidebar").style.marginTop = "99px";
    document.getElementById("main").style.marginTop = "99px";

  } else {
    document.getElementById("titulo").style.fontSize = "90px";
    document.getElementById("header").style.padding = "120px 10px";
    document.getElementById("left-sidebar").style.marginTop = "464px";
    document.getElementById("right-sidebar").style.marginTop = "464px";

  }
}



var checkbox = document.getElementById('menu__toggle');
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      setTimeout(esconder, 40);

    }
    if (!this.checked) {
      setTimeout(mostrar);

    }
});


function mostrar(){

  document.getElementById("left-sidebar").style.display = "block";
}



function esconder() {
  document.getElementById("left-sidebar").style.display = "none";
}
