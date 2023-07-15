function setup() 
{
  Canvas(600,900)
  strokeWeight(0)
  
  margin = 50 //distance between the border and the edge of screen
  I = Infinity
  
  sceneSet = 0
  gameState = 0
  startTime = 0
  goal = 0
  
  elasticity = 40  //how far the hook lags behind when boat is moving
  damageTime = -1 * I
  palInitiallized = false
  gameWon = false
  
  level = random([1,2,3])
  
  initiallizeLevelData()
  initiallizePlayer()
  initiallizeNPCs()
  initiallizeEnviroment()
  initiallizeHUD()
  
  initiallizeLayers()
  
  allSprites.overlaps(allSprites)
  startScene()
}

function draw() 
{
  hacks()
  /*player.text = '\n\n' + (floor(frameRate()))
  player.textColor = color(255,255,100)*/
  
  if(gameState == 0) //game state of 0 is the menu screen
    {
      fishController()
      paletteUpdate()
      
      beginText.text = 'Press Space'
      beginText.textSize = 50
      blinkText(beginText, 500)
      
      if(kb.presses('space'))
        {
          level = 1
          start()
        }
    }
  
  else if(gameState == 0.5) //game state of 0.5 is the intro animation
    {
      introText.visible = true
      introText.text = levelIntroText[level]
      
      hook.x = player.x //locks hook x to player x for animation
      
      player.direction = 'right'
      
      if(!gameWon)
        {
          if(player.x < width/3)  //brings the boat to 1/3 the way across screen
            {
              player.speed = player.max/3  //1/3 of normal speed
              //hook.y = player.y
            }
          else
            {
              player.speed = 0  //stops the boat then lowers line
              hook.y = hook.y+1
              hook.visible = true
              fishLine.visible = true
            }

          if(hook.y > height/2) //ends animation sending the game to state 1
            {
              startPlaying()
            }
        }
    }
  
  else if(gameState == 1) //game state of 1 is the main game
    {
      //makes everything visible if not already, only border is mandatory here the rest is for testing purposes
      
      playerController()
      hookController()
      fishController()
      HUD()
      
      if(canAdvance())
        {
          beginText.textSize = 35
          beginText.text = 'Press Enter to Advance'
          blinkText(beginText)
          
          if(kb.presses('enter'))
            {
              if(level == 5)
                {
                  gameWon = true
                  start()
                  
                }
              else
                {
                  level = level + 1
                  start()
                }
              
              player.money = 0

            }
        }
      
    }
  
  else if(gameState == 2)
    {
      if(kb.presses('space'))
        {
          gameWon = false
          endScreen.visible = false
          gameState = 0
      }
    }
  
  else if(gameState == -1)  //game state of -1 is limbo after death
    {
      player.visible = false
      hook.visible = false
      fishLine.visible = false
      fishController()
      HUD()
      
      if(kb.presses('enter'))
        {
          start(1)
        }
    }
  
  setScene()
  lineController()
  allSprites.cull(width)
  
}

function hacks()
{
  if(kb.presses('space') && gameState == 1)
  {
    player.money =  player.money + 1000
  }
  if(kb.presses('t'))
    {
      //redSnapper.randomGap = 0
    }

}