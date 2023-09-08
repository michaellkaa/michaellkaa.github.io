document.addEventListener('DOMContentLoaded', () => {
    const elementBody = document.body;

    function setColorMode() {
        elementBody.classList.toggle("dark-mode", localStorage.getItem("colorMode") === "dark");
    }

    function changeColorMode() {
        elementBody.classList.toggle("dark-mode");
        localStorage.setItem("colorMode", elementBody.classList.contains("dark-mode") ? "dark" : "light");
    }

    setColorMode();

    elementBody.addEventListener('click', changeColorMode);
});



function changeImage () {
    const logo = document.getElementById("logo")
    
    if (localStorage.getItem("colorMode") == "dark") {
        logo.classList.add("invert");
    } else {
        logo.classList.remove("invert");
    }

    const logo2 = document.getElementById("load-logo")

    if (localStorage.getItem("colorMode") == "dark") {
        logo2.classList.add("invert");
    } else {
        logo2.classList.remove("invert");
    }

    const logo3 = document.getElementById("mobile-logo")
    
    if (localStorage.getItem("colorMode") == "dark") {
        logo.classList.add("invert");
    } else {
        logo.classList.remove("invert");
    }
}

changeImage ();

var timer;
function loader() {
    timer = setTimeout(showPage, 2000);
}
function showPage() {
    document.getElementById("load-logo").style.display = "none";
    
    document.getElementById("home").style.display = "block";
}


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

