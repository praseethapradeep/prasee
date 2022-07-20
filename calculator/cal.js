function ac()
{
    document.getElementById("result").value=" ";
}

function show(input)
{
    document.getElementById("result").value+=input;
}

function equals()
{
    try{
    let output=eval(document.getElementById("result").value);
    document.getElementById("result").value=output;
    }
    catch
    {
        alert('syntax error');
    }
}
var screen= document.getElementById("result");
function del()
{
    screen.value=screen.value.slice(0,-1);
}