// TIP APP FOR FUN
const bill = prompt(`what is the bill?`)
const service = prompt('How was the service? (Yes or No)')

const calcTip = function(service, billValue){
    if(service === 'Yes'){
        return billValue * .20
    } else {
        return billValue *.15
    }
}

alert(`You should tip $${calcTip(service, bill)}`)
const tip = calcTip(service,bill);

//test

// alert(`Your meal will cost $${tip + bill}`)