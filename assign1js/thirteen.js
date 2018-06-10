var x
var y 
function average(name,marks) 
{
    if(marks<60)
    {
        console.log(name,marks,'F')
    }
    else if(marks<70)
    {
        console.log(name,marks,'D')
    }
    else if(marks<80)
    {
        console.log(name,marks,'C')
    }
    else if(marks<90)
    {
        console.log(name,marks,'B')
    }
    else{
        console.log(name,marks,'A')
    }
}average("David",80)