var $head = $('#header');
var $billarison = $('li');
console.log($head);
console.log($billarison);
$billarison.addClass("alexi");
$('li').on("mouseenter", function() {
	// console.log(this);
	// $(this).hide().fadeIn(1000);
	$(this).animate({
	fontSize:100
	}, 200, function(){
		$(this).animate({
			fontSize: 16
		}, 200)
	})
});

// var $p = $('p');
// $p.hide();
// $p.fadeIn(5000);