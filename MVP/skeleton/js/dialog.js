// Get the modal
var modal = document.getElementById('somedialog');

// Get the button that opens the modal
var a = document.getElementByClassName("sign-up");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
a.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$("sign-up").on('click', function(e){ 
	modal.style.display = "block";
});