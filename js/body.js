function showBody() {
	var krushn = true;
}


function changeColor(item, color) {
	$(item).css({
		background: color
	});
}





$("#show").click(function () {
	showBody();
});


$(".skin-color-item").click(function () {
	var whichcolor = $(this).css("backgroundColor");
	console.log(whichcolor);
	var thisid = $(this).attr("id");
	console.log(thisid);
	
	changeColor(".body-part",whichcolor);
	
});

$(".top-color-item").click(function () {
	var whichcolor = $(this).css("backgroundColor");
	console.log(whichcolor);
	var thisid = $(this).attr("id");
	console.log(thisid);
	
	changeColor(".body-torso div",whichcolor);
	
});

$(".pant-color-item").click(function () {
	var whichcolor = $(this).css("backgroundColor");
	console.log(whichcolor);
	var thisid = $(this).attr("id");
	console.log(thisid);
	
	changeColor(".body-leg",whichcolor);
	
});






$(document).ready(function () {

	console.log("ready");

});


/*
body - part-- > skin
body - torso div
body - leg
*/
