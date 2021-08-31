controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (steve.isHittingTile(CollisionDirection.Bottom)) {
        steve.vy = -60
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (steve.isHittingTile(CollisionDirection.Bottom)) {
        steve.vy = -60
    }
})
let steve: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ffeeeeeeeffefffeffeeeeefefffffefffffeffffeefffffefffffefffff
    fffeeeeefffeefeefffeeeefefeeeeefeeeeefeeffefeeefefeeeeeeefee
    feffeeeffefeefeefeffeeefefeeeeefeeeeefeeefefeeefefeeeeeeefee
    feeffeffeefeefeefeeffeefeffffeefeeeeefffffefffffeffffeeeefee
    feeefffeeefeefeefeeeffefefeeeeefeeeeefffeeefeeefefeeeeeeefee
    feeeeeeeeefeefeefeeeefffefeeeeefeeeeefefffefeeefefeeeeeeefee
    feeeeeeeeefefffefeeeeeffefffffefffffefeeefefeeefefeeeeeeefee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
pause(1000)
game.splash("PRESS A TO START!!!!!!!!!!!!", "(pls)")
tiles.loadMap(tiles.createMap(tilemap`overworld`))
steve = sprites.create(img`
    . . . e e e e e e e e e . . . . 
    . . . e d d d d d d d e . . . . 
    . . . . d f d d d f d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . d f f f f f d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . d d 8 8 8 8 8 8 8 d d . . . 
    . . d d 8 8 8 8 8 8 8 d d . . . 
    . . d d 8 8 8 8 8 8 8 d d . . . 
    . . . . e e e f e e e . . . . . 
    . . . . e e e f e e e . . . . . 
    . . . . e e e f e e e . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(steve, 100, 0)
scene.cameraFollowSprite(steve)
steve.ay = 100
