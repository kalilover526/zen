var z

function gcd(a,b)
{
    for(let i=1;i<=a&&i<=b;i++)
    { a=Math.abs(a);
       b=Math.abs(b);

       if(a%i==0 && b%i==0)
        z=i
    }
}gcd(9,18)
console.log(z)