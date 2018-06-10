var fruits=["Banana","Orange","Apple","Mango"]
console.log(fruits)
//Adding new element
fruits.push("lemon")
console.log(fruits)
//Deleting element
fruits.pop()
console.log(fruits)
//checking varrible is array or not
console.log(Array.isArray(fruits))
//converting array to string
console.log(fruits.toString())
//Adding element at any position
// var fruits=["Banana","Orange","Apple","Mango"]
// var pos
// pos=console.log('Enter the position for',' ' )
// for(let i=pos;i<=fruits.length;i++)
//    { fruits[i+1]=fruits[i]

//    } 
//    var y=console.log('fruits enter','')
//    fruits[pos]=console.log(y)
//    console.log(fruits)
fruits.splice(3,0,"litchi")
console.log(fruits)