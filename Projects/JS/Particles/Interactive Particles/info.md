## HSL = Hue Saturation Lightness

## Hue represens the type of color: 

    0 / 360 => red
    120 => green
    240 => blue

## If it exceeds 360 it repeats itself

## Saturation is the intensity of color from 0% (desaturated / grascale) - 100% (fully saturated / pure color)

## Lightness represents the brightness from 0% (fully black) - 100% (fully white) so 50% is the original color

> BreakDown: 

# Unlike the previous code, new instances with arbitrary position, size, color and speed is only created when the mouse is moved. The current position of the cursor is stored in a mouse object. More number of instace created at once = More thicc trial

# You might have noticed the animate function is called regardless of the array being empty. This won't be an issue because the array's length is 0 so the loops won't execute and 'Index Out of Range' won't occur.

# requestAnimationFrame() is an asynchronous function so if an event does happen during it's endless calling then it stops the execution mid way and allows the event to do it's thing. So no problem there as well.

# so the newly created objects stored in the array are looped through and draw and update methods are applied to them. In update method their size is eventually reduced and removed when they reach 0.

# using a black rectangle to cover the canvas each time the canvas is re-drawn is an alternative way to using clearRect() but using rectangle of very low alpha enables us to see the path trail of the particles as well creating a cool effect.

# Finally the hue is periodically added to create a visual effect. Be sure to add it only after every full loop else brain damage.