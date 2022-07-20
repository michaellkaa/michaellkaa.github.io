var root = document.querySelector(':root');

function setColorMode() {
    var elementBody = document.body;
    
    if (localStorage.getItem("colorMode") == "dark") {
        elementBody.classList.add("dark-mode");
    } else {
        elementBody.classList.remove("dark-mode");
    }



};


function changeColorMode () {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("colorMode", "dark");
    } else {
        localStorage.setItem("colorMode", "light");
    }

    console.log(localStorage.getItem("colorMode")); 
};



setColorMode();

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

