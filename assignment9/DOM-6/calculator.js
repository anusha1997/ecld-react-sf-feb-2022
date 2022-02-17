let btn = document.getElementById('btn')
console.log(btn);
function calculator(){
    let billAmount = document.getElementById('bill-amount').value;
    let tipPercentage = document.getElementById('tip').value;

    let tipAmount = document.getElementById('tip-amount').value = (billAmount * tipPercentage) / 100;
    document.getElementById('total').value = parseFloat(billAmount) + parseFloat(tipAmount);
    let total = parseFloat(billAmount) + parseFloat(tipAmount);

    document.getElementById('bill').innerHTML = `Total bill -  ${total}`;

    if(billAmount === '' || tipPercentage === ''){
        document.getElementById('bill').innerHTML = 'Please enter a valid input'

    }
}