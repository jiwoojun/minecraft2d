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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(steve), CollisionDirection.Right))) {
        if (tiles.tileAtLocationEquals(tiles.locationInDirection(tiles.locationOfSprite(steve), CollisionDirection.Right), assets.tile`bedrock`)) {
            tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(steve), CollisionDirection.Right), false)
            tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(steve), CollisionDirection.Right), assets.tile`air`)
        } else {
            tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(steve), CollisionDirection.Right), assets.tile`bedrock`)
        }
    }
})
let steve: Sprite = null
game.splash("MINECRAFT", "press A to start (pls)")
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
