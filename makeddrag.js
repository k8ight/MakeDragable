<script>
function makeDragable( dragTarget) {
dragElement(document.getElementById(dragTarget));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "h")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "h").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
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
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }}}


function clse(){
document.getElementById("tdiv").style.display = 'none';
document.getElementById("lgdiv").style.display = 'none';
document.getElementById("acdiv").style.display = 'none';
window.location.replace("./");
}

function lgf(){
	document.getElementById("login").style.display = 'block';
	document.getElementById("regis").style.display = 'none';
}

function regf(){
	document.getElementById("login").style.display = 'none';
	document.getElementById("regis").style.display = 'block';
 }
 
function cpwd(){
	var psd=document.getElementById("password").value;
	var cpsd=document.getElementById("cpassword").value;
	 var agree = document.getElementById("agree");
	if (psd === cpsd) {
document.getElementById("perr").innerHTML = '';
	document.getElementById("cperr").innerHTML = '';
	if (agree.checked == true){
    document.getElementById("regsub").style.display = "block";
	document.getElementById("regsub").style.margin = "0px auto";
  } else {
    document.getElementById("regsub").style.display = "none";
  }
}
else{
	document.getElementById("perr").innerHTML = 'Password Does Not Match';
	document.getElementById("cperr").innerHTML = 'Password Does Not Match';
}}
 function shpf(){
	 document.getElementById("acdiv").style.display = 'block';
 }
</script>
