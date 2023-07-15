function start(dead)
{
  palInitiallized = false
  startTime = millis()
  
  border.visible = false
  moneyText.visible = false
  goalText.visible = false
  goalBarBack.visible = false
  goalBarGauge.visible = false
  fishGoal.visible = false
  heart.visible = false
  beginText.visible = false
  chaChing.visible = false
  hook.visible = false
  fishLine.visible = false
  questIcon.visible = false
  questColon.visible = false
  mud.visible = false
  
  player.visible = true
  
  player.x = 0 - width/8  //moves player off the left side of the screen
  hook.y = player.y + 1
  player.mirror.x = false
  
  tuna.lastSpawn = 0
  swordFish.lastSpawn = 0
  redSnapper.lastSpawn = 0
  guppy.lastSpawn = 0
  puffer.lastSpawn = 0
  bird.lastSpawn = 0
  
  BG.removeAll()
  fish.removeAll()
  bird.removeAll()
  chaChing.removeAll()
  iceberg.removeAll()
  
  quest.Up = false
  quest.Gap = I
  quest.current = false
  removeQuest()
  
  if(dead)
    {
      gameState = 0
      level = 1
    }
  else if(gameWon)
    {
      gameState = 2
      endScreen.visible = true
      level = 1
    }
  else
    {
      gameState = 0.5
    }
  
  paletteUpdate()
  startScene()
  upgradeCounter()
  
}

function startPlaying()
{
  gameState = 1
  
  border.visible = true
  player.alive = true
  hook.visible = true
  fishLine.visible = true
  
  introText.visible = false
  
  startTime = millis()
  quest.vanishTime = millis()
  quest.Gap = quest.avgGap * 1/2
  
  player.hp = player.maxhp
  
  /*for(i = 0; i < fishGoal.length; i++)
    {
      fishGoal[i].ghost = true
    }*/
}
