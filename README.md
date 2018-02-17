# Hitbox.js-Library
Rectangle and Circle Contact Detection Library Javascript

## Installation
```html
   <script src="Hitbox/Hitbox.min.js"></script>
```
## Usage
```javascript
    //Create new instance of hitbox with
    var circle = HITBOX.CIRCLE(x,y,r) //for circle 
    var rectangle = HITBOX.RECTANGLE(x,y,w,h) //for rectangle   
    
    //Set-Change location of hitbox
    rectangle.setLocation(x,y)
    circle.setLocation(x,y)
    
    //Set-Change size of hitbox
    rectangle.setSize(w,h)
    circle.setSize(r)
     
    //Draw hitbox on canvas 
    rectangle.drawBorder(canvas)
    circle.drawBorder(canvas)
    
    //Find if hitboxes are in contact with each other
    rectangle.isContact(circle) //returns boolean
    circle.isContact(rectangle)
```
