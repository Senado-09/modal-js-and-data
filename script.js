// Get The Button that open Modal
var vModBtn = document.getElementById("modBtn");

// Get the Modal
var vModCont = document.getElementById("modCont");

// Get close Button
var vCloseM = document.getElementById("closeM");

// Show Modal by using function and style
vModBtn.onclick = function () {
    vModCont.style.display = "block";
}

// Close Modal by using function
vCloseM.onclick = function () {
    vModCont.style.display = "none";
}

// Listen click event to close Modal
windows.onclick = function (event) {
    if (event.target == vModCont) {
        vModCont.style.display = "none";
    }
}