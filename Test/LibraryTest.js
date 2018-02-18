window.onload = function(){
    const canvas = document.getElementById("window")
    const context = canvas.getContext("2d")
    context.translate(.5,.5)
    var circle = HITBOX.CIRCLE(425,430,80)
    var circle2 = HITBOX.CIRCLE(100,200,30)    
    
    window.addEventListener("keydown", function (event) {
	
switch(event.key){
	case "a":
    circle2.setLocation(circle2.x-5,circle2.y)
	break
    case "s":
    circle2.setLocation(circle2.x,circle2.y+5)
    break
    case "d":
    circle2.setLocation(circle2.x+5,circle2.y)
    break
    case "w":
    circle2.setLocation(circle2.x,circle2.y-5)
    break
	default:
	break;
}


event.preventDefault();
}, true);
    
    
    
    function draw(){
       context.fillStyle="#FFFFFF";
       context.fillRect(0,0,canvas.width,canvas.height)
       circle2.drawBorder(canvas)
       circle.drawBorder(canvas)
       console.log(circle2.isContact(circle))
    }
    
    
    setInterval(draw, 1000/60)   
}