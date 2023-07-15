function initiallizeHUD()
{
  //warning
  {
    warning = new Group()
    warning.image = spriteArt(warningText,3)
    warning.overlaps(allSprites)
    warning.y = height/25
    warning.x = width/25
    warning.time = 1300
  }
  
  //border
  {
    
    border = new Group()
    border.color = 0
    border.collider = 'static'
    border.rotationLock = true
    
    leftB = new border.Sprite()
    leftB.height = height - 2*margin
    leftB.width = 1
    leftB.x = margin
    leftB.y = height/2
    
    rightB = new border.Sprite()
    rightB.height = height - 2*margin
    rightB.width = 1
    rightB.x = width - margin
    rightB.y = height/2
    
    topB = new border.Sprite()
    topB.width = width - 2*margin
    topB.height = 1
    topB.x = width/2
    topB.y = margin
    
    botB = new border.Sprite()
    botB.width = width - 2*margin
    botB.height = 1
    botB.x = width/2
    botB.y = height - margin
    
    border.visible = false
  }
  
  //tText
  {
    message = new Group()
    message.collider = 'static'
    message.radius = 0
    message.textColor = 'white'
    message.textSize = 50
    message.visible = false
    
    beginText = new message.Sprite()
    beginText.text = 'Press Space'
    beginText.y = height/2
    beginText.x = width/2
    
    moneyText = new message.Sprite()
    moneyText.textSize = 40
    moneyText.text = '$00000'
    moneyText.y = height - margin/2
    moneyText.x = width - margin*2.8
    
    goalText = new message.Sprite()
    goalText.textSize = 30
    goalText.text = 'Goal: $' + goal
    goalText.y = margin/2
    goalText.x = margin*2.8
    
    introText = new message.Sprite()
    introText.text = ''
    introText.x = width/2
    introText.y = height/6
    
    chaChing = new message.Group()
    chaChing.textSize = 14
    chaChing.text = '+$'
    chaChing.y = height/3 - player.height
    chaChing.x = player.x
    chaChing.risespeed = 1
    
  }
  
  //goal bar
  {
    goalBarBack = new Sprite()
    goalBarBack.x = goalText.x
    goalBarBack.y = goalText.y
    goalBarBack.width = width * 30/100
    goalBarBack.height = margin * 4/5
    goalBarBack.visible = false
    
    goalBarGauge = new Sprite()
    goalBarGauge.x = goalText.x
    goalBarGauge.y = goalText.y
    goalBarGauge.maxWidth = goalBarBack.width - margin/5
    goalBarGauge.minX = goalBarGauge.x - goalBarGauge.maxWidth/2
    goalBarGauge.width = goalBarGauge.maxWidth
    goalBarGauge.height = goalBarBack.height - margin/5
    goalBarGauge.visible = false
    goalBarGauge.color = color(0,255,0)
  }
  
  //goal fish
  {
    fishGoal = new Group()
    fishGoal.y = margin/2
    fishGoal.x = width * 57/100
    fishGoal.visible = false
  }
  
  //quest
  {
    quest = new Group()
    quest.x = width * 45/100
    quest.y = margin/2
    quest.up = false
    quest.vanishTime = 0
    quest.avgGap = 5000
    quest.Gap = quest.avgGap
    quest.maxFish = 4
    
    quest.rewards = [
      0,
      ['health', 'money'],
      ['health', 'money', 'reel'],
      ['health', 'money', 'reel', 'repel'],
      ['health', 'money', 'reel', 'repel', 'speed'],
      ['health', 'money', 'reel', 'repel', 'speed'],
    ]
    
    questIcon = new quest.Sprite()
    questIcon.visible = false
    
    questColon = new quest.Sprite()
    questColon.image = spriteArt(questColonText,2)
    questColon.x = quest.x + height * 4/100
    questColon.visible = false
  }
  
  //upgrades
  {
    upgrade = new Group()
    upgrade.x = margin * 2
    upgrade.y = margin * 2
    upgrade.weightReduction = 1
    upgrade.current = false
    
    upgrade.reelDuration = 30000
  }
}