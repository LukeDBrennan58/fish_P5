function initiallizeNPCs()
{
  //fish
  {
    fish = new Group()
    fish.collider = 'kinematic'
    fish.overlaps(allSprites)
    fish.spawnDist = width/8
    fish.x = width + fish.spawnDist
    fish.y = height + fish.spawnDist
    
    
    tuna = new fish.Group()
    tuna.name = 'tuna'
    tuna.art = tunaText
    tuna.iconArt = tunaText
    tuna.weight = 0.3
    tuna.danger = 0
    tuna.price = 150
    
    tuna.amp = (1/8)
    tuna.lastSpawn = 0
    tuna.randomGap = 0
    tuna.spawnDist = fish.spawnDist
    tuna.canCatch = true
    
    tuna.V = 
      [0,
      {'startGap': 0, 'avgGap': 1600, 'avgSpd': 1.2, 'avgDepth': height*58/100, 'dpthVar': height * 15/100},
      {'startGap': 0, 'avgGap': 1800, 'avgSpd': 1.2, 'avgDepth': height*60/100, 'dpthVar': height * 18/100},
      {'startGap': 0, 'avgGap': 1600, 'avgSpd': 1.2, 'avgDepth': height*60/100, 'dpthVar': height * 18/100},
      {'startGap': 0, 'avgGap': 1600, 'avgSpd': 1.2, 'avgDepth': height*60/100, 'dpthVar': height * 18/100},
      {'startGap': 0, 'avgGap': 1600, 'avgSpd': 1.2, 'avgDepth': height*60/100, 'dpthVar': height * 18/100}
      ]
    
    
    swordFish = new fish.Group()
    swordFish.name = 'swordFish'
    swordFish.art = swordText
    swordFish.iconArt = swordIcon
    swordFish.weight = 0.4
    swordFish.danger = 1
    swordFish.price = 200
    
    swordFish.amp = 0
    swordFish.lastSpawn = 0
    swordFish.randomGap = 0
    swordFish.spawnDist = width/2
    swordFish.canCatch = true
    
    swordFish.V = 
      [0,
      {'startGap': 10000, 'avgGap': 16000, 'avgSpd': 3.4, 'avgDepth': height*50/100, 'dpthVar': height/20},
      {'startGap': 10000, 'avgGap': 16000, 'avgSpd': 3.4, 'avgDepth': height*50/100, 'dpthVar': height/20},
      {'startGap': 10000, 'avgGap': 16000, 'avgSpd': 3.4, 'avgDepth': height*50/100, 'dpthVar': height/20},
      {'startGap': 10000, 'avgGap': 16000, 'avgSpd': 3.4, 'avgDepth': height*50/100, 'dpthVar': height/20},
      {'startGap': 10000, 'avgGap': 16000, 'avgSpd': 3.4, 'avgDepth': height*50/100, 'dpthVar': height/20}
      ]
    
    redSnapper = new fish.Group()
    redSnapper.name = 'redSnapper'
    redSnapper.art = redText
    redSnapper.iconArt = redText
    redSnapper.weight = 0.65
    redSnapper.danger = 0
    redSnapper.price = 450
    
    redSnapper.amp = (1/8)
    redSnapper.lastSpawn = 0
    redSnapper.randomGap = 0
    redSnapper.spawnDist = fish.spawnDist
    redSnapper.canCatch = true
    
    redSnapper.V = 
      [0,
      {'startGap': 20000, 'avgGap': 17000, 'avgSpd': 0.9, 'avgDepth': height*70/100, 'dpthVar': height * 10/100},
      {'startGap': 10000, 'avgGap': 12000, 'avgSpd': 0.9, 'avgDepth': height*65/100, 'dpthVar': height * 10/100},
      {'startGap': 10000, 'avgGap': 12000, 'avgSpd': 0.9, 'avgDepth': height*65/100, 'dpthVar': height * 10/100},
      {'startGap': 10000, 'avgGap': 12000, 'avgSpd': 0.9, 'avgDepth': height*65/100, 'dpthVar': height * 10/100},
      {'startGap': 10000, 'avgGap': 12000, 'avgSpd': 0.9, 'avgDepth': height*65/100, 'dpthVar': height * 10/100}
      ]
    
    guppy = new fish.Group()
    guppy.name = 'guppy'
    guppy.art = guppyText
    guppy.iconArt = guppyText
    guppy.weight = 0.1
    guppy.danger = 0
    guppy.price = 5
    
    guppy.amp = (1/4)
    guppy.lastSpawn = 0
    guppy.randomGap = 0
    guppy.spawnDist = fish.spawnDist
    guppy.canCatch = true
    
    guppy.V = 
      [0,
      {'startGap': I, 'avgGap': 700, 'avgSpd': 1.6, 'avgDepth': height*50/100, 'dpthVar': height/10},
      {'startGap': 0, 'avgGap': 700, 'avgSpd': 1.6, 'avgDepth': height*50/100, 'dpthVar': height/10},
      {'startGap': 0, 'avgGap': 750, 'avgSpd': 1.6, 'avgDepth': height*50/100, 'dpthVar': height/10},
      {'startGap': 0, 'avgGap': 750, 'avgSpd': 1.6, 'avgDepth': height*50/100, 'dpthVar': height/10},
      {'startGap': 0, 'avgGap': 750, 'avgSpd': 1.6, 'avgDepth': height*50/100, 'dpthVar': height/10}
      ]
    
    puffer = new fish.Group()
    puffer.name = 'puffer'
    puffer.art = pufferText
    puffer.iconArt = pufferText
    puffer.weight = 0.2
    puffer.danger = 0
    puffer.price = 750
    
    puffer.amp = (1/8)
    puffer.spawnDist = fish.spawnDist
    puffer.lastSpawn = 0
    puffer.randomGap = 0
    puffer.canCatch = true
    
    puffer.sight = 50
    
    puffer.warning = 0
    pufferWarn = new Group()
    pufferWarn.radius = puffer.sight
    pufferWarn.color = color(255,220,220,0)
    pufferWarn.stroke = color(255,220,220,50)

    
    puffer.V = 
      [0,
      {'startGap': I,    'avgGap': 6000,  'avgSpd': 1, 'avgDepth': height*60/100, 'dpthVar': height/12},
      {'startGap': 4000, 'avgGap': 6000,  'avgSpd': 1, 'avgDepth': height*60/100, 'dpthVar': height/12},
      {'startGap': 6000, 'avgGap': 10000, 'avgSpd': 1, 'avgDepth': height*60/100, 'dpthVar': height/12},
      {'startGap': 6000, 'avgGap': 10000, 'avgSpd': 1, 'avgDepth': height*60/100, 'dpthVar': height/12},
      {'startGap': 6000, 'avgGap': 10000, 'avgSpd': 1, 'avgDepth': height*60/100, 'dpthVar': height/12}
      ]
    
    shark = new fish.Group()
    shark.name = 'shark'
    shark.art = sharkText
    shark.iconArt = sharkIcon
    shark.weight = 1.5
    shark.danger = 0
    shark.price = 1250
    
    shark.amp = 0
    shark.spawnDist = fish.spawnDist
    shark.lastSpawn = 0
    shark.randomGap = 0
    shark.canCatch = true
    
    shark.riseAngle = 7
    
    shark.V = 
      [0,
      {'startGap': I,     'avgGap': 20000, 'avgSpd': 3.5, 'avgDepth': height*95/100, 'dpthVar': height/20},
      {'startGap': I,     'avgGap': 20000, 'avgSpd': 3.5, 'avgDepth': height*95/100, 'dpthVar': height/20},
      {'startGap': 10000, 'avgGap': 20000, 'avgSpd': 3.5, 'avgDepth': height*95/100, 'dpthVar': height/20},
      {'startGap': 10000, 'avgGap': 20000, 'avgSpd': 3.5, 'avgDepth': height*95/100, 'dpthVar': height/20},
      {'startGap': 10000, 'avgGap': 20000, 'avgSpd': 3.5, 'avgDepth': height*95/100, 'dpthVar': height/20}
      ]
    
    catFish = new fish.Group()
    catFish.name = 'catFish'
    catFish.art = tunaText
    catFish.iconArt = tunaText
    catFish.weight = 0.1
    catFish.danger = 0
    catFish.price = 5
    
    catFish.amp = (1/4)
    catFish.lastSpawn = 0
    catFish.randomGap = 0
    catFish.spawnDist = fish.spawnDist
    catFish.canCatch = true
    
    catFish.waitTime = 2000
    
    catFish.V = 
      [0,
      {'startGap': I, 'avgGap': 7000, 'avgSpd': 1.6, 'avgDepth': height*90/100, 'dpthVar': 0},
      {'startGap': I, 'avgGap': 7000, 'avgSpd': 1.6, 'avgDepth': height*90/100, 'dpthVar': 0},
      {'startGap': I, 'avgGap': 7500, 'avgSpd': 1.6, 'avgDepth': height*90/100, 'dpthVar': 0},
      {'startGap': I, 'avgGap': 7500, 'avgSpd': 1.6, 'avgDepth': height*90/100, 'dpthVar': 0},
      {'startGap': 0, 'avgGap': 2000, 'avgSpd': 0.4, 'avgDepth': height*90/100, 'dpthVar': 0}
      ]
    
    fish.fishList = [
      tuna,
      swordFish,
      redSnapper,
      guppy,
      puffer,
      shark,
      catFish
    ]
    
    
  }
  
  //birds
  {
    bird = new Group()
    bird.name = 'bird'
    bird.overlaps(allSprites)
    bird.radius = 14
    bird.y = 0 - height/10

    bird.diving = true
    bird.entered = false
    bird.lastSpawn = 0
    bird.randomGap = 0
    bird.spawnSide = -1
    
    bird.V = 
      [0,
      {'startGap': 5000, 'avgGap': 6000, 'avgSpd': 3.5, 'avgDepth': 1, 'dpthVar': 1},
      {'startGap': 5000, 'avgGap': 6000, 'avgSpd': 3.5, 'avgDepth': 1, 'dpthVar': 1},
      {'startGap': 5000, 'avgGap': 6000, 'avgSpd': 3.5, 'avgDepth': 1, 'dpthVar': 1},
      {'startGap': 5000, 'avgGap': 6000, 'avgSpd': 3.5, 'avgDepth': 1, 'dpthVar': 1},
      {'startGap': 5000, 'avgGap': 6000, 'avgSpd': 3.5, 'avgDepth': 1, 'dpthVar': 1}
      ]

  }
  
  //iceberg
  {
    iceberg = new Group()
    iceberg.name = 'iceberg'
    iceberg.y = height/3
    iceberg.color = color(220,240,255)
    
    iceberg.spawnDist = fish.spawnDist
    iceberg.lastSpawn = 0
    iceberg.randomGap = 0
    iceberg.arrived = false
    iceberg.lingerTime = 20000
    
    iceberg.height = 50
    iceberg.width = 100
    
    iceberg.V = 
      [0,
      {'startGap': I   , 'avgGap': iceberg.lingerTime * 1.7, 'avgSpd': 1},
      {'startGap': I   , 'avgGap': iceberg.lingerTime * 1.7, 'avgSpd': 1},
      {'startGap': I   , 'avgGap': iceberg.lingerTime * 1.7, 'avgSpd': 1},
      {'startGap': 1000, 'avgGap': iceberg.lingerTime * 1.7, 'avgSpd': 1},
      {'startGap': 5000, 'avgGap': iceberg.lingerTime * 1.7, 'avgSpd': 1}
      ]
  }
}