var re=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
function url(x)
{
    return re.test(x)
}
console.log(url("tp://www.kdsjfldsf.com"))
console.log (url("www.hkdjfk.com"))