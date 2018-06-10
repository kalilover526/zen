
function sum(a,b)
{  if(a.length==b.length)
    {
    for(i=0;i<a.length;i++)
     {  
         var s=a[i]+b[i] 
         console.log(s)
     }
    }
    else{
        console.log("array length doesn't match")
    }
}sum([1,2,3,4],[5,6,4,,5,7])