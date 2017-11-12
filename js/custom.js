
$(window).scroll(function(){
	if($(window).scrollTop() > 600) {
		$('.navbar-default').fadeIn(300);
	}
	else {
		$('.navbar-default').fadeOut(300);
	}

	if($(window).width() > 767) {
		if ($(this).scrollTop() > 600) {
			$('.scroll-up').fadeIn(300);
		} else {
			$('.scroll-up').fadeOut(300);
		}
	}
});

$(document).ready(function() {

	$("a.scroll[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(this.hash).offset().top}, 1000, function(){window.location.hash = hash;});
	});

	$('#skills-toggle').click(function() {
        $('#skills').slideToggle(500);
		$('.chart').easyPieChart({
			barColor: '#1ABC9C',
			trackColor: '#2F4254',
			scaleColor: false,
			lineCap: 'butt',
			lineWidth: 12,
			size:110,
			animate: 2000
		});
    });

	$('#overlay-hide').click(function() {
		$('#reference .reference-overlay').animate({opacity:0},1000);
		$('#reference-text').animate({opacity:0},1000);
	});

	$('.overlay-wrapper').mouseenter(function() {
		$(this).find('.overlay a:first-child').addClass('animated slideInLeft');
		$(this).find('.overlay a:last-child').addClass('animated slideInRight');
    });

	$('.overlay-wrapper').mouseleave(function() {
		$(this).find('.overlay a:first-child').removeClass('animated slideInLeft');
		$(this).find('.overlay a:last-child').removeClass('animated slideInRight');
    });

	$('.carousel').mouseenter(function() {
		$('.carousel-control').fadeIn(300);
	});

	$('.carousel').mouseleave(function() {
		$('.carousel-control').fadeOut(300);
	});

	$('#separator').waypoint(function(){$('#separator .number').countTo();},{offset:'85%'});

	if($(window).width() > 767) {
		$('.service').mouseenter(function(e) {
			$(this).find('img').animate({paddingBottom: "15px"},500);
		});

		$('.service').mouseleave(function(e) {
			$(this).find('img').stop().animate({paddingBottom: "0px"},500);
		});
	}

	if($(window).width() > 767) {
		$('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'90%'});
		$('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'90%'});
		$('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'90%'});
		$('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'70%'});

		$('.macbook-inner').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('black');},{offset:'70%'});
	}
});

var arr = new Array(4);
var scr=$("#score");
 for(var i=0; i<4; i++){
	 arr[i]=new Array(4);
 }

 function newGame(){
	$('#myModal').modal('hide');
	for(var i=0; i<4; i++){
	 for(var j=0; j<4; j++){
		 arr[i][j]=0;
	 }
	 scr=0;
 }
 randomnumbergenerator();
}
$(document).ready(function(){
	$(window).on( "load", newGame );
	$( "#mybtn" ).on( "click", newGame );
	$( "#trybtn" ).on( "click", newGame );
});

function randomnumbergenerator()
{
 var rannum=Math.random();
 var ranval;
 if(rannum <= 0.8){
	 ranval=2;
 }
 else{
	 ranval=4;
 }
 var x = Math.floor(Math.random()*15+1);
 console.log("val of x:" + x);
 var y = Math.floor(Math.random()*15+1);
 console.log("val of y:" + y);
 if(x==y){
	 do {
		 y = Math.floor(Math.random()*15+1);
	 } while(x == y);

 }
 arr[Math.floor(x/4)][x%4]=ranval;
 arr[Math.floor(y/4)][y%4]=ranval;

 draw();
}
function draw(){
	$('#score').text(scr);
	var s = [];

	for (var i=0; i< 4; i++) {
		s.push('<div class="row">');
		for (var j=0; j<4; j++) {
			s.push('<div class="cell">');
			if(arr[i][j]==2){
				s.push('<h5 class="tile-inner two">');
			}
			else if(arr[i][j]==4){
				s.push('<h5 class="tile-inner four">');
			}
			else if(arr[i][j]==8){
				s.push('<h5 class="tile-inner eight">');
			}
			else if(arr[i][j]==16){
				s.push('<h5 class="tile-inner sixteen">');
			}
			else if(arr[i][j]==32){
				s.push('<h5 class="tile-inner thirtytwo">');
			}
			else if(arr[i][j]==64){
				s.push('<h5 class="tile-inner sixtyfour">');
			}
			else if(arr[i][j]==128){
				s.push('<h5 class="tile-inner onetwentyeight">');
			}
			else if(arr[i][j]==256){
				s.push('<h5 class="tile-inner twofiftysix">');
			}
			else if(arr[i][j]==512){
				s.push('<h5 class="tile-inner fivetwelve">');
			}
			else if(arr[i][j]==1024){
				s.push('<h5 class="tile-inner onethoutwenfour">');
			}
			else if(arr[i][j]==2048){
				s.push('<h5 class="tile-inner twothoufoureight">');
			}

			if(arr[i][j]!=0){
			s.push(arr[i][j]);
			}
			s.push('</h5></div>')
		}
		s.push('</div>');

	}
	document.getElementById("division").innerHTML= s.join('');
	}

function up(){
	for(var j=0; j<=3; j++){
		  for(var i=0; i<=3; i++){

			  if (arr[i][j] == 0) {
				  var k=i+1;
				  while (k <= 3 && arr[k][j] == 0) {
					k++;
				  }
				  if (k <= 3) {
					arr[i][j] = arr[k][j];
					arr[k][j] = 0;
				  }
				}
			  var next = i+1;
			  if (next<3 && arr[next][j] == 0) {
				  var k=next+1;
				  while (k <=3 && arr[k][j] == 0) {
					k++;
				  }
				  if (k <= 3 ) {
					arr[next][j] = arr[k][j];
					arr[k][j] = 0;
				  }
				}

				if (i+1 <= 3 && arr[i][j] == arr[i+1][j]) {
				  arr[i][j] = 2 * arr[i][j];
				  arr[i+1][j] = 0;
				  scr=parseInt(scr)+arr[i][j];
			  }
		  }
	  }
}
function down(){
	for(var j=3; j>=0; j--){
		  for(var i=3; i>=0; i--){

			  if (arr[i][j] == 0) {
				  var k=i-1;
				  while (k >= 0 && arr[k][j] == 0) {
					k--;
				  }
				  if (k >= 0) {
					arr[i][j] = arr[k][j];
					arr[k][j] = 0;
				  }
				}
			  var next = i-1;
			  if (next>0 && arr[next][j] == 0) {
				  var k=next-1;
				  while (k >= 0 && arr[k][j] == 0) {
					k--;
				  }
				  if (k >= 0 ) {
					arr[next][j] = arr[k][j];
					arr[k][j] = 0;
				  }
				}

				if (i-1 >= 0 && arr[i][j] == arr[i-1][j]) {
				  arr[i][j] = 2 * arr[i][j];
				  arr[i-1][j] = 0;
				  scr=parseInt(scr)+arr[i][j];
			  }
		  }
	  }
}
function left(){
	for(var i=0; i<=3; i++){
		  for(var j=0; j<=3; j++){

			  if (arr[i][j] == 0) {
				  var k=j+1;
				  while (k <= 3 && arr[i][k] == 0) {
					k++;
				  }
				  if (k <= 3) {
					arr[i][j] = arr[i][k];
					arr[i][k] = 0;
				  }
				}
			  var next = j+1;
			  if (arr[i][next] == 0) {
				  var k=next+1;
				  while (k <=3 && arr[i][k] == 0) {
					k++;
				  }
				  if (k <= 3 ) {
					arr[i][next] = arr[i][k];
					arr[i][k] = 0;
				  }
				}

				if (arr[i][j] == arr[i][j+1]) {
				  arr[i][j] = 2 * arr[i][j];
				  arr[i][j+1] = 0;
				  scr=parseInt(scr)+arr[i][j];
			  }
		  }
	  }
}
function right(){
	for(var i=3; i>=0; i--){
		  for(var j=3; j>=0; j--){

			  if (arr[i][j] == 0) {
				  var k=j-1;
				  while (k >=0 && arr[i][k] == 0) {
					k--;
				  }
				  if (k >= 0 ) {
					arr[i][j] = arr[i][k];
					arr[i][k] = 0;
				  }
				}
			  var next = j-1;
			  if (arr[i][next] == 0) {
				  var k=next-1;
				  while (k >=0 && arr[i][k] == 0) {
					k--;
				  }
				  if (k >= 0 ) {
					arr[i][next] = arr[i][k];
					arr[i][k] = 0;
				  }
				}

				if (arr[i][j] == arr[i][j-1]) {
				  arr[i][j] = 2 * arr[i][j];
				  scr=parseInt(scr)+arr[i][j];
				  arr[i][j-1] = 0;
			  }
		  }
	  }
}

$(document).keydown(function(e) {
	var initial = JSON.parse(JSON.stringify(arr));
	console.log(initial);
	var m;
	if(e.which == 38){//up
	 up();
	}
	else if(e.which == 40){//down
	 down();
	}
  else if(e.which == 37) { // left
      left();
  }
  else if(e.which == 39) { // right
      right();
  }

  if((e.which === 37) || (e.which === 38) || (e.which === 39) || (e.which === 40) ){
  arraycompare(initial, arr);
  draw();
  }
  losingcondition();
});

$(document).on("swipe", function(e) {
console.log(e);
});

function arraycompare(initial, actual){
	console.log("initial:" + initial);
	console.log("actual:" + actual);
	var flag;
	if(initial.toString() === 	actual.toString()) {
		console.log("equal");

	} else {
		console.log("Not equal");
		rand();
	}

}
function losingcondition(){
	var k=0;
	for(var i=0;i<=3;i++){
		for(var j=0;j<=3;j++){
			if(arr[i][j]!=0){
				k++;
			}

		}
	}
	if(k==16){
	   losingconditioncheck();
	}
}
function rand(){
	var ran = [];
	var i,j;
	for(i=0;i<=3;i++){
	  for(j=0;j<=3;j++){
		  if(arr[i][j]==0){
			 ran.push({
            i: i,
            j: j
        });
		  }
	  }
  }
   var z=ran.length;
   var random_number = Math.floor(Math.random()*z);
   var k=ran[random_number].i;
   var l=ran[random_number].j;
   var u=Math.random();
   if(u<=0.8){
	arr[k][l] = 2;
   }
   else{
	   arr[k][l]=4;
   }
}
function losingconditioncheck(){
	var initial = JSON.parse(JSON.stringify(arr));
	console.log(initial);
	var m;
	var ename=38;
	if(ename == 38){//up
	 for(var j=0; j<=3; j++){
		  for(var i=0; i<=3; i++){

			  if (initial[i][j] == 0) {
				  var k=i+1;
				  while (k <= 3 && initial[k][j] == 0) {
					k++;
				  }
				  if (k <= 3) {
					initial[i][j] = initial[k][j];
				    initial[k][j] = 0;
				  }
				}
			  var next = i+1;
			  if (next<3 && initial[next][j] == 0) {
				  var k=next+1;
				  while (k <=3 && initial[k][j] == 0) {
					k++;
				  }
				  if (k <= 3 ) {
					initial[next][j] = initial[k][j];
					initial[k][j] = 0;
				  }
				}

				if (i+1 <= 3 && initial[i][j] == initial[i+1][j]) {
				  initial[i][j] = 2 * initial[i][j];
				  initial[i+1][j] = 0;
				  //scr=parseInt(scr)+initial[i][j];
			  }
		  }
	  }
	}
	ename=40;
	if(ename == 40){//down
	 for(var j=3; j>=0; j--){
		  for(var i=3; i>=0; i--){

			  if (initial[i][j] == 0) {
				  var k=i-1;
				  while (k >= 0 && initial[k][j] == 0) {
					k--;
				  }
				  if (k >= 0) {
					initial[i][j] = initial[k][j];
					initial[k][j] = 0;
				  }
				}
			  var next = i-1;
			  if (next>0 && initial[next][j] == 0) {
				  var k=next-1;
				  while (k >= 0 && initial[k][j] == 0) {
					k--;
				  }
				  if (k >= 0 ) {
					initial[next][j] = initial[k][j];
					initial[k][j] = 0;
				  }
				}

				if (i-1 >= 0 && initial[i][j] == initial[i-1][j]) {
				  initial[i][j] = 2 * initial[i][j];
				  initial[i-1][j] = 0;
				  //scr=parseInt(scr)+initial[i][j];
			  }
		  }
	  }
	}
	ename=37;
  if(ename == 37) { // left
      for(var i=0; i<=3; i++){
		  for(var j=0; j<=3; j++){

			  if (initial[i][j] == 0) {
				  var k=j+1;
				  while (k <= 3 && initial[i][k] == 0) {
					k++;
				  }
				  if (k <= 3) {
					initial[i][j] = initial[i][k];
					initial[i][k] = 0;
				  }
				}
			  var next = j+1;
			  if (initial[i][next] == 0) {
				  var k=next+1;
				  while (k <=3 && initial[i][k] == 0) {
					k++;
				  }
				  if (k <= 3 ) {
					initial[i][next] = initial[i][k];
					initial[i][k] = 0;
				  }
				}

				if (initial[i][j] == initial[i][j+1]) {
				  initial[i][j] = 2 * initial[i][j];
				  initial[i][j+1] = 0;
				  //scr=parseInt(scr)+initial[i][j];
			  }
		  }
	  }
  }
  ename=39;
  if(ename == 39) { // right
      for(var i=3; i>=0; i--){
		  for(var j=3; j>=0; j--){

			  if (initial[i][j] == 0) {
				  var k=j-1;
				  while (k >=0 && initial[i][k] == 0) {
					k--;
				  }
				  if (k >= 0 ) {
					initial[i][j] = initial[i][k];
					initial[i][k] = 0;
				  }
				}
			  var next = j-1;
			  if (initial[i][next] == 0) {
				  var k=next-1;
				  while (k >=0 && initial[i][k] == 0) {
					k--;
				  }
				  if (k >= 0 ) {
					initial[i][next] = initial[i][k];
					initial[i][k] = 0;
				  }
				}

				if (initial[i][j] == initial[i][j-1]) {
				  initial[i][j] = 2 * initial[i][j];
				  //scr=parseInt(scr)+initial[i][j];
				  initial[i][j-1] = 0;
			  }
		  }
	  }
  }
  if(initial.toString() === arr.toString()) {
	   document.getElementById("gamedecision").innerHTML = "Game Over!";
	   var scoredivel=document.getElementById("scorediv");
	   scorediv.innerHTML="Your score is "+scr;
	   $('#myModal').modal('show');
	}

}
