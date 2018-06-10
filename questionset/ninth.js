var a=[1,2,34,77,66,12,7]
console.log(a)
var max=a[0]
var temp
var p
for(i=0;i<=a.length;i++)
{
    if(max<a[i])
    { max=a[i]
    
        temp=a[max]
    }
  
}
console.log(max)
console.log(temp) 