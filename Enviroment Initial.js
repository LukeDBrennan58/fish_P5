
function initiallizeEnviroment()
{
  //enviroment
  {
    BG = new Group()
    BG.collider = 'static'
    
    coral = new BG.Group()
    coral.y = height - margin*5/4
    coral.x = margin*2/3
    coral.color = color(205, 65, 95)
    
    coralColors = [color(207, 35, 78),
                   color(205, 40, 110),
                   color(204, 47, 141),
                   color(174, 45, 181), 
                   color(122, 47, 145),
                   color(140, 52, 199),
                   color(74, 207, 187),
                   color(187, 242, 104), 
                   color(226, 232, 118)]
    coral.image = spriteArt(coralText,2.5)
    
    mud = new Sprite()
    mud.width = width * 5/4
    mud.height = margin * 5/4
    mud.x = width/2
    mud.y = height - margin * 3/8
    mud.color = color(62, 53, 11)
    mud.visible = false
  }
  
  //ocean
  {
    ocean = new Sprite()
    ocean.width = width + 2
    ocean.height = height*2/3
    ocean.collider = 'static'
    ocean.color = color(50,180,255)
    ocean.y = height*2/3 + 1
    ocean.x = width/2
    ocean.rotationLock = true
    
    
  }
  
  //endScreen
  {
    endScreen = new Sprite()
    endScreen.layer = 10
    endScreen.text = 'You Won'
    endScreen.textSize = 50
    endScreen.textColor = color(255)
    endScreen.visible = false
    endScreen.width = width *9/8
    endScreen.height = height * 9/8
  }
}