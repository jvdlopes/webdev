// Start your JavaScript file with document ready
$(function() {
	// an event listener that will be triggered any time an li is clicked
	$("li").click(function() {
		// when triggered, toggleClass will add the class of checked if it is not already applied to that element, or remove it if it has been
		$(this).toggleClass("checked");
	// closing brackets for the event listener
	});
//closing brackets for the document ready
});