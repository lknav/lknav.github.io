document.addEventListener("DOMContentLoaded", function() { 
    const currentPage = window.location.pathname.split("/").pop(); 
    
    if (currentPage === "index.html") {
        document.getElementById("nav-about").classList.add("active");
    } 
    else if (currentPage === "page2.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-games.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-games-ashes.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-games-cells.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-games-peaceful.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-games-anxiety.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-artists.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-artists-lkn.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-artists-lkn-stronghold.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-artists-lkn-snowfall.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-artists-rise.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-artists-rise-psyche.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-artists-rise-intotheabyss.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-sfx.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-sfx-moon1.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page2-sfx-moon2.html") {
        document.getElementById("nav-works").classList.add("active");
    }
    else if (currentPage === "page3.html") {
        document.getElementById("nav-shop").classList.add("active");
    }
});