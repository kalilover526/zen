var re=/^#(?:[0-9a-fA-F]{3}){1,2}$/;
function hex(y)
{
    return re.test(y)
}
console.log(hex("#FFF123"))