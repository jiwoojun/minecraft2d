tiles.loadMap(tiles.createMap(tilemap`overworld`))
let steve = sprites.create(img`
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
