// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Doras House":
            case "level2":return tiles.createTilemap(hex`0a000a0001010101010101010101010202020202020202010102020202020202020101020202020202020201010202020202020202010102020202020202020101020202020202020201010202020202020202010102020202020202020101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`140014000303030303030303030303030303080a0a0a0a090302030c03030306070302030403030503050d050202030303020206070305030303030504050403020103030303030607030303030305030202050203030302030303060703030103030305030305030305030b0302030302030303030303030505030303020302030204020303030303030303030502030303030304030202030303030c0203030305050503020303030302030203020303030303040303030303030303030303030304030301030303030303030203030301030302030303030303030303030303040303030303020303030303030302030304030303030303030303030302030303030303030303030503030303030303040303030304030303030303030302030403030303030305030203030b0303020303030203030b03030303030303020303030303040302020202020303030303030303030304030203030302020202040303030304030c0303030303030302040202020202030303030303030303030304020202020202020202040303030303030304`, img`
..............222222
...2.............2.2
..........2....2.2..
.2............2...2.
...........2...2..2.
.2..............2...
.................2..
............2....222
....................
.............2......
.....2..............
....................
....................
.2..................
............2.......
....................
....................
...............2....
....................
....................
`, [myTiles.transparency16,sprites.castle.rock0,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.builtin.forestTiles21,sprites.builtin.forestTiles20,sprites.builtin.forestTiles22,sprites.swamp.swampTile1,sprites.castle.saplingPine,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
