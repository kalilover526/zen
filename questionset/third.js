var re=/[0-9]+$/
function a(str)
{
    return re.test(str)
}
console.log(a("hello world"))
console.log(a(123))