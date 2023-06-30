# MakeDragable
Making any HTML5 &lt;div> dragable using js  


# Using Instruction or Little Demo:
See on demo folder

repeat makedrag("dividh","divid")  for each <div>

# Using MakeDrag_multi:
<style>
.k8-box{
z-index:50;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
min-height:auto;
min-width:512px;
box-sizing: border-box;
box-shadow: -2px 8px 15px #8a795d,
	2px 8px 15px #8a795d;
}
.k8-box .whead{
	box-sizing: border-box;
	width:100%;
	background-color:#f4511e;
	display:inline-block;
	padding:4px 6px;
	cursor:pointer;
}
.k8-box .whead span{
	color:#ffffff;
	font-size:16px;
	font-weight:600;
}
.k8-box .whead button{
 height:32px;
 width:32px;
 background-color:#f4511e;
 color:#FFFFFF;
 font-weight:900;
 font-size:18px;
 float:right;
}

.k8-box .wbody{
	border:1px solid #f4511e;
	box-sizing: border-box;
	width:100%;
	height: 80%;
	padding:4px;
	height:512px;
	 background-color:#ffffff;
	 overflow:auto;
}
</style>
HTML (2 window ) : 
<div class="k8-box" ><div class="whead"><span> DOCUMENT TITLE</span>span><button onclick="this.parentNode.parentNode.remove();">X</button></div>
<div class="wbody">
CONTENT TEXT / HTML 
</div></div>

<div class="k8-box" ><div class="whead"> <span>DOCUMENT TITLE</span>span><button onclick="this.parentNode.parentNode.remove();">X</button></div>
<div class="wbody">
CONTENT TEXT / HTML 
</div></div>

include script page bottom !

add line 

makeDragable(".whead");
