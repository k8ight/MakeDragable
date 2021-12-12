function makeDragable(dragHandle, dragTarget) {

  let dragObj = null; 

  let xOffset = 0; 

  let yOffset = 0;



  document.querySelector(dragHandle).addEventListener("mousedown", startDrag, true);

  document.querySelector(dragHandle).addEventListener("touchstart", startDrag, true);
  


  /*sets offset parameters and starts listening for mouse-move*/

  function startDrag(e) {

    e.preventDefault();

    e.stopPropagation();

    dragObj = document.querySelector(dragTarget);

    dragObj.style.position = "absolute";

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

      dragObj.style.top = e.clientY-yOffset +"px";

    } else if(e.type=="touchmove") {

      dragObj.style.left = e.targetTouches[0].clientX-xOffset +"px";

      dragObj.style.top = e.targetTouches[0].clientY-yOffset +"px";

    }

  }



  /*End dragging*/



}



function clse(){
document.getElementById("divID").style.display = 'none';

window.location.replace("./");
}
