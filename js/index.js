// Your code goes here

const imgArray = document.querySelectorAll('img');

// img.addEventListener('mouseover', e => {
//   TweenMax.to(e.currentTarget, 1, {scale: 1.4,ease:Bounce.easeOut});
// })

// img.addEventListener('mouseout', e => {
//   TweenMax.to(e.currentTarget, 1, {scale: 1});
//   e.stopPropagation();
// })



imgArray.forEach( elem => {
  elem.addEventListener('mouseover', e => {
    TweenMax.to(e.currentTarget, 1, {scale: 1.4,ease:Bounce.easeOut});
  });
});

imgArray.forEach( elem => {
  elem.addEventListener('mouseout', e => {
    TweenMax.to(e.currentTarget, .8, {scale: 1,ease:Bounce.easeOut});
  });
});


