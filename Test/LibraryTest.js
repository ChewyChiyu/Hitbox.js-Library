window.onload = function(){
    const canvas = document.getElementById("window")
    const context = canvas.getContext("2d")
    context.translate(.5,.5)
    var circle = HITBOX.CIRCLE(125,30,40)
    var rectangle = HITBOX.RECTANGLE(100,200,100,100)    
    
    window.addEventListener("keydown", function (event) {
	
switch(event.key){
	case "a":
    circle.setLocation(circle.x-5,circle.y)
	break
    case "s":
    circle.setLocation(circle.x,circle.y+5)
    break
    case "d":
    circle.setLocation(circle.x+5,circle.y)
    break
    case "w":
    circle.setLocation(circle.x,circle.y-5)
    break
	default:
	break;
}


event.preventDefault();
}, true);
    
    
    
    function draw(){
       context.fillStyle="#FFFFFF";
       context.fillRect(0,0,canvas.width,canvas.height)
       rectangle.drawBorder(canvas)
       circle.drawBorder(canvas)
       console.log(rectangle.isContact(circle))
    }
    
    
    setInterval(draw, 1000/60)   
}