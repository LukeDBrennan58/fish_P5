function blinkText(words,rate = 500)
{
  if(floor(millis()/rate) % 2 == 0 && typeof(words) != 'undefined')  //execute this every half a second
    {
      words.visible = true  //blinks the text
    }
  else if(typeof(words) != 'undefined')
    {
      words.visible = false
    }
}

function canAdvance()
{
  /*fishGoalsMet = true
  for(i = 0; i < fish.fishList.length; i++)
    {
      if(player.fishCount[fish.fishList[i].name][level - 1] < levelFishGoals[fish.fishList[i].name][level - 1])
        {
          fishGoalsMet = false
        }
    }*/
  
  
  return player.money >= levelGoals[level]// && fishGoalsMet
}