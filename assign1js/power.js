var flag=0;
function pow(x)
{for(let i=0;i<x/2;i++){
    if(Math.pow(2,i)==x)
    {
        flag=0;
   break; }

    else{
       flag=1;
    }
}
if (flag==0)
{
    console.log('yes')
}
else{
    console.log('no')
}
}pow(10)