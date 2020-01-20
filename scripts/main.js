// Define a Function
function TruckHuman() {
	alert('Truck or Human?');
}
	
// Use a CSS selector to identify an element
var chevyImage = document.querySelector('img');
	
// Assign the function to the onclick event on that element
chevyImage.onclick = TruckHuman;