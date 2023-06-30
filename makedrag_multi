function makeDragable(dragHandle) {

  let dragObj = null; 

  let xOffset = 0; 

  let yOffset = 0;


for (var i = 0, len = document.querySelectorAll(dragHandle).length; i < len; i++) {
    //work with checkboxes[i]

 document.querySelectorAll(dragHandle)[i].addEventListener("mousedown", startDrag, true);

  document.querySelectorAll(dragHandle)[i].addEventListener("touchstart", startDrag, true);
}


  function startDrag(e) {
  
    e.preventDefault();

    e.stopPropagation();

    dragObj = this.parentNode;
           
    dragObj.style.position = "fixed";
    let rect = dragObj.getBoundingClientRect();



    if (e.type=="mousedown") {

      xOffset = e.clientX - rect.left; 

      yOffset = e.clientY - rect.top;

      window.addEventListener('mousemove', dragObject, true);

    } else if(e.type=="touchstart") {

      xOffset = e.targetTouches[0].clientX - rect.left;

      yOffset = e.targetTouches[0].clientY - rect.top;

      window.addEventListener('touchmove', dragObject, true);

    }

  }



  /*Drag object*/

  function dragObject(e) {

    e.preventDefault();

    e.stopPropagation();


  document.onmouseup = function(e) {

    if (dragObj) {

      dragObj = null;

      window.removeEventListener('mousemove', dragObject, true);

      window.removeEventListener('touchmove', dragObject, true);

    }

  }
  
    if(dragObj == null) {

      return;

    } else if(e.type=="mousemove") {

      dragObj.style.left = e.clientX-xOffset +"px"; 
       dragObj.style.transform = "inherit";
      dragObj.style.top = e.clientY-yOffset +"px";

    } else if(e.type=="touchmove") {

      dragObj.style.left = e.targetTouches[0].clientX-xOffset +"px";
      dragObj.style.transform = "inherit";
      dragObj.style.top = e.targetTouches[0].clientY-yOffset +"px";

    }

  }
}
