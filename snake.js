var x,y;
var step=10;
var flag=0;
var message="Hello, World! ";
message=message.split("");
var xpos=new Array();
var ypos=new Array();
for (i=0;i<=message.length-1;i++) {
	xpos[i]=-50;
	ypos[i]=-50;
}
function handlerMM(e){
	x = document.body.scrollLeft+event.clientX;
	y = document.body.scrollTop+event.clientY;
	flag=1;
}
function makesnake() {
	if (flag===1) {
    	for (i=message.length-1; i>=1; i--) {
   			xpos[i]=xpos[i-1]+step;
			ypos[i]=ypos[i-1];
    	}		
		xpos[0]=x+step;
		ypos[0]=y;
		for (i=0; i<message.length-1; i++) {
    		var thisspan = eval("span"+(i)+".style");
    		thisspan.left=xpos[i];
			thisspan.top=ypos[i];
    	}
	}
	var timer=setTimeout("makesnake()",20)
}

document.write("<style>");
document.write(".spanstyle {");
document.write("	COLOR: #ffffff; FONT-FAMILY: Tempus Sans ITC; FONT-SIZE: 10pt; FONT-WEIGHT: bold; POSITION: absolute; TOP: -50px; VISIBILITY: visible");
document.write("}</style>");

for (i=0;i<=message.length-1;i++) {
    document.write("<span id='span"+i+"' class='spanstyle'>");
	document.write(message[i]);
    document.write("</span>");
}

document.onmousemove = handlerMM;

function click(){
if(event.button==2) {alert("hey");}
}
document.onmousedown=click

window.addEventListener("load", (event) => {
	makesnake();
});
