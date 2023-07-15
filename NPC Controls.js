spawnVar = (1/3)

function fishController()
{
  //Checking for interactions between fish and hook/player
  for(i = 0; i < fish.length ; i++)
    {
      if(hook.overlapping(fish[i]) &&
         
         fish[i].name != 'shark' &&
         
         hook.hasFish == false &&
         
         fish[i].canCatch == true &&
          
         fish[i].spawnSide * -1 * hook.x > 
         fish[i].spawnSide * -1 * fish[i].x + hook.width &&
         
         fishLine.inTact
         )
        {
          hookedFish(i, fish)
        }
      else if(fish[i].overlapping(fishLine) &&
        
              fish[i].name == 'swordFish' && 
              
              fishLine.inTact == true &&
              
              hook.fish.name != 'swordFish' &&
              
              fish[i].spawnSide * -1 * hook.x > 
              fish[i].spawnSide * -1 * fish[i].x
             )
        {
          
          fishLine.inTact = false
          hook.x = (hook.x + player.x)/2
          hook.y = fish[i].y
          
          if(hook.hasFish)
            {
              hook.fish.remove()
              hook.hasFish = false
              hook.fishWeight = 0
            }
        }
      else if(fish[i].x > 0 && 
              fish[i].x < width)
        {
          fish[i].y = fish[i].y + fish[i].amp*sin(fish[i].x)
        }
      
      if(fish[i].name == 'shark')
        {
          if(player.overlapping(fish[i]) && hook.fish != fish[i])
            {
              damage()
            }
          
          if(fish[i].y <= height/3 + 8)
            {
              if(fish[i].spawnSide == -1)
                {
                  fish[i].direction = 0
                }
              else
                {
                  fish[i].direction = 180
                }
            }
          else if(fish[i].spawnSide == -1 && fish[i].x > width + 3 * margin)
            {
              spawnFish(shark, fish[i].V[level]['avgSpd']*1.1, fish[i].y -height/40, 0.1, 1)
              fish[i].remove()
            }
          else if(fish[i].spawnSide == 1 && fish[i].x < 0 - 2 * margin) 
            {
              spawnFish(shark, fish[i].V[level]['avgSpd']*1.1, fish[i].y -height/40, 0.1, -1)
              fish[i].remove()
            }

        }
    }
  
  //Checking for interactions between shark and hook
  for(i = 0; i < shark.length; i++)
    {
      if(hook.overlapping(shark[i]) &&
        hook.hasFish == true &&
        hook.fish.name == 'guppy' &&

        shark[i].spawnSide * -1 * hook.x > 
        shark[i].spawnSide * -1 * shark[i].x + hook.width &&
        
        shark[i].y > height/3 + 50 &&

        fishLine.inTact)
        {
          hook.fish.remove()
          hookedFish(i, shark)
        }

    }
  
  //Checking for interactions between puffer fish and hook
  for(i = 0; i < puffer.length; i++)
    {
      if(puffer[i].canCatch == true && 
         
         dist(hook.x,hook.y,puffer[i].x,puffer[i].y) < puffer.sight &&
         
         (player.speed > 0 ||
          hook.vertMoving) &&
         
         hook.fish != puffer[i] &&
         fishLine.inTact)
        {
          puffer[i].canCatch = false
          puffer[i].image = spriteArt(bigPufferText,2,puffer.Palette)
          puffer[i].rotationSpeed = random([-1,-0.75, -0.5, 0.5, 0.75, 1])
        }
      
      puffer[i].warning.x = puffer[i].x
      puffer[i].warning.y = puffer[i].y
      puffer[i].warning.visible = true
      
      if(hook.fish == puffer[i])
        {
          //puffer[i].warning.remove()
        }
    }
  
  
  /*for(i = 0; i < catFish.length; i++)
    {
      if(catFish[i].y < height - margin)
        {
          if(catFish[i].speed > 0)
            {
              catFish[i].speed = 0
              catFish[i].stopTime = millis()
            }
          
          else if(millis() - catFish[i].stopTime > catFish.waitTime)
            {
              catFish[i].speed = -1
            }
        }
    }*/
  
  //fish controls once hooked
  if(hook.hasFish && typeof(hook.fish) != 'undefined')
    {
      hook.fish.x = hook.x
      hook.fish.y = hook.y + hook.fish.width*0.3
      
      if(hook.fish.overlaps(player))
        {
          player.money = player.money + hook.fish.price
          moneyNotification(hook.fish.price, player.x)
          
          player.fishCount[hook.fish.name][level-1]++
          
          updateGoals(hook.fish.name)
          
          hook.fish.remove()
          hook.hasFish = false
          hook.fishWeight = 0
          
        }
    }
  
  if(!player.alive)
    {
      hook.fish.remove()
      hook.hasFish = false
      hook.fishWeight = 0
    }
  
  make(tuna)
  make(swordFish)
  make(redSnapper)
  make(guppy)
  make(puffer)
  //make(catFish)
  make(iceberg)
  
  if(gameState == 1)
    {
      make(shark)
      make(bird)
    }
  
  birdCheck()
  obsCheck()
}

function hookedFish(i, groupType)
{
  hook.hasFish = true
  hook.fish = groupType[i]
  hook.fishWeight = groupType[i].weight

  if(groupType[i].spawnSide == -1)
    {
      hook.fish.rotation = 270
    }
  else
    {
      hook.fish.rotation = 90
    }
}

function make(Type)
{
  createNPC(Type,
           random(Type.V[level]['startGap'] * 0.9 ,Type.V[level]['startGap']) * 1.1, 
           Type.V[level]['avgGap'],
           Type.V[level]['avgSpd'],
           Type.V[level]['avgDepth'],
           Type.V[level]['dpthVar'])
  
}

function createNPC(NPC,startGap, avgGap, avgSpd, avgDepth, dpthVar)
{

  if(millis() - startTime > startGap)
    {
      if(millis() - NPC.lastSpawn > NPC.randomGap)
        {
          if(NPC.name == 'catFish')
            {
              spawnCatfish(NPC,avgSpd,avgDepth,dpthVar,random([-1,1]))
            }
          else if(NPC.name == 'iceberg')
            {
              spawnObstacle(NPC, avgSpd, random([-1,1]))
            }
          else if(NPC.name == 'bird')
            {
              spawnBird(avgSpd)
            }
          else
            {
              spawnFish(NPC,avgSpd,avgDepth,dpthVar,random([-1,1]))
            }
          NPC.lastSpawn = millis()
          NPC.randomGap = random(avgGap*(1-spawnVar), avgGap*(1+spawnVar))
        }
    }
}

function spawnFish(fishType, avgSpd, avgDepth, dpthVar, spawnSide)
{
  Clone = new fishType.Sprite()
  Clone.y = random(avgDepth + dpthVar, avgDepth - dpthVar)
  Clone.spawnSide = spawnSide
  Clone.speed = random(avgSpd * 0.9, avgSpd * 1.1)
  
  if(Clone.name == 'puffer')
    {
      wClone = new pufferWarn.Sprite()
      wClone.visible = false
      Clone.warning = wClone
    }
  
  if(Clone.spawnSide == -1)
    {
      if(Clone.name == 'shark')
        {
          Clone.direction = 0 - shark.riseAngle
          
        }
      else
        {
          Clone.direction = 0
        }
    }
  else
    {
      if(Clone.name == 'shark')
        {
          
          Clone.direction = 180 + shark.riseAngle
        }
      else
        {
          Clone.direction = 180
        }
    }

  if(Clone.spawnSide == -1)
    {
      Clone.x = 0 - fishType.spawnDist
      Clone.mirror.x = true
    }
  else
    {
      Clone.x = width + fishType.spawnDist
    }

  if(Clone.danger > 0 && gameState == 1)
    {
      if(Clone.spawnSide == -1)
        {
          newWarning(width/25, Clone.y, 1300)//warn.x = width/25
        }
      else
        {
          newWarning(width*24/25, Clone.y, 1300)//warn.x = width*24/25
        }
      }
}

function spawnBird(avgSpd)
{
  Clone = new bird.Sprite()
  Clone.y = 0 - width*(3/4)
  Clone.spawnSide = random([1, -1])
  
  if(Clone.spawnSide == -1)
    {
      Clone.mirror.x = true
    }
  
  Clone.x =  width/2 + (Clone.spawnSide*(width*3/2))
  Clone.moveTo(width/2, height/3)
  Clone.speed = random(avgSpd*0.9, avgSpd*1.1)

}

function spawnObstacle(obs, avgSpd, spawnSide)
{
  Clone = new obs.Sprite()
  Clone.spawnSide = spawnSide
  Clone.speed = random(avgSpd * 0.9, avgSpd * 1.1)
  
  if(Clone.spawnSide == -1)
    {
      Clone.x = 0 - obs.spawnDist
      Clone.destination = random(2*margin,2.5*margin)
      Clone.moveTo(Clone.destination,Clone.y)
    }
  else
    {
      Clone.x = width + obs.spawnDist
      Clone.destination = random(width - 2*margin,width - 2.5*margin)
      Clone.moveTo(Clone.destination,Clone.y)
    }
}

function spawnCatfish(fishType, avgSpd, avgDepth, dpthVar, spawnSide)
{
  Clone = new fishType.Sprite()
  Clone.y = height
  Clone.spawnSide = spawnSide
  Clone.speed = avgSpd
  
  if(Clone.spawnSide == -1)
    {
      Clone.x = random([margin*2, width/2])
      Clone.mirror.x = true
      
    }
  else
    {
      Clone.x = random([width/2, height - margin*2])
      
    }
  
  Clone.moveTo(Clone.x, height - margin)
}

function obsCheck()
{
  for(i = 0; i < iceberg.length; i++)
    {
      
      //notes the time when iceberg stops moving
      if(iceberg[i].x - iceberg[i].destination < 1 && !iceberg[i].arrived)
        {
          iceberg[i].arrivalTime = millis()
          iceberg[i].arrived = true
        }
      
      //moves the iceberg away after it has been sitting for a set time
      if(millis() - iceberg[i].arrivalTime > iceberg.lingerTime && iceberg[i].arrived)
        {
          if(iceberg[i].spawnSide == -1)
            {
              iceberg[i].moveTo(0 - width, iceberg[i].y)
            }
          else
            {
              iceberg[i].moveTo(2 * width, iceberg[i].y)
            }
        }
      
      if(iceberg[i].spawnSide == -1)
        {
          if(iceberg[i].x + iceberg[i].width/2 > margin)
            {
              player.Lbound = iceberg[i].x + iceberg[i].width/2
            }
          else
            {
              player.Lbound = margin
            }
        }
      else
        {
          if(iceberg[i].x - iceberg[i].width/2 < width - margin)
            {
              player.Rbound = iceberg[i].x - iceberg[i].width/2
            }
          else
            {
              player.Rbound = width - margin
            }
        }
      
    }
  
}

function birdCheck()
{
  for(i = 0; i < bird.length; i++)
      {
        if(bird[i].y > height/3 - 1.5 * bird[i].radius)
          {
            if (bird[i].spawnSide == -1)
              {
                bird[i].direction = random(-12,-17)
              }
            else
              {
                bird[i].direction = random(-168,-163)
              }
          }

        if(bird[i].x > 0 &&
          bird[i].x < width &&
          bird[i].y > 0 &&
          bird[i].entered == false)
          {
            bird[i].entered = true
            bird[i].direction = atan2(player.y - bird[i].y,player.x - bird[i].x)
          }
        
        if(player.overlapping(bird) && dist(player.x,player.y,bird[i].x,bird[i].y) - bird.radius * 2/3 < player.height/2)
          {
            damage()
          }
      }
}