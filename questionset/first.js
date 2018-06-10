//regex
var re=/[A-Z]/
function a(string)
{
    return re.test(string.charAt(0))
}
console.log(a("aBc"))
console.log(a(" Avd"))