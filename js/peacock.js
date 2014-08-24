var banner = $('#banner'),
    feathersLeft = $('.feather.left'),
    feathersRight = $('.feather.right'),
    allFeathers = $('.feather'),
    isOpen = false;

TweenLite.set(allFeathers, {rotation:0, transformOrigin:'50% bottom', force3D:true});
//these loops offset the rotation of each feather and maintain a nice stacking order
feathersLeft.each(function( index, element ) {
  TweenLite.to($(element), 0, {rotation:(index+1) * -22, transformOrigin:'50% bottom'});
})
	
feathersRight.each(function( index, element ) {
  TweenLite.to($(element), 0, {rotation:(index+1) * 22, transformOrigin:'50% bottom'});
})

tl = new TimelineMax(); 
tl.from(allFeathers,  .5, {scale:0, transformOrigin:'50% bottom'})
  .from(allFeathers,  1.2, {rotation:0}, 0.2)

/* Main Toggle Function */

$('#peacockBody').click(function(){
  if(isOpen){ //bounce when opening
    tl.tweenTo(tl.duration(), {ease:Bounce.easeOut}).timeScale(1);
  } else { //super-fast reverse to time(0);
    tl.tweenTo(0).timeScale(3);
  }
  $(".bubble").fadeToggle();
  isOpen = !isOpen;
})


console.log(isOpen);
//party started
TweenLite.from(banner, 0.2, {autoAlpha:0})
TweenLite.from(banner, 1, {scale:0, ease:Back.easeOut});
tl.tweenTo(tl.duration(), {ease:Bounce.easeOut})

//Fade in board members 

$('document').ready(function(){		
    tl.tweenTo(0).timeScale(3);
    isOpen= true;
});
$('#f1').mouseover(function(){
    //show the box
    $('#p1').animate({opacity:1},300);
});

$('#f1').mouseleave(function(){
    //hide the box   
    $('#p1').stop().animate({opacity:0},300);
});

$('#f2').mouseover(function(){
    //show the box
    $('#p2').animate({opacity:1},300);
});

$('#f2').mouseleave(function(){
    //hide the box   
    $('#p2').stop().animate({opacity:0},300);
});


$('#f3').mouseover(function(){
    //show the box
    $('#p3').animate({opacity:1},300);
});

$('#f3').mouseleave(function(){
    //hide the box   
    $('#p3').stop().animate({opacity:0},300);
});

$('#f4').mouseover(function(){
    //show the box
    $('#p4').animate({opacity:1},300);
});

$('#f4').mouseleave(function(){
    //hide the box   
    $('#p4').stop().animate({opacity:0},300);
});

$('#f5').mouseover(function(){
    //show the box
    $('#p5').animate({opacity:1},300);
});

$('#f5').mouseleave(function(){
    //hide the box   
    $('#p5').stop().animate({opacity:0},300);
});

$('#f6').mouseover(function(){
    //show the box
    $('#p6').animate({opacity:1},300);
});

$('#f6').mouseleave(function(){
    //hide the box   
    $('#p6').stop().animate({opacity:0},300);
});

$('#f7').mouseover(function(){
    //show the box
    $('#p7').animate({opacity:1},300);
});

$('#f7').mouseleave(function(){
    //hide the box   
    $('#p7').stop().animate({opacity:0},300);
});

$('#f8').mouseover(function(){
    //show the box
    $('#p8').animate({opacity:1},300);
});

$('#f8').mouseleave(function(){
    //hide the box   
    $('#p8').stop().animate({opacity:0},300);
});

$('#f9').mouseover(function(){
    //show the box
    $('#p9').animate({opacity:1},300);
});

$('#f9').mouseleave(function(){
    //hide the box   
    $('#p9').stop().animate({opacity:0},300);
});

