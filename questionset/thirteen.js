var b=1
var c=0
var k

function a(aray)
{
 for (let i=0;i<aray.length;i++)
 {
     for(let j=1;j<aray.length;j++)
     {
         if(aray[i]==aray[j])
             c++;
        if(b<c)
        {
            b=c;
            k=aray[i]

        }

     }c=0;
 }
}a([1,1,5,5,5])
console.log("item "+ k+ " "+  b + " times")