window.onload = function(){
    const canvas = document.getElementById("window")
    const context = canvas.getContext("2d")
    context.translate(.5,.5)
    var circle = HITBOX.CIRCLE(425,430,80)
    var rectangle = HITBOX.RECTANGLE(100,200,30,30)    
    
    window.addEventListener("keydown", function (event) {
	
switch(event.key){
	case "a":
    rectangle.setLocation(rectangle.x-5,rectangle.y)
	break
    case "s":
    rectangle.setLocation(rectangle.x,rectangle.y+5)
    break
    case "d":
    rectangle.setLocation(rectangle.x+5,rectangle.y)
    break
    case "w":
    rectangle.setLocation(rectangle.x,rectangle.y-5)
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