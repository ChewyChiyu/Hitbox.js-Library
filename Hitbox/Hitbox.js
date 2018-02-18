

var HITBOX = {
    RECTANGLE: function(x,y,w,h){
        if(!isNumber(x,y,w,h)){ return null }
        return new RECTANGLE(x,y,w,h)
    }, 
    CIRCLE: function(x,y,r){
        if(!isNumber(x,y,r)){ return null }
        return new CIRCLE(x,y,r)
    }
}
    
function CIRCLE(x,y,r){
    this.x = x
    this.y = y
    this.r = r
}    

CIRCLE.prototype = {
    setLocation: function(x,y){
        if(isNumber(x,y)){
            this.x = x
            this.y = y
        }
    },
    setSize: function(r){
        if(isNumber(r) && r >=0 ){
            this.r = r
        }
    },
    drawBorder: function(canvas){
        if(canvas==null){ return }
        var context = canvas.getContext("2d")
        context.fillStyle = "#000000" 
        context.beginPath();
        context.arc(this.x,this.y,this.r,0,2*Math.PI);
        context.stroke();
    },
    isContact: function(hitbox){
        if(hitbox instanceof CIRCLE){
            return(dist(this.x,this.y,hitbox.x,hitbox.y) <= hitbox.r + this.r)
        }
        if(hitbox instanceof RECTANGLE){
            var closestX = clamp(this.x, hitbox.x, hitbox.x+hitbox.w)
            var closestY = clamp(this.y, hitbox.y, hitbox.y+hitbox.h)

            var distanceX = this.x - closestX
            var distanceY = this.y - closestY
            
            var distanceSquared = (distanceX * distanceX) + (distanceY * distanceY)
            return distanceSquared < (this.r * this.r)  
        }
    }
}
    
function RECTANGLE(x,y,w,h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
}

RECTANGLE.prototype = {
    setLocation: function(x,y){
        if(isNumber(x,y)){
            this.x = x
            this.y = y
        }
    },
    setSize: function(w,h){
        if(isNumber(w,h) && w >= 0 && h >= 0){
            this.w = w
            this.h = h
        }
    },
    drawBorder: function(canvas){
        if(canvas==null){ return }
        var context = canvas.getContext("2d")
        context.fillStyle = "#000000" 
        context.rect(this.x,this.y,this.w,this.h)
        context.stroke()
    }, 
    isContact: function(hitbox){
        if(hitbox instanceof RECTANGLE){
            return(this.x+this.w >= hitbox.x && hitbox.x+hitbox.w >= this.x && this.y+this.h >= hitbox.y && hitbox.y+hitbox.h >= this.y)
        }
        if(hitbox instanceof CIRCLE){
            var closestX = clamp(hitbox.x, this.x, this.x+this.w)
            var closestY = clamp(hitbox.y, this.y, this.y+this.h)

            var distanceX = hitbox.x - closestX
            var distanceY = hitbox.y - closestY
            
            var distanceSquared = (distanceX * distanceX) + (distanceY * distanceY)
            return distanceSquared < (hitbox.r * hitbox.r)
        }
    }   
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

function dist(a,b,c,d){
    var e = a - c
    var f = b - d
    return Math.sqrt( e*e + f*f );
}
function isNumber(){
    for(var i = 0; i < arguments.length; i++){
        var num = arguments[i]
        if(!(typeof num == 'number')){ return false }
    }
    return true
}