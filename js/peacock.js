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

$('#peacock').click(function(){
  if(isOpen){ //bounce when opening
    tl.tweenTo(tl.duration(), {ease:Bounce.easeOut}).timeScale(1);
  } else { //super-fast reverse to time(0);
    tl.tweenTo(0).timeScale(3);
  }
  isOpen = !isOpen;
})

//party started
TweenLite.from(banner, 0.2, {autoAlpha:0})
TweenLite.from(banner, 1, {scale:0, ease:Back.easeOut});
tl.tweenTo(tl.duration(), {ease:Bounce.easeOut})


