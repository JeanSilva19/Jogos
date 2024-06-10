scene.onOverlapTile(SpriteKind.Player, assets.tile`Coin`, function (sprite, location) {
    music.play(music.tonePlayable(randint(220, 587), music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
})
function Fantasmas () {
    mySprite2 = sprites.create(assets.image`1`, SpriteKind.Enemy)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 1 1 5 5 1 1 5 5 5 . . 
        . . 5 5 5 1 1 5 5 1 1 5 5 5 . . 
        . . 5 5 5 1 1 5 5 1 1 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 . 5 . . 5 5 . . 5 . 5 . . 
        . . 5 . 5 . . 5 5 . . 5 . 5 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 . . . 
        . . 8 8 8 1 1 8 8 1 1 8 8 8 . . 
        . . 8 8 8 1 1 8 8 1 1 8 8 8 . . 
        . . 8 8 8 1 1 8 8 1 1 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 . 8 . . 8 8 . . 8 . 8 . . 
        . . 8 . 8 . . 8 8 . . 8 . 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(14, 1))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(12, 14))
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(1, 12))
    mySprite2.setBounceOnWall(true)
    mySprite3.setBounceOnWall(true)
    mySprite4.setBounceOnWall(true)
    mySprite2.setVelocity(15, 15)
    mySprite3.setVelocity(15, 20)
    mySprite4.setVelocity(-15, 10)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`myImage`)
mySprite = sprites.create(assets.image`Teste`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
assets.animation`Pacman`,
200,
true
)
scene.setBackgroundColor(15)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level4`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
info.setLife(3)
Fantasmas()
game.onUpdate(function () {
    if (mySprite.x >= 240) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 7))
    }
})
game.onUpdate(function () {
    if (mySprite.x <= 10) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 8))
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() >= 142) {
        game.gameOver(true)
    }
})
