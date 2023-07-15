function playerController()
{
  //locking player y axis
  player.y = height/3 - player.height/4
  if(player.direction == 180)
    {
      player.mirror.x = true
    }
  else
    {
      player.mirror.x = false
    }
  
  
  if(kb.pressing('a') && kb.pressing('d'))  //holding a and d will hold boat still
    {
      player.speed = 0
    }
  
  //horizontal movement
  else if(kb.pressing('a')||kb.pressing('d'))  
    {
      if(kb.pressing('a'))
        {
          player.speed = player.Lspd  //Lspd is set to 0 if on left border
          player.direction = 'left'
        }
      else if(kb.pressing('d'))
        {
          player.speed = player.Rspd  //same for Rspd
          player.direction = 'right'
        }
      }
  else
    {
      player.speed = 0
    }
  
  //Border detection
  if(player.x <= player.Lbound + player.width/2)
    {
      player.Lspd = 0
    }
  else
    {
      player.Lspd = player.max
    }

  if(player.x >= player.Rbound - player.width/2)
    {
      player.Rspd = 0
    }
  else
    {
      player.Rspd = player.max
    }
  
  if(player.x < player.Lbound + player.width/2- player.max &&
    !kb.pressing('d'))
    {
      player.moveTo(player.Lbound + player.width/2 - player.max, player.y)
    }
  else if(player.x > player.Rbound - player.width/2 + player.max &&
    !kb.pressing('a'))
    {
      player.moveTo(player.Rbound - player.width/2 + player.max, player.y)
    }
}

function hookController()
{
  //moves the hook to the position under the boat gradually
  hook.moveTo(player.x,hook.y)
  
  //makes the hook move faster when lagging further behind the boat
  hook.speed = hook.max * abs(player.x-hook.x)/elasticity
  
  //changes how far it lags behind based on depth of the hook
  elasticity = 20*(hook.y-player.y)/(height*2/9) + 5
  
  //hook vertical movement controls
  if(kb.pressing('s')||kb.pressing('w'))
    {
      hook.vertMoving = true
      
      if(kb.pressing('w') && hook.y > height/3 + hook.height/2)
        {
          hook.y = hook.y - hook.raiseSpeed + (hook.fishWeight * upgrade.weightReduction)
        }
      else if(kb.pressing('s') && !hook.overlapping(border))
        {
          hook.y = hook.y + hook.lowerSpeed + (hook.fishWeight * upgrade.weightReduction)
        }
    }
  else
    {
      hook.vertMoving = false
    }
  
  if(hook.visible == false && fishLine.inTact)
    {
      hook.visible = true
    }

}

function lineController()
{
  
  fishLine.rotation = atan2(hook.y-player.y, hook.x - player.x)
  fishLine.x = player.x - (player.x-hook.x)/2
  fishLine.y = player.y + (hook.y-player.y)/2
  fishLine.width = dist(player.x,player.y,hook.x,hook.y)
  
  if(!fishLine.inTact)
    {
      hook.visible = false
      
      if(hook.overlapping(player) || hook.y < height/3 + hook.height)
        {
          player.money = player.money - hook.price
          c = new chaChing.Sprite()
          c.text = '-$'+hook.price
          c.x = player.x
          c.textColor = color(255,0,0)
          fishLine.inTact = true
        }
    }
    
}

function damage()
{
  if(gameState == 1)
    {
      if(millis()-damageTime > iFrames)
        {
          player.hp--
          damageTime = millis()
        }

      if(player.hp == 0)
        {
          death()
        }
    }
  
}

function death()
{
  player.visible = true
  hook.visible = true
  fishLine.visible = true
  player.alive = false
  
  player.money = 0
  
  heart.removeAll()
  
  gameState = -1
}