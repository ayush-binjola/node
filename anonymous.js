//function which does not have name//
var sum = function(a,b)
{
    return a+b;
}
function callback()
{
    console.warn(add(200,300))
}
 callback(function(a,b){
     return a+b;
 })