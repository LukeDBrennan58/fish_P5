function initiallizePlayer()
{
  //player
  {
    player = new Sprite()
    player.width = 60
    player.height = 50
    player.y = height/3 - player.height/4
    player.x = width/2
    player.realY = player.y + player.height/4
    player.overlaps(allSprites)
    player.rotationLock = true

    player.max = 3.5  //base speed
    player.Lspd = player.max  //initiallizing right and left speeds
    player.Rspd = player.max
    player.Lbound = margin
    player.Rbound = width - margin
    
    player.maxhp = 3
    player.alive = true
    player.hp = player.maxhp
    player.money = 0
    
    player.fishCount =
      {
        'tuna': [0,0,0,0,0],
        'swordFish': [0,0,0,0,0],
        'redSnapper': [0,0,0,0,0],
        'guppy': [0,0,0,0,0],
        'puffer': [0,0,0,0,0],
        'shark': [0,0,0,0,0]
      }
    
    iFrames = 1600
    
    heart = new Group()
    heart.overlaps(allSprites)
    heart.radius = margin/3
    heart.color = color(255,0,0)
    heart.image = spriteArt(heartText,2,heart.palette)
    heart.y = height - margin/2
    heart.x = margin + heart.radius
    
  }
  
  //hook
  {
    hook = new Sprite()
    hook.width = player.width/6
    hook.height = hook.width
    hook.y = player.y + player.height/4
    hook.x = player.x
    hook.overlaps(allSprites)
    hook.color = color(50)
    
    hook.hasFish = false
    hook.fish = 0
    hook.fishWeight = 0
    
    hook.dpth = hook.y-player.y
    hook.max = 2.0    //base speed
    hook.defaultLowerSpeed = 3.45
    hook.lowerSpeed = hook.defaultLowerSpeed
    hook.defaultRaiseSpeed = 3
    hook.raiseSpeed = hook.defaultRaiseSpeed
    hook.speed = 0
    //hook.loweringFactor = 1.15 //multiplier for lowering the hook
    hook.vertMoving = false
    hook.visible = false
    hook.price = 250
  }
  
  //line
  {
    fishLine = new Sprite()
    fishLine.height = 0.5
    fishLine.overlaps(allSprites)
    fishLine.defaultColor = color(0)
    fishLine.color = fishLine.defaultColor
    fishLine.y = abs(player.y-hook.y)/2 + player.y
    fishLine.rotation = 90
    
    fishLine.inTact = true
    
    fishLine.visible = false
  }
}