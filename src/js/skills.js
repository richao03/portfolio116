$(document).ready(function() {
	$('.skillsIcon').hover(function(){
	$(this).addClass("animated bounce")
	console.log(this)
	},	
	(function(){
	$(this).removeClass("animated bounce")
	console.log(this)
	}))

	// 	$('.skillsIcon').mouseover(function(){
	// $(this).addClass("animated bounce")
	// console.log(this)
	// })

})