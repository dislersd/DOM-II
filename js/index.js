// Your code goes here

const imgArray = document.querySelectorAll('img');

imgArray.forEach( elem => {
  elem.addEventListener('mouseover', e => {
    TweenMax.to(e.currentTarget, 1, {scale: 1.1,ease:Bounce.easeOut});
  });
});

imgArray.forEach( elem => {
  elem.addEventListener('mouseout', e => {
    TweenMax.to(e.currentTarget, .8, {scale: 1,ease:Bounce.easeOut});
  });
});


// Make the h1 element draggable:
dragElement(document.getElementById("dragtarget"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
  // if present, the header is where you move the h1 from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
  // otherwise, move the h1 from anywhere inside the h1: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const pArray = document.querySelectorAll('p');

document.addEventListener('scroll', e => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    pArray.forEach( p => {
      TweenMax.to(p, 1, {scale: 1.2,ease:Bounce.easeOut});
    })
  } else {
    pArray.forEach( p => {
      TweenMax.to(p, 1, {scale: 1, ease:Bounce.easeOut});
    })
  }
})

const h2Array = document.querySelectorAll('h2');

h2Array.forEach( elem => {
  elem.addEventListener('dblclick', e => {
    TweenMax.to(e.currentTarget, 1, {scale: 2,ease:Bounce.easeOut, x: 300});
  });
});

document.addEventListener('keydown', e => {
  document.querySelector('h1').style.color = 'coral';
})

document.addEventListener('keyup', e => {
  document.querySelector('h1').style.color = 'black';
})

window.addEventListener('load', e => {
  alert('everything loaded!');
})

const input = document.querySelector('input');

input.addEventListener('focus', e => {
  input.style.background = 'orange'
})

input.addEventListener('onchange', e => {
  input.style.background = 'pink'
})

const radio = document.myForm.buttons;

document.addEventListener('click', e => {
  document.body.style.background = 'blue'
})
