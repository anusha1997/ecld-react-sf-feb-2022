
function stops(){
    console.log("any");
    document.getElementById('red').style.backgroundColor = 'red'
    document.getElementById('yellow').style.backgroundColor = 'grey'
    document.getElementById('green').style.backgroundColor = 'grey'
}
function ready(){
    document.getElementById('yellow').style.backgroundColor = 'yellow'
    document.getElementById('green').style.backgroundColor = 'grey'
    document.getElementById('red').style.backgroundColor = 'grey'
}
function go(){
    document.getElementById('green').style.backgroundColor = 'green'
    document.getElementById('red').style.backgroundColor = 'grey'
    document.getElementById('yellow').style.backgroundColor = 'grey'
}