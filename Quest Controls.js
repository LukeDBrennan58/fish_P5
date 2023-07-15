function questController()
{
  upgradeCounter()
  upgradeApplication()
  
  if(millis() - quest.vanishTime > quest.Gap &&
    !quest.Up)
    {
      createNewQuest()
      quest.Up = true
      quest.Gap = random (quest.avgGap * 0.8, quest.avgGap * 1.2)
    }
}

function createNewQuest()
{
  quest.current = random(quest.rewards[level])
  
  while(quest.current == upgrade.current)
    {
      quest.current = random(['health','money'])//quest.rewards[level])
    }
  
  switch (quest.current)
    {
      case 'health':
        questIcon.image = spriteArt(heartQuestText,2,heart.Palette)
        break
        
      case 'money':
        questIcon.image = spriteArt(moneyQuestText,2,quest.Palette)
        break
        
      case 'reel':
        questIcon.image = spriteArt(reelQuestText,2,quest.Palette)
        break
        
      case 'repel':
        //questIcon.image = 1
        break      
        
      case 'speed':
        //questIcon.image = 1
        break      

    }
        
  questIcon.visible = true
  questColon.visible = true
        
  fishIcons()
}
  
function removeQuest()
{
  switch (quest.current)
    {
      case 'health':
        
        player.hp = player.hp + 1
        break
        
      case 'money':
        amountGained = floor(levelGoals[level] * 1/(level + 3))
        player.money = player.money + amountGained
        moneyNotification(amountGained, player.x + width/12, chaChing.y + width/24,color(20,200,20))
        
        break
        
      case 'reel':
        reelInd = new upgrade.Sprite()
        reelInd.image = spriteArt(reelQuestText,3,quest.Palette)
        reelInd.visible = true
        upgrade.current = 'reel'
        upgrade.duration = upgrade.reelDuration//15000
        upgrade.startTime = millis()
        
    }
  quest.vanishTime = millis()
  quest.Up = false
  
  quest.visible = false
  fishGoal.removeAll()
}
  
function upgradeCounter()
{
    if(millis() - upgrade.startTime > upgrade.duration ||
      gameState != 1)
      {
        upgrade.visible = false
        upgrade.current = false
        upgrade.duration = I
      }
  }

function upgradeApplication()
{
    if(upgrade.current == 'reel')
      {
        hook.raiseSpeed = hook.defaultRaiseSpeed + 1
        upgrade.weightReduction = 1/2
        fishLine.color = color(125,155,175)
      }
    else if(hook.raiseSpeed != hook.defaultRaiseSpeed)
      {
        hook.raiseSpeed = hook.defaultRaiseSpeed
        upgrade.weightReduction = 1
        fishLine.color = fishLine.defaultColor
      }
  }
  
function fishIcons()
{
  possibleFish = []
  fishGoalArray = {}
  
  for (i = 0; i < fish.fishList.length; i++)
    {
      fishGoalArray[fish.fishList[i].name] = 0
    }
  
  j = 0
  for(i = 0; i < fish.fishList.length; i++)
    {
      if(fish.fishList[i].V[level]['startGap'] != I &&
         fish.fishList[i].name != 'guppy')
        {
          possibleFish[j] = fish.fishList[i].name
          j++
        }
    }
  
  for(t = 0; t < quest.maxFish; t++)
    {
      
      
      fishChoice = random(possibleFish)
      
      fishGoalArray[fishChoice] = fishGoalArray[fishChoice] + 1
    }
        
  amountOfIcons = 0     
  for(i = 0; i < fish.fishList.length; i++)
    {
      for(j = 0; j < fishGoalArray[fish.fishList[i].name]; j++)
        {
          icon = new fishGoal.Sprite()
          icon.type = fish.fishList[i]
          icon.image = spriteArt(icon.type.iconArt,2,icon.type.PaletteTrans)
          icon.x = fishGoal.x + amountOfIcons * (width/10)
          icon.visible = true
          icon.ghost = true
          
          amountOfIcons++

        }
      
    }  
}
  
function updateGoals(fishType)
{
  filled = false
  for (i = 0; i < fishGoal.length && !filled; i++)
    {
      if(fishType == fishGoal[i].type.name && 
         fishGoal[i].ghost)
        {
          fishGoal[i].image = spriteArt(fishGoal[i].type.iconArt,2,fishGoal[i].type.Palette)
          fishGoal[i].ghost = false
          filled = true
        }
    }
  filled = false
  
  questComplete = true
  for (i = 0; i < fishGoal.length; i++)
    {
      questComplete = questComplete && !fishGoal[i].ghost
    }
  
  if(questComplete && quest.Up)
    {
      removeQuest()
    }
    
}