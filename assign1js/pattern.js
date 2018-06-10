function pattern(x)
{
    for(i=0;i<x;i++)
    {let temp=""
        for(j=0;j<i;j++)
        {
          (temp=temp+"*");
        }console.log(temp)
        
    }
}(pattern(6))
