function setScene()
{
  //Continuously run
  if(level == 1)
    {
      
      background(200,240,255)

      fill(0, 150, 26)
      ellipse(width/2 + width/3, height/2, width*1.3, height*17/30)

      fill(0, 170, 26)
      ellipse(width/2 - width/6, height/2, width*1.3, height*16/30)

      fill(255, 241, 194)
      ellipse(width/2, height/2, width*2.25, height*5/12)
    }
  else if(level == 2)
    {
      
      background(200,240,255)

      fill(255, 241, 194)
      ellipse(width/2, height/2, width*3/2, height*5/12)

    }
  else if(level == 3)
    {
      background(200,210,240)
      
    }
  else if(level == 4)
    {
      background(210,220,240)
      
      fill(245, 245, 255)
      ellipse(width/2, height/2, width*2.25, height*6/12)
    }
  else if(level == 5)
    {
      background(78, 97, 87)
    }
    
  
}

function startScene()
{
  if(level == 1)
    {
      ocean.color = color(50,190,255)
    }
  else if(level == 2)
    {
      ocean.color = color(80,210,255)
      
      for(i = 0; i < 30; i++)
        {
          cor = new coral.Sprite()
          cor.image = spriteArt(coralText,2.5,{'8': random(coralColors)})
          cor.layer = random(cor.layer - 0.01, cor.layer + 0.01)
          if(i<15)
            {
              cor.x = cor.x + i*50
              cor.y = random(height - margin*5/4,height - margin*7/4) - (abs(cor.x - width/2)*1/10) 
            }
          else
            {
              cor.x = cor.x + (i-15)*40
              cor.y = random(height,height - margin*1/4)- (abs(cor.x - width/2)*1/10)
            }
          cor.rotation = random(-60,60)
        }

        hill1 = new BG.Sprite()
        hill1.radius = width
        hill1.x = 0
        hill1.y = height*1.45
        hill1.color = color(154,186,210)
        hill1.layer = hill1.layer + 0.01

        hill2 = new BG.Sprite()
        hill2.radius = width*7/5
        hill2.x = width
        hill2.y = height*1.60
        hill2.color = color(125,195,225)

      
    }
  else if(level == 3)
    {
      ocean.color = color(60,120,220)
    }
  else if(level == 4)
    {
      ocean.color = color(90,170,245)
      
    }
  else if(level == 5)
    {
      ocean.color = color(74, 108, 133)
      
      mud.visible = true

    }
  
}

function paletteUpdate()
{
  
  if(!palInitiallized)
    {
      player.Palette = 
          {
            'b': color(165,95,40),
            'c': color(230,130,80),
            'w': color(255),
            'B': color(0)
          }
      
      bird.Palette =
          {
            'b': color(115,80,70),
            'y': color(240,225,125),
            'E': color(0),
            'w': color(250,245,240)
          }
      
      iceberg.Palette =
        {
          'w': color(165,205,250, 0),
            'l': color(165,205,250, 0),
          'o': color(235,240,255),
            'O': color(235,240,255),
            'p': color(235,240,255),
          'b': color(165,205,250),
            'L': color(165,205,250)
        }
      
      heart.Palette =
          {
            'r': color(255,0,0),
            'R': color(175,0,0),
            'w': color(255),
            'b': color(10,0,0),
            'B': color(0)
          }
      
      quest.Palette = 
        {
          'g': color(0,220,0),
          'B': color(0),
          'r': color(80,210,125),
          'G': color(125,155,175)
        }

      tuna.Palette = 
          {
            'b': color(85,80,120),
            'e': color(0),
            'E': color(255),
            'l': color(170,205,240),
            'B': color(120,145,190)
          }

      swordFish.Palette = 
          {
            'b': color(85,80,95),
            'e': color(0),
            'E': color(255),
            'l': color(210,225,240),
            'B': color(150,165,180)
          }
      
      redSnapper.Palette = 
          {
            'b': color(140,50,50),
            'e': color(0),
            'E': color(255,255,0),
            'l': color(200,60,60),
            'B': color(250,120,120)
          }
      
      guppy.Palette = 
          {
            'b': color(190,160,60),
            'e': color(0),
            'E': color(255),
            'l': color(225,225,60),
            'B': color(225,200,60)
          }
      
      puffer.Palette = 
          {
            'b': color(120,80,85),
            'e': color(0),
            'E': color(255),
            'l': color(245,235,180),
            'B': color(240,140,50)
          }
      shark.Palette = 
          {
            'b': color(40,40,50),
            'e': color(0),
            'E': color(255),
            'l': color(235,235,245),
              'B': color(235,235,245),
            'g': color(170,170,180),
              'o': color(170,170,180)
          }
      
      palInitiallized = true
      
    }
  
  if(level == 1)
    {
      
    }
  
  else if(level == 2)
    {
      tuna.Palette = 
        {
          'b': color(85,80,120),
          'e': color(0),
          'E': color(255),
          'l': color(30, 232, 205),
          'B': color(17, 140, 134)
        }

    }
  
  else if(level == 3)
    {
      tuna.Palette = 
        {
          'b': color(70, 70, 130),
          'e': color(0),
          'E': color(255),
          'l': color(66, 66, 184),
          'B': color(210, 186, 110)
        }
      guppy.Palette = 
        {
          'b': color(70,70,75),
          'e': color(0),
          'E': color(255),
          'l': color(166, 143, 91),
          'B': color(100, 90, 60)
        }
      puffer.Palette = 
        {
          'b': color(85,80,120),
          'e': color(0),
          'E': color(255),
          'l': color(235,235,245),
          'B': color(200,170,100)
        }
      
    }
  
  else if(level == 4)
    {
      tuna.Palette = 
        {
          'b': color(70, 70, 130),
          'e': color(0),
          'E': color(255),
          'l': color(0, 72, 125),
          'B': color(240,240,250)
        }
      guppy.Palette = 
        {
          'b': color(110,110,125),
          'e': color(0),
          'E': color(255),
          'l': color(200),
          'B': color(207, 169, 198)
        }
      shark.Palette = 
        {
          'b': color(0),
          'e': color(255),
          'E': color(255),
            'o': color(255),
          'l': color(255),
          'g': color(0),
            'B': color(0)
        }
      puffer.Palette = 
        {
          'b': color(85,80,120),
          'e': color(0),
          'E': color(255),
          'l': color(230,230,250),
          'B': color(138, 207, 255)
        }
    }
  
  else if(level == 5)
    {
      iceberg.Palette =
        {
          'w': color(165,205,250, 0),
            'l': color(165,205,250, 0),
          'o': color(235,240,255,0),
            'O': color(74, 44, 0),
            'p': color(74, 44, 0),
          'b': color(165,205,250,0),
            'L': color(74, 44, 0)
        }
      
      tuna.Palette = 
        {
          'b': color(70, 70, 130),
          'e': color(0),
          'E': color(255),
          'l': color(10, 80, 10),
          'B': color(110, 130, 80)
        }
      guppy.Palette = 
        {
          'b': color(79, 68, 52),
          'e': color(0),
          'E': color(255),
          'l': color(100, 90, 60),
          'B': color(161, 186, 153)
        }
      shark.Palette = 
        {
          'b': color(40,40,50),
          'e': color(0),
          'E': color(255),
          'l': color(197, 219, 169),
            'B': color(197, 219, 169),
          'g': color(49, 130, 36),
            'o': color(49, 130, 36)
        }
      puffer.Palette = 
        {
          'b': color(85,80,120),
          'e': color(0),
          'E': color(255),
          'l': color(167, 184, 94),
          'B': color(117, 125, 31)
        }
      
    }
      
      makeTransPalette(player)
      makeTransPalette(tuna)
      makeTransPalette(swordFish)
      makeTransPalette(redSnapper)
      makeTransPalette(guppy)
      makeTransPalette(puffer)
      makeTransPalette(shark)
      
      heart.image = spriteArt(heartText,2,heart.Palette)
  
      player.image = spriteArt(boatText,3,player.Palette)
      bird.image = spriteArt(birdText, 1, bird.Palette)
      iceberg.image = spriteArt(icebergText,2,iceberg.Palette)
      guppy.image = spriteArt(guppyText,2,guppy.Palette)
      tuna.image = spriteArt(tunaText,2,tuna.Palette)
      swordFish.image = spriteArt(swordText,2,swordFish.Palette)
      redSnapper.image = spriteArt(redText,2,redSnapper.Palette)
      puffer.image = spriteArt(pufferText,2,puffer.Palette)
      shark.image = spriteArt(sharkText,2,shark.Palette)
  
      //questIcon.image = spriteArt(heartText,2,heart.Palette)
  

}

function makeTransPalette(fishType)
{
  letters = ['b','e','E','l','B','c','w','g','y']
  fishType.PaletteTrans = {}
  
  for(i = 0; i < letters.length; i++)
    {
      if(typeof(fishType.Palette[letters[i]]) != 'undefined')
        {
          
          fishType.PaletteTrans[letters[i]] = color(fishType.Palette[letters[i]].levels[0],
                                                fishType.Palette[letters[i]].levels[1],
                                                fishType.Palette[letters[i]].levels[2],
                                                100)
          
          
        }
    }
  
}