function HUD()
{
  if(gameState == 1 && player.alive)
    {
      //money
      {
        if(player.money/10 < 1)
          {
            moneyText.text = '          $'+player.money
          }
        else if (player.money/1000 < 1)
          {
            moneyText.text = '      $'+player.money
          }
        else if (player.money/10000 < 1)
          {
            moneyText.text = '    $'+player.money
          }
        else if (player.money/100000 < 1)
          {
            moneyText.text = '  $'+player.money
          }
        else
          {
            moneyText.text = '$'+player.money
          }
        moneyText.visible = true
      }
      
      //money gain text
      {
        chaChing.visible = true
        for(i = 0; i < chaChing.length; i++)
          {
            chaChing[i].y = chaChing[i].y - chaChing.risespeed
            if (chaChing[i].y < height*2/9)
              {
                chaChing[i].remove()
              }
          }
      }

      //goal bar
      {
        goalText.visible = false
        goalText.text = 'Goal: $' + levelGoals[level]
        
        goalBarBack.visible = true
        goalBarBack.color = levelColors[level]
        
        if(player.money == 0)
          {
            goalBarGauge.width = 1
          }
        else if(player.money <= levelGoals[level])
          {
            goalBarGauge.width = goalBarGauge.maxWidth * (player.money/levelGoals[level])
          }
        else
          {
            goalBarGauge.width = goalBarGauge.maxWidth
          }
        goalBarGauge.x = goalBarGauge.minX + goalBarGauge.width/2
        goalBarGauge.visible = true
      }

      //iFrame indicator
      {
      if(millis()-damageTime < iFrames)
        {
        if(floor((millis() - damageTime)/150) % 2 == 0)
          {
            player.image = spriteArt(boatText,3,player.PaletteTrans)

          }
        else
          {
            player.image = spriteArt(boatText,3,player.Palette)

          }
        }
      else
        {
          player.image = spriteArt(boatText,3,player.Palette)
          
        }
      }
      
      //life
      {
        while(heart.length < player.hp+1)
        {
          h = new heart.Sprite()
          h.x = heart.length*50 + h.radius *3/2
        }
        heart[heart.length-1].remove()

        heart.visible = true
      }
      
      //quest
      {
        questController()
      }
    }
  
  //warning
  {
    for(i = 0; i < warning.length; i++)
    {
      if(millis() - warning[i].spawn > warning[i].time)
        {
          warning[i].remove()
        }
    }
  
    if(floor(millis()/200) % 2 == 0 && gameState == 1)  //execute this every half a second
      {
        warning.visible = true  //blinks the text
      }
    else
      {
        warning.visible = false
      }
  }
  
}

function newWarning(x,y, time)
{
  warn = new warning.Sprite()
  warn.spawn = millis()
  warn.x = x
  warn.y = y
  warn.time = time
}

function moneyNotification(amount, X, Y = chaChing.y, col = color(255))
{
  c = new chaChing.Sprite()
  c.color = col
  c.x = X
  c.y = Y
  c.text = '$'+amount
}
/*function fishIcons()
{
  fishGoalArray = {}
  for (i = 0; i < fish.fishList.length; i++)
    {
      fishGoalArray[fish.fishList[i].name] = fishGoal.array[fish.fishList[i].name][level-1]
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
}*/

