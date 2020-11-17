var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices(numberOfSlices) {
    function calculateNumberOfSlicesPerPerson(numberOfPeople) {
        return ` each person gets ${numberOfSlices / numberOfPeople} pieces of pizza`
    }
    return calculateNumberOfSlicesPerPerson;
}


var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
// prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3));
// prints "Each person gets 2.67 slices of pizza"
