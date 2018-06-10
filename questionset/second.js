var re=/[^a-z0-9]+$/;
function j(x)
{
    return re.test(x)
}console.log(j("hello world"))
console.log(j("helloworld "))
console.log(j(123))